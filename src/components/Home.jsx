import kitkatbreak from "../images/KitKatBreak.avif";
import fingers from "../images/fingers.png";

function Home() {
  return (
    <div className="h-screen text-white bg-red-600 grid grid-cols-2 pt-40  px-20 relative overflow-hidden">
      <img src={fingers} className="absolute -top-40 left-10 " alt="" />
      <div className="pl-20 z-10 ">
        <p className="text-6xl font-bold ">
          Have a break,
          <br /> Have a KitKat!
        </p>
        <a href="#products">
          <button className="pbtn pbtn1 mt-10 px-10 py-3">Products</button>
        </a>
      </div>
      <div className="z-10">
        <img src={kitkatbreak} className="w-2/3" alt="" />
      </div>
    </div>
  );
}

export default Home;
