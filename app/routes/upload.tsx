import React, { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";
import { prepareInstructions } from "~/constants";
import { convertPdfToImage, type PdfConversionResult } from "~/lib/pdf2img";
import { usePuterStore } from "~/lib/puter";
import { generateUUID } from "~/lib/utils";

const upload = () => {
  const { auth, isLoading, fs, ai, kv } = usePuterStore();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyze = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
  }) => {
    setIsProcessing(true);

    setStatusText("Uploading the file ....");

    const uploadedFile = await fs.upload([file]);

    if (!uploadedFile) return setStatusText("Error: fail to upload file");
    console.log(file, "image");

    setStatusText("Converting to image...");
    const imageFile: PdfConversionResult = await convertPdfToImage(file);
    console.log(imageFile, "image");
    if (!imageFile.file)
      return setStatusText("failed to convert file, try again");

    setStatusText("Uploading image...");

    const uplaodedImage = await fs.upload([imageFile.file]);

    if (!uplaodedImage) return setStatusText("failed to upload image");

    setStatusText("Preparing data....");

    const uuid = generateUUID();

    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uplaodedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: "",
    };

    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    setStatusText("Analyzing...");

    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobTitle, jobDescription }),
    );

    if (!feedback) return setStatusText("Error failed to analyze resume");

    const feedbackText =
      typeof feedback?.message.content === "string"
        ? feedback?.message.content
        : feedback?.message.content[0].text;

    data.feedback = JSON.parse(feedbackText);

    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    setStatusText("Analysis complete, redirecting....");

    navigate(`/resume/${uuid}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");

    if (!form) {
      return;
    }

    const formData = new FormData(form);

    const companyName = formData.get("comapny-name") as string;

    const jobTitle = formData.get("job-title") as string;

    const jobDescription = formData.get("job-description") as string;

    if (!file) return;

    handleAnalyze({ companyName, jobTitle, jobDescription, file });
  };

  return (
    <>
      <div className="w-full max-w-[1440px] bg-white rounded-[3rem] shadow-sm overflow-hidden p-3 sm:p-4">
        {/* Gradient Hero Area */}
        <div className="bg-[linear-gradient(110deg,#e0d6fa_0%,#fcf1b8_45%,#fcd55c_100%)] rounded-[2.5rem] pt-8 px-6 sm:px-12 pb-24 flex flex-col items-center relative">
          {/* Navbar */}
          <header className="w-full flex justify-between items-center mb-24 z-10 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="text-3xl font-semibold text-gradient tracking-tight">
              Foxume AI
            </div>
            {/* Desktop Navigation Pill */}
            <Navbar />
            {/* Mobile Menu Icon */}
            <div className="lg:hidden cursor-pointer">
              <i data-lucide="menu" className="w-8 h-8 text-black stroke-2" />
            </div>
          </header>
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center max-w-5xl w-full z-10">
            {/* Main Headline */}

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-black">
              Smart feedback for your dream job
            </h1>
            {isProcessing ? (
              <>
                <h2>{statusText}</h2>
                <img src="/images/resume-scan.gif" className="w-[50%]" />
              </>
            ) : (
              <h2>Drop your resume for ats score and improvement tips</h2>
            )}

            {/* main body */}
            <section className="w-[80%]">
              {" "}
              {!isProcessing && (
                <form
                  id="upload-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 mt-8"
                >
                  <div className="form-div">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                      type="text"
                      name="company-name"
                      placeholder="Company"
                      id="company-name"
                    />
                  </div>

                  <div className="form-div">
                    <label htmlFor="job-title">Job Title</label>
                    <input
                      type="text"
                      name="job-title"
                      placeholder="Job"
                      id="job-title"
                    />
                  </div>

                  <div className="form-div">
                    <label htmlFor="job-description">Job Description</label>
                    <textarea
                      rows={5}
                      name="job-description"
                      placeholder="Job"
                      id="job-description"
                    />
                  </div>

                  <div className="form-div">
                    <label htmlFor="uploader">Upload Resume</label>
                    <FileUploader onFileSelect={handleFileSelect} />
                  </div>

                  <button className="primary-button " type="submit">
                    Analyze resume
                  </button>
                </form>
              )}
            </section>

            {/* main body */}
          </div>
        </div>
      </div>
    </>
  );
};

export default upload;
