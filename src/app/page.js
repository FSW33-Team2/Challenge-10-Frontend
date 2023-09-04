import Image from "next/image";
import cardList from "./data";

export default function Home() {
  return (
    <main className="container items-center mx-auto py-36 py-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-auto py-36 py-8">
        {cardList.map((card) => (
          <div className="shadow-lg rounded-lg">
            <img className="rounded-t-lg" src={card.img} alt="" />
            <div className="p-5">
              <h3 className="text-3x1 font-bold text-slate-700 mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-lg font-normal text-grey-600 text-center">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
