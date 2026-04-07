import { Link } from "react-router";
import Navbar from "~/components/Navbar";

const AboutPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white rounded-[3rem] shadow-sm overflow-hidden p-3 sm:p-4">
      {/* Gradient Hero */}
      <div className="bg-[linear-gradient(110deg,#e0d6fa_0%,#fcf1b8_45%,#fcd55c_100%)] rounded-[2.5rem] pt-8 px-6 sm:px-12 pb-24 flex flex-col items-center relative">
        {/* Header */}
        <header className="w-full flex justify-between items-center mb-24 z-10 max-w-7xl mx-auto">
          <div className="text-3xl font-semibold tracking-tight text-black">
            Foxume AI
          </div>
          <Navbar />
        </header>

        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center gap-6 z-10">
          {/* Logo mark */}
          <div className="p-1 rounded-2xl flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Foxume ai logo"
              className="h-auto w-[44%]"
            />
          </div>

          <div className="-mt-10">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight text-black mb-4">
              About Foxume AI
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Your AI-powered resume companion built to help you land the job
              you deserve.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-8 py-12 flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {/* What we do */}
        <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            What we do
          </p>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Resume intelligence, reimagined
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Foxume AI scans your resume and compares it against real job
            descriptions, surfacing gaps, scoring your fit, and suggesting
            targeted improvements — all in seconds. No more guessing why your
            applications go unanswered.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-[#e0d6fa] rounded-xl flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 5h12M4 9h8M4 13h10"
                  stroke="#534AB7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Resume scanning
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Upload your resume as a PDF. The AI reads it, understands the
              structure, and gives you targeted feedback — not boilerplate
              advice.
            </p>
          </div>

          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-[#fcf1b8] rounded-xl flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="7"
                  stroke="#b07c00"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 7v3l2 2"
                  stroke="#b07c00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              No paywalls
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              You get the full analysis every single time — not a teaser. No
              "upgrade to see the rest." That was the whole reason this got
              built.
            </p>
          </div>

          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-[#e1f5ee] rounded-xl flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10l3 3 7-7"
                  stroke="#0F6E56"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Actionable feedback
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Specific, concrete suggestions you can apply before your next
              application — not generic tips like "use action verbs."
            </p>
          </div>

          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-[#fbeaf0] rounded-xl flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 3a7 7 0 1 0 0 14A7 7 0 0 0 10 3zm0 2v5l3 2"
                  stroke="#993556"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Open source
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              The entire codebase is on GitHub. Read it, fork it, self-host it,
              or just verify that it does what it says it does.
            </p>
          </div>
        </div>

        {/* Puter + billing */}
        <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            How billing works
          </p>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Powered by Puter.js — you control the tab
          </h2>
          <div className="flex flex-col gap-4 text-gray-500 leading-relaxed">
            <p>
              Foxume AI is built on{" "}
              <span className="text-black font-medium">Puter.js</span>, which
              means the AI usage is billed directly through your Puter account —
              not through us. Puter offers a{" "}
              <span className="text-black font-medium">free tier</span> that's
              enough to get going, and you can upgrade your Puter plan anytime
              if you need more.
            </p>
            <p>
              You can log into{" "}
              <span className="text-black font-medium">puter.com</span> at any
              time to check your usage, manage your plan, or top up. We have no
              visibility into any of that — it's entirely between you and Puter.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Free tier available
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              Upgrade anytime on puter.com
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Usage dashboard on puter.com
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            Privacy
          </p>
          <h2 className="text-2xl font-semibold text-black mb-4">
            We don't see your data. Full stop.
          </h2>
          <div className="flex flex-col gap-4 text-gray-500 leading-relaxed">
            <p>
              We don't collect your resume. We don't store it on our servers. We
              don't have a database of uploaded files somewhere. Your resume
              goes in, feedback comes back, and that's where our involvement
              ends.
            </p>
            <p>
              Any files saved during your session live in{" "}
              <span className="text-black font-medium">
                your own Puter storage
              </span>{" "}
              — not ours. We genuinely have no access to them. If you want to be
              certain, hit the{" "}
              <span className="text-black font-medium">Wipe Data</span> page and
              everything gets deleted from your Puter storage instantly.
            </p>
            <p>
              Privacy-first isn't a marketing line here — it's just how the app
              is built. There's nowhere for data to go even if we wanted it to.
            </p>
          </div>
          <div className="mt-6">
            <Link
              to="/wipe"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Wipe my data
            </Link>
          </div>
        </div>

        {/* Built with */}
        <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Built with
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-medium">
              Claude AI
            </span>
            <span className="px-4 py-1.5 bg-[#e0d6fa] text-[#3C3489] rounded-full text-sm font-medium">
              React + Next.js
            </span>
            <span className="px-4 py-1.5 bg-[#fcf1b8] text-[#633806] rounded-full text-sm font-medium">
              Puter.js
            </span>
            <span className="px-4 py-1.5 bg-[#e1f5ee] text-[#085041] rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-4 py-1.5 bg-[#fbeaf0] text-[#72243E] rounded-full text-sm font-medium">
              TypeScript
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black rounded-[2rem] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Ready to improve your resume?
            </h3>
            <p className="text-sm text-gray-400">
              Upload your PDF and get your score in under 30 seconds.
            </p>
          </div>
          <Link
            to="/resume"
            className="px-8 py-4 bg-[#fcd55c] text-black rounded-2xl font-semibold text-base whitespace-nowrap hover:bg-yellow-300 transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
