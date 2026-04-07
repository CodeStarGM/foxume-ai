import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Foxume AI" },
  { name: "description", content: "Free ATS Resume Checker" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next]);

  return (
    <div className="w-full max-w-[1440px] bg-white rounded-[3rem] shadow-sm overflow-hidden p-3 sm:p-4">
      {/* Gradient Hero Area */}
      <div className="bg-[linear-gradient(110deg,#e0d6fa_0%,#fcf1b8_45%,#fcd55c_100%)] rounded-[2.5rem] px-6 sm:px-12 py-16 flex flex-col items-center relative min-h-[100vh] justify-center">
        {/* Logo top-left */}
        <div className="absolute top-8 left-8 sm:left-12 text-3xl font-semibold tracking-tight text-black">
          Foxume AI
        </div>

        {/* Auth Card */}
        <div className="flex flex-col items-center gap-10 w-full max-w-md z-10">
          {/* Headline */}
          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight text-black">
              Welcome back
            </h1>
            <p className="text-lg text-gray-700">
              Log in to continue your job journey
            </p>
          </div>

          {/* Card */}
          <div className="w-full bg-white/70 backdrop-blur-sm rounded-3xl border border-white/80 p-8 flex flex-col items-center gap-6 shadow-sm">
            {/* Sparkle icon */}
            <div className="w-14 h-14">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="sparkleMain"
                    x1="10"
                    y1="10"
                    x2="54"
                    y2="54"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#a78bfa" />
                    <stop offset="0.5" stopColor="#fbcfe8" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                  <linearGradient
                    id="sparkleSmall"
                    x1="0"
                    y1="0"
                    x2="20"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#fbcfe8" />
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

            <div className="flex flex-col items-center gap-1 text-center">
              <p className="font-semibold text-gray-900 text-base">
                Secure sign-in via Puter
              </p>
              <p className="text-sm text-gray-500">
                Your data stays private and in your control
              </p>
            </div>

            {/* Button */}
            {isLoading ? (
              <button
                disabled
                className="w-full py-4 rounded-2xl bg-black/80 text-white font-semibold text-lg animate-pulse cursor-not-allowed"
              >
                Signing you in...
              </button>
            ) : auth.isAuthenticated ? (
              <button
                onClick={auth.signOut}
                className="w-full py-4 rounded-2xl bg-black text-white font-semibold text-lg hover:bg-gray-900 transition-colors cursor-pointer"
              >
                Log out
              </button>
            ) : (
              <button
                onClick={auth.signIn}
                className="w-full py-4 rounded-2xl bg-black text-white font-semibold text-lg hover:bg-gray-900 transition-colors cursor-pointer"
              >
                Sign in
              </button>
            )}

            <p className="text-xs text-gray-400 text-center">
              By signing in you agree to our terms of service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
