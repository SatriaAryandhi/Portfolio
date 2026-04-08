import React from "react";
import ProjectSatrana from "./assets/ProjectSatrana.png";
import ProjectWordpress from "./assets/ProjectWordpress.png";

<style>
  {`
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { scrollbar-width: none; }
  `}
</style>;

export default function App() {
  React.useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth select-none">
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b"
        style={{ borderColor: "#00aaff55" }}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          {/* NAMA – prevent break line */}
          <h1
            className="text-xl font-bold whitespace-nowrap"
            style={{ color: "#00aaff" }}
          >
            Satria Aryandhi
          </h1>

          {/* DESKTOP NAV (hidden on mobile) */}
          <div className="space-x-6 text-sm hidden md:flex items-center">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative font-medium transition-colors duration-200"
                style={{ color: "#00aaff" }}
              >
                <span className="inline-block transition-colors duration-200">
                  {item.name}
                </span>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00aaff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* MOBILE NAV SCROLL (only visible on small screens) */}
        <div className="md:hidden overflow-x-auto flex gap-6 px-4 pb-3 text-[#00aaff] text-sm no-scrollbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="scroll-mt-28 md:scroll-mt-0 h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span style={{ color: "#00aaff" }}>Satria Aryandhi</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-xl">
          Fresh Graduate Informatics Engineering.
        </p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-28 md:scroll-mt-0 max-w-4xl mx-auto py-20 px-4 text-justify"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#00aaff" }}>
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Computer Science graduate with a passion for web development,
          skilled in both front-end and back-end technologies. With experience
          in PHP, MySQL, JavaScript, HTML, and CSS, I enjoy building responsive
          applications that are not only functional but also user-friendly. I’m
          driven to turn ideas into reliable digital solutions and continuously
          explore modern web technologies to create impactful online
          experiences.
        </p>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-28 md:scroll-mt-0 max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-10" style={{ color: "#00aaff" }}>
          Projects
        </h2>

        {/* Horizontal Scroll */}
        <div
          className="flex gap-6 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#00aaff55 transparent",
          }}
        >
          <style>
            {`
      /* Scrollbar untuk Chrome, Edge, Safari */
      div::-webkit-scrollbar {
        height: 8px;
      }
      div::-webkit-scrollbar-track {
        background: transparent;
      }
      div::-webkit-scrollbar-thumb {
        background: #00aaff55;
        border-radius: 10px;
      }
      div::-webkit-scrollbar-thumb:hover {
        background: #00aaffaa;
      }
    `}
          </style>

          {/* Project 1 */}
          <div
            className="p-6 bg-zinc-900 rounded-xl flex-shrink-0 w-[400px] flex flex-col"
            style={{
              border: "1px solid #00aaff55",
              boxShadow: "0 0 12px #00aaff55",
            }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#00aaff" }}
            >
              WordPress Portofolio
            </h3>

            <img
              src={ProjectWordpress}
              alt="WordPress Project"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-400 mb-6 flex-grow">
              This WordPress website showcases several college assignments that
              I uploaded and organized as part of my coursework.
            </p>

            {/* Button — open new tab, no arrow, hover blue glow */}
            <a
              href="https://satriaaryandhifebriankotoifumbdg.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center text-[#00aaff] font-medium transition duration-300 hover:drop-shadow-[0_0_6px_#00aaff]"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div
            className="p-6 bg-zinc-900 rounded-xl flex-shrink-0 w-[400px] flex flex-col"
            style={{
              border: "1px solid #00aaff55",
              boxShadow: "0 0 12px #00aaff55",
            }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#00aaff" }}
            >
              SATRANA
            </h3>

            <img
              src={ProjectSatrana}
              alt="SATRANA Project"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-400 mb-6 flex-grow">
              My final thesis project focused on developing a reliable system
              named SATRANA.
            </p>

            {/* Button — open new tab, no arrow, hover blue glow */}
            <a
              href="http://satriaaryandhi.infinityfreeapp.com/satrana/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center text-[#00aaff] font-medium transition duration-300 hover:drop-shadow-[0_0_6px_#00aaff]"
            >
              View Project
            </a>
          </div>

          {/* Project 3 — Coming Soon (tidak diubah) */}
          <div
            className="p-6 bg-zinc-900 rounded-xl flex flex-col justify-center items-center text-center flex-shrink-0 w-[400px]"
            style={{
              border: "1px solid #00aaff55",
              boxShadow: "0 0 12px #00aaff55",
            }}
          >
            <div className="flex flex-col justify-center items-center h-40">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#00aaff" }}
              >
                NEXT PROJECT
              </h3>

              <p className="text-gray-400 text-base">Coming Soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-28 md:scroll-mt-0 max-w-4xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#00aaff" }}>
          Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"].map(
            (skill) => (
              <li
                key={skill}
                className="bg-zinc-900 p-4 rounded-lg text-center transition transform hover:scale-105 hover:shadow-lg"
                style={{
                  border: "1px solid #00aaff55",
                  boxShadow: "0 0 8px #00aaff33",
                }}
              >
                <span className="text-lg font-semibold">{skill}</span>
              </li>
            )
          )}
        </ul>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-28 md:scroll-mt-0 max-w-4xl mx-auto py-20 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#00aaff" }}>
          Contact
        </h2>

        <div
          className="bg-zinc-900 p-8 rounded-xl max-w-md mx-auto flex flex-col items-center gap-6"
          style={{
            border: "1px solid #00aaff55",
            boxShadow: "0 0 12px #00aaff33",
          }}
        >
          {/* Email */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm tracking-wider mb-1">EMAIL</p>
            <a
              href="mailto:satriaaf923@gmail.com"
              className="text-[#00aaff] text-lg font-medium transition duration-300 hover:drop-shadow-[0_0_6px_#00aaff]"
            >
              satriaaf923@gmail.com
            </a>
          </div>

          <div className="w-full h-[1px] bg-[#00aaff33]" />

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm tracking-wider mb-2">SOCIALS</p>

            <div className="flex gap-6 text-[#00aaff]">
              {/* GitHub */}
              <a
                href="https://github.com/SatriaAryandhi"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#00aaff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00aaff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/satriaaryandhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#00aaff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00aaff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dl_dkfi923/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#00aaff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00aaff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-600 border-t border-zinc-800">
        © 2025 Portofolio Satria Aryandhi
      </footer>
    </div>
  );
}
