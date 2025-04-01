import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/hanheelee",
      icon: Linkedin,
      ariaLabel: "Visit Hanhee Lee's LinkedIn profile",
    },
    {
      name: "GitHub",
      url: "https://github.com/hanheelee",
      icon: Github,
      ariaLabel: "Visit Hanhee Lee's GitHub profile",
    },
    {
      name: "Email",
      url: "mailto:hanhee.lee@example.com",
      icon: Mail,
      ariaLabel: "Send an email to Hanhee Lee",
    },
  ];

  return (
    <footer className="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              © {new Date().getFullYear()} Hanhee Lee. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
