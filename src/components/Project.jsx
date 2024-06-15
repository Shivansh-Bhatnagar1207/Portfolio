import Pc from "../components/Pc";
export default function Project() {
  return (
    <div className="bg-pri " id="Projects">
      <div className="text-3xl text-accent font-body font-bold text-center pt-10">
        Projects
      </div>
      <div className="flex flex-wrap  justify-center md:w-[80%]  py-10 md:mx-auto xl:grid grid-cols-3 gap-5 ">
        <Pc
          title="Event Management Website"
          content="This Project was Developed using MERN stack, including technologies - MongoDB, ExpressJs ReactJs and NodeJS.This Project allowed to create an Admin user who can register the participants in any events happening. It also help organizers to get the information of the participants quickly."
        />
        <Pc
          title="Doom like Minigame"
          content="Dive into an exhilarating gaming experience with my Python-based project inspired by the iconic Doom series. This game combines the nostalgic thrill of classic shooters with modern Python programming, delivering an immersive adventure that challenges both reflexes and strategy."
        />
        <Pc
          title="Facial Recognition Att. System"
          content="Step into the future of attendance tracking with my Python-based Live Facial Detection Attendance System. This innovative project harnesses the power of computer vision to recognize faces in real-time, automating the attendance process seamlessly. Designed with Python's OpenCV library and machine learning algorithms, this system ensures accuracy and efficiency, revolutionizing traditional attendance management methods."
        />
        <Pc
          title="Simple Notes App(Django)"
          content="Experience organizational bliss with my Django-based Simple Notes App. This project offers a user-friendly interface where users can create, edit, and organize notes effortlessly. Powered by Django's robust framework, it ensures secure data management and seamless integration, making note-taking a breeze for users seeking productivity and efficiency."
        />
        <Pc
          title="Simple Notes App(FastAPI)"
          content="Elevate your note-taking experience with my FastAPI-powered Simple Notes App. Built for speed and reliability, this project provides a minimalist interface for users to jot down and manage notes effortlessly. Leveraging FastAPI's asynchronous capabilities, it delivers optimal performance and responsiveness, ensuring a smooth user experience with every interaction."
        />
        <Pc
          title="Stopwatch Website"
          content="Embrace precision timing with my Stopwatch Website, crafted with HTML, CSS, and JavaScript. This project offers a sleek and intuitive stopwatch interface that users can start, stop, and reset at their convenience. Whether for personal use or professional timing needs, this website provides a reliable tool for accurate timekeeping."
        />
        <Pc
          title="Landing Page"
          content="Make a lasting impression with my professionally designed Landing Page. Tailored with HTML, CSS, and JavaScript, this page serves as the gateway to your brand or project, capturing visitors' attention with engaging visuals and compelling content. Whether promoting a product, service, or portfolio, this Landing Page is designed to convert visitors into customers or followers."
        />
        <Pc
          title="Tic-tac-toe Game Website"
          content="Rediscover the classic game of Tic-Tac-Toe on my interactive website. Built with HTML, CSS, and JavaScript, this project offers a seamless gaming experience where players can compete against each other or an AI opponent. With intuitive controls and responsive design, this website brings timeless entertainment to users of all ages.

"
        />
        <Pc
          title="Temperature Converter"
          content="Simplify temperature conversions with my user-friendly Temperature Converter Website. Developed using HTML, CSS, and JavaScript, this project allows users to effortlessly convert between Celsius, Fahrenheit, and Kelvin with a few clicks. Whether for educational purposes or everyday use, this website provides a handy tool for accurate temperature calculations."
        />
        <Pc
          title="Netflix Clone Website"
          content="Immerse yourself in the world of streaming with my Netflix Clone Website. Designed to mimic the popular streaming platform, this project showcases movies and TV shows with a similar user interface and functionality. Built with HTML, CSS, and JavaScript, it offers a seamless browsing experience where users can explore, search, and watch their favorite content."
        />
        <Pc
          title="Text-to-Speech Website"
          content="Transform text into speech with my Text-to-Speech Converter Website. This project utilizes HTML, CSS, and JavaScript to provide a simple yet powerful tool for converting written text into spoken audio. Ideal for users with visual impairments or those seeking an alternative way to consume content, this website offers clear and natural-sounding speech synthesis."
        />
        <Pc
          title="Weather Forcast Website"
          content="Stay informed with my Weather Forecast Website, your go-to resource for up-to-date weather information. Powered by HTML, CSS, and JavaScript, this project retrieves and displays current weather conditions and forecasts based on user-selected locations. Whether planning a trip or checking the daily forecast, this website delivers accurate weather data with user-friendly visuals and functionality."
        />
      </div>
    </div>
  );
}
