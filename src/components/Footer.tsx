import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Home,
  GraduationCap,
  Briefcase,
  FolderKanban,
  Medal,
  Contact,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "About", href: "#about", icon: <Home className="h-4 w-4 mr-1" /> },
    {
      name: "Education",
      href: "#education",
      icon: <GraduationCap className="h-4 w-4 mr-1" />,
    },
    {
      name: "Experience",
      href: "#experience",
      icon: <Briefcase className="h-4 w-4 mr-1" />,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <FolderKanban className="h-4 w-4 mr-1" />,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: <Medal className="h-4 w-4 mr-1" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <Contact className="h-4 w-4 mr-1" />,
    },
  ];

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full mb-8 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/AHBRIJESH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahbrijesh2004@gmail.com"
              className="hover:text-navy-300 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-navy-300 mb-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors duration-300 flex items-center mb-2"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="text-navy-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} A H Brijesh. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
