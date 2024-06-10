import Clock_Icon from "./Icons/Clock_Icon";

function Card({ image }) {
  return (
    <div className="card hover:shadow-xl ">
      <img
        className="w-full h-64 object-cover transform hover:scale-105 duration-500"
        src={image}
        alt="Hills"
      />
      <div className="flex flex-col text-center pt-2">
        <p>5 Bean Chili Stew</p>
        <p>Recipe by Mario</p>
      </div>
      <div className="badge gap-1">
        <Clock_Icon />
        <span>25 mins</span>
      </div>
    </div>
  );
}

export default Card;
