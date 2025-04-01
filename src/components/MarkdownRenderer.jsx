import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ filePath }) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        const text = await response.text();
        setContent(text);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching markdown:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        <p>Error loading content: {error}</p>
      </div>
    );
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-md overflow-hidden"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className={`${className} rounded px-1 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100`}
                {...props}
              >
                {children}
              </code>
            );
          },
          h1: ({ node, ...props }) => (
            <h1
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-gray-100"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl font-semibold mb-2 mt-4 text-gray-900 dark:text-gray-100"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-gray-800 dark:text-gray-200" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside mb-4 ml-4 text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside mb-4 ml-4 text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-1 text-gray-800 dark:text-gray-200" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              {...props}
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-700 dark:text-gray-300"
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto">
              <table
                className="border-collapse border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                {...props}
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
          strong: ({ node, ...props }) => (
            <strong
              className="font-bold text-gray-900 dark:text-gray-100"
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <em
              className="italic text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
