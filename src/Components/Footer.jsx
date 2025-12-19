import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-900">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section - Project Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">🚀 DevMate</h2>
          <p className="text-sm opacity-80 mt-1">
            A developer networking platform where devs connect, collaborate, and
            grow together.
          </p>
          <p className="text-sm mt-2 opacity-70">
            Built with ❤️ using the{" "}
            <span className="font-semibold">MERN Stack</span>.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/nandishrao/devmate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto: nandishrao.careers@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGlobe />
          </a>
        </div>

        {/* Right Section - Copyright */}
        <div className="text-center md:text-right text-sm opacity-70">
          <p>© {new Date().getFullYear()} DevMate. All rights reserved.</p>
          <p>
            Created by{" "}
            <span className="font-semibold">Nandish Rao A (MCA Student)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
