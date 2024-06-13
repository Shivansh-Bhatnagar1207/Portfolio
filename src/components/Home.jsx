import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";
import hey from "../assets/hey.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function Home() {
  useEffect(() => {
    const handleLinkClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const yOffset = -80;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Python Developer", "Compitive Coder"],
    loop: {},
  });
  return (
    <div
      id="home"
      className="mt-[10vh] bg-pri h-[90vh]  text-xl flex justify-between"
    >
      <div className="p-24 text-3xl font-body w-1/2  ">
        Hi 🖐, I am <br />
        Shivansh Bhatnagar, <br />I am a <br />{" "}
        <span className="text-accent font-body font-bold">
          {text}
          <Cursor />
        </span>
        <p className="text-xl text-justify pt-3 ">
          Student at SRMS CET&R Bareilly, Year-2 Good Grasp in Python and C
          language graduating with the course of CSE in year 2025 <br />
          <div className="flex gap-2 items-center">
            <a
              href="#About"
              className="bg-accent text-white p-2 my-3 rounded-lg hover:bg-sec"
            >
              About Me
            </a>
            <a
              href="https://www.linkedin.com/in/shivansh-bhatnagar/"
              className="linkedin"
            >
              <CiLinkedin />
            </a>
            <a href="https://github.com/Shivansh-Bhatnagar1207">
              <FaGithub />
            </a>
          </div>
        </p>
      </div>
      <div>
        <img src={hey} alt="Hello" className="h-[500px] w-[500px] " />
      </div>
    </div>
  );
}
