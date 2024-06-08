function Card({ image }) {
  return (
    <div class="mt-8">
      <div class="card">
        <img class="w-full h-64 object-cover" src={image} alt="Hills" />
        <div class="flex flex-col text-center pt-2">
          <p>5 Bean Chili Stew</p>
          <p>Recipe by Mario</p>
        </div>
        <div class="badge">
          <span>25 mins</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
