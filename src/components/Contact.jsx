import Form from "./form";
import contact from "../assets/contact.png";
export default function Contact() {
  return (
    <div id="Contact" className="bg-pri h-screen ">
      <div className="font-body font-bold text-center text-accent text-3xl mb-10">
        Contact Me
      </div>
      <div className="my-4 w-[80%] mx-auto flex flex-col md:flex-row gap-20">
        <img src={contact} alt="Contact" className=" md:w-1/2 " />
        <Form />
      </div>
    </div>
  );
}
