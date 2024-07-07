import Image from "next/image";
import Clock_Icon from "./Icons/Clock_Icon";
import Link from "next/link";

export default function Card({ id, name, duration, imageUrl, user }) {
  return (
    <Link href={`/${id}`}>
      <div className="card hover:shadow-xl ">
        <Image
          className="w-full h-64 object-cover transform hover:scale-105 duration-500"
          src={imageUrl}
          width={800}
          height={600}
          alt="Hills"
          priority
        />
        <div className="flex flex-col justify-evenly text-center pt-2 h-20">
          <p>{name}</p>
          <p>{`Rezept von ${user}`}</p>
        </div>
        <div
          className="badge gap-1 flex items-center
      "
        >
          <Clock_Icon />
          <span>{duration} min</span>
        </div>
      </div>
    </Link>
  );
}
