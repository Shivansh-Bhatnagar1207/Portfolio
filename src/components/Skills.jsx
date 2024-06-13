import Cards from "./Card";

export default function Skills() {
  return (
    <div id="Skills" className="bg-pri ">
      <div className="text-3xl text-center font-body font-bold text-accent">
        Skills
      </div>
      <p className="w-[80%] m-auto text-justify my-5">
        During my studies, I dedicated myself to mastering a diverse array of
        languages, frameworks, and skills that have equipped me with a robust
        foundation in software development. I delved into several programming
        languages including Python, Java, and JavaScript, each offering unique
        strengths in different domains of application. In tandem with these
        languages, I became proficient in frameworks such as Django and Spring
        Boot, empowering me to develop scalable web applications efficiently.
        Additionally, my coursework extended into database management with MySQL
        and MongoDB, honing my ability to design and optimize data storage
        solutions. Beyond technical competencies, I cultivated soft skills like
        effective communication, collaboration, and problem-solving, essential
        for thriving in dynamic team environments. Through hands-on projects and
        coursework, I've not only gained technical expertise but also learned
        the importance of continuous learning and adaptation in the
        ever-evolving field of technology.
      </p>
      <div className=" grid grid-cols-5 w-[80%] m-auto gap-5 mt-10 p-10">
        <Cards
          title="HTML"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML"
        />
        <Cards
          title="CSS"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS"
        />
        <Cards
          title="TailwindCSS"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="TailwindCSS"
        />
        <Cards
          title="BootStrap"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
          alt="BootStrap"
        />
        <Cards
          title="JavaScript"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <Cards
          title="ReactJs"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="ReactJs"
        />
        <Cards
          title="NodeJs"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="NodeJs"
        />
        <Cards
          title="Expressjs"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="Expressjs"
        />
        <Cards
          title="Python"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
        />
        <Cards
          title="Django"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
          alt="Django"
        />
        <Cards
          title="Flask"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
          alt="Flask"
        />
        <Cards
          title="FastAPI"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
          alt="FastAPI"
        />
        <Cards
          title="MongoDB"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
          alt="MongoDB"
        />
        <Cards
          title="PHP"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg"
          alt="PHP"
        />
        <Cards
          title="C"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
          alt="C"
        />
        <Cards
          title="C++"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
        />
        <Cards
          title="Java"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          alt="Java"
        />
        <Cards
          title="Firebase"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
          alt="Firebase"
        />
        <Cards
          title="MySQL"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
          alt="MySQL"
        />
      </div>
    </div>
  );
}
