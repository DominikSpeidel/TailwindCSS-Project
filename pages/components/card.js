import Clock_Icon from "./Icons/Clock_Icon";

function Card({ image }) {
  return (
    <div class="card">
      <img class="w-full h-64 object-cover" src={image} alt="Hills" />
      <div class="flex flex-col text-center pt-2">
        <p>5 Bean Chili Stew</p>
        <p>Recipe by Mario</p>
      </div>
      <div class="badge gap-1">
        <Clock_Icon />
        <span>25 mins</span>
      </div>
    </div>
  );
}

export default Card;
