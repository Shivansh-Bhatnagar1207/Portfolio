export default function NavBar() {
  return (
    <div className="flex justify-between items-center bg-sec  w-screen h-[10vh] shadow-xl fixed top-0 z-10">
      <h1 className=" text-xl px-3 font-bold">Shivansh Bhatnagar</h1>
      <div className="flex gap-5 px-3 ">
        <span className="hover:bg-accent hover:text-white p-2 rounded-md">
          <a href="#home">Home</a>
        </span>
        <span className="hover:bg-accent hover:text-white p-2 rounded-md">
          <a href="#About">About</a>
        </span>
        <span className="hover:bg-accent hover:text-white p-2 rounded-md">
          <a href="#Skills">Skills</a>
        </span>
        <span className="hover:bg-accent hover:text-white p-2 rounded-md">
          <a href="#Projects">Projects</a>
        </span>
        <span className="hover:bg-accent hover:text-white p-2 rounded-md">
          <a href="#Contact">Contact Me</a>
        </span>
      </div>
    </div>
  );
}
