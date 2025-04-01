import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const CV = () => {
  const [pdfUrl, setPdfUrl] = useState("/resume.pdf");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Curriculum Vitae
            </h1>
            <div className="flex space-x-3">
              <button
                onClick={handleDownload}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md flex items-center transition-colors duration-300"
                aria-label="Download CV"
              >
                <Download size={18} className="mr-2" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button
                onClick={handleOpenInNewTab}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-md flex items-center transition-colors duration-300"
                aria-label="Open CV in new tab"
              >
                <ExternalLink size={18} className="mr-2" />
                <span className="hidden sm:inline">Open</span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-8 overflow-hidden transition-colors duration-300">
            {isMobile ? (
              <div className="text-center py-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  PDF viewing is not optimized for mobile devices.
                </p>
                <div className="flex flex-col space-y-3 items-center">
                  <button
                    onClick={handleDownload}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md flex items-center transition-colors duration-300"
                  >
                    <Download size={18} className="mr-2" />
                    Download CV
                  </button>
                  <button
                    onClick={handleOpenInNewTab}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-md flex items-center transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Open in Browser
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="relative"
                style={{
                  paddingTop: "141.4%", // Aspect ratio for A4 (height/width = 1.414)
                }}
              >
                <iframe
                  src={pdfUrl}
                  title="Resume"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ minHeight: "80vh" }}
                ></iframe>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
