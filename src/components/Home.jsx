import kitkatbreak from "../images/KitKatBreak.avif";
import fingers from "../images/fingers.png";
import RevealY from "./RevealY";

function Home() {
  return (
    <div className="min-h-[75lvh] md:h-screen text-white bg-red-600 grid grid-cols-1 md:grid-cols-2 py-20 px-2 md:px-20 relative overflow-hidden place-items-center">
      <img
        src={fingers}
        className="absolute top-0 md:-top-40 left-10 "
        alt=""
      />
      <img
        src={fingers}
        className="block md:hidden absolute top-80 md:-top-40 left-10 "
        alt=""
      />

      <div className="z-10 ">
        <p className=" text-4xl md:text-6xl font-bold ">
          Have a break,
          <br /> Have a KitKat!
        </p>
        <RevealY>
          <a href="#products">
            <button className="pbtn pbtn1 text-base mt-10 px-4 md:px-10 py-3">
              Products
            </button>
          </a>
        </RevealY>
      </div>
      {/* Image Here */}
      <div className="z-10 flex justify-center items-center">
        <img src={kitkatbreak} className="w-2/3" alt="" />
      </div>
    </div>
  );
}

export default Home;
