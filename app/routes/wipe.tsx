import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);
  const [wiping, setWiping] = useState(false);
  const [wiped, setWiped] = useState(false);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    setWiping(true);
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    await loadFiles();
    setWiping(false);
    setWiped(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <img src="/images/resume-scan-2.gif" className="w-[120px]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 text-red-700 px-6 py-4 rounded-2xl text-sm">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] bg-white rounded-[3rem] shadow-sm overflow-hidden p-3 sm:p-4">
      {/* Gradient Hero Area */}
      <div className="bg-[linear-gradient(110deg,#e0d6fa_0%,#fcf1b8_45%,#fcd55c_100%)] rounded-[2.5rem] pt-8 px-6 sm:px-12 pb-24 flex flex-col items-center relative">
        {/* Header */}
        <header className="w-full flex justify-between items-center mb-24 z-10 max-w-7xl mx-auto">
          <div className="text-3xl font-semibold tracking-tight text-black">
            Foxume AI
          </div>{" "}
          <Navbar />
        </header>

        {/* Content */}
        <div className="flex flex-col items-center text-center max-w-2xl w-full z-10 gap-10">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight text-black">
              Wipe App Data
            </h1>
            <p className="text-lg text-gray-700">
              Signed in as{" "}
              <span className="font-semibold">{auth.user?.username}</span>
            </p>
          </div>

          {/* Files list */}
          <div className="w-full bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 p-6">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 text-left">
              Stored Files ({files.length})
            </p>
            {files.length === 0 ? (
              <p className="text-gray-500 text-sm py-4">
                {wiped ? "All data has been wiped." : "No files found."}
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 px-4 py-3 bg-white/70 rounded-xl border border-white/60"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                    <p className="text-sm text-gray-800 truncate">
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Wipe button */}
          <button
            onClick={handleDelete}
            disabled={wiping || files.length === 0}
            className="px-8 py-4 rounded-2xl bg-black text-white font-semibold text-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-900 transition-colors cursor-pointer"
          >
            {wiping ? "Wiping..." : "Wipe All Data"}
          </button>

          <p className="text-xs text-gray-500">
            This will permanently delete all files and key-value data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WipeApp;
