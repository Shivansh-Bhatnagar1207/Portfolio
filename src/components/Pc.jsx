export default function Pc(props) {
  return (
    <div className="flex flex-col items-center bg-accent p-5 rounded-md my-2 ">
      <div className="text-center text-2xl font-bold">
        {props.title}
        <div className="text-justify text-base w-[400px] h-[300px] p-4 font-normal">
          {props.content}
        </div>
        <span className="bg-sec text-white p-2  rounded-lg hover:bg-white hover:text-accent">
          <a href="https://github.com/Shivansh-Bhatnagar1207">View Code</a>
        </span>
      </div>
    </div>
  );
}
