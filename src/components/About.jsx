import abotme from "../assets/aboutme.jpg";
export default function About() {
  return (
    <div id="About" className="bg-pri text-3xl py-10">
      <h1 className="text-accent text-4xl font-bold text-center  font-body">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row my-10 md:justify-evenly">
        <div>
          <img
            src={abotme}
            alt="Shivansh Bhatngar"
            className="h-[500px] w-[250px] mx-auto grayscale hover:grayscale-0"
          />
        </div>
        <div className="w-[80%] mx-auto md:mx-0 md:w-1/3 m-3">
          <h1 className="text-2xl font-body text-center">
            SHIVANSH BHATNAGAR <br />
            Full Stack Developer
          </h1>
          <p className="text-xl text-justify my-8 leading-relaxed">
            Aspiring web developer with foundational knowledge in HTML, CSS, and
            JavaScript, complemented by familiarity with frameworks like
            Bootstrap and Tailwind CSS. Proficient in database management with
            SQL and MongoDB. Familiarity with Git and currently honing skills in
            building dynamic user interfaces with Reactjs.
          </p>
          <span className=" font-body text-base px-2 ">
            Email : Shivanshb55@gmail.com
          </span>
          <br />
          <br />
          <span className="bg-accent text-white p-2 hover:bg-sec  rounded-lg text-base ">
            <a href="#Contact">Send Email</a>
          </span>
        </div>
      </div>
    </div>
  );
}
