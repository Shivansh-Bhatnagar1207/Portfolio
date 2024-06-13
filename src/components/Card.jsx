export default function Cards(props) {
  return (
    <div className="flex flex-col items-center bg-accent p-3 rounded-md h-[200px] w-[200px] hover:bg-sec">
      <img src={props.img} alt={props.alt} className="h-[120px] " />
      <div className="text-white ">{props.title}</div>
    </div>
  );
}
