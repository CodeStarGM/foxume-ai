import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumemint AI" },
    { name: "description", content: "Free ATS Resume Checker" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();

  const navigate = useNavigate();

  const [resumes, setResumes] = useState<Resume[]>([]);

  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list("resume:*", true)) as KVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume,
      );

      setResumes(parsedResumes || []);

      setLoadingResumes(false);
    };
    loadResumes();
  }, []);

  return (
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
            Beat the bots. Land the interview.{" "}
          </h1>
          <h2 className="mt-8 !text-xl !sm:text-2xl text-gray-900 text-center max-w-3xl leading-relaxed">
            Foxume uses AI to review your resume like an ATS would, scoring it
            instantly and showing you exactly what to fix before a recruiter
            ever sees it.
          </h2>

          {/* main body */}
          <section>
            {loadingResumes && (
              <div className="flex flex-col items-center justify-center">
                <img src="/images/resume-scan-2.gif" className="w-[200px]" />
              </div>
            )}

            <div className="resumes-section pt-20">
              {!loadingResumes &&
                resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
                ))}
            </div>

            {!loadingResumes && resumes?.length === 0 && (
              <>
                <h2 className="mt-8 !text-xl !sm:text-xl text-gray-900 text-center max-w-3xl leading-relaxed">
                  (no resumes) Upload your resume and get your score{" "}
                </h2>

                <div className="flex items-center justify-center flex-col mt-10 gap-4">
                  <Link
                    to="/upload"
                    className="primary-button w-fit text-xl font-semibold"
                  >
                    Upload Resume
                  </Link>
                </div>
              </>
            )}
          </section>

          {/* main body */}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="py-10 px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white rounded-b-[2.5rem]">
        {/* Left Side: Sparkle Icon + Text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-6 max-w-3xl">
          <div className="relative w-16 h-16 flex-shrink-0">
            {/* Custom SVG approximating the 3D Sparkle */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient
                  id="sparkleMain"
                  x1={10}
                  y1={10}
                  x2={54}
                  y2={54}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#a78bfa" />
                  <stop offset="0.5" stopColor="#fbcfe8" />
                  <stop offset={1} stopColor="#818cf8" />
                </linearGradient>
                <linearGradient
                  id="sparkleSmall"
                  x1={0}
                  y1={0}
                  x2={20}
                  y2={20}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#c084fc" />
                  <stop offset={1} stopColor="#fbcfe8" />
                </linearGradient>
              </defs>
              <path
                d="M32 8C32 8 36 24 48 28C36 32 32 48 32 48C32 48 28 32 16 28C28 24 32 8 32 8Z"
                fill="url(#sparkleMain)"
              />
              <path
                d="M14 4C14 4 15 10 19 12C15 14 14 20 14 20C14 20 13 14 9 12C13 10 14 4 14 4Z"
                fill="url(#sparkleSmall)"
              />
            </svg>
          </div>
          <p className="text-xl sm:text-2xl text-gray-900 leading-snug">
            AI-powered resume scoring that gets you <br />
            past filters and in front of humans.
          </p>
        </div>
        {/* Right Side: Divider + Proved By Text */}
        <div className="flex items-center gap-8 lg:ml-auto w-full lg:w-auto justify-center lg:justify-end">
          <div className="hidden lg:block w-px h-12 bg-gray-300" />
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="text-xl sm:text-2xl text-gray-900 font-medium">
              created by ghous
            </span>
            <i
              data-lucide="arrow-right"
              className="stroke-2 w-6 h-6 text-gray-900 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
