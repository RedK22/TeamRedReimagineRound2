import KitKatCoco from "../images/KitKatCoconut.webp";
import KitKatPops from "../images/KitKatPops.webp";
import KitKatVegan from "../images/KitKatVegan.webp";
import KitKat from "../images/KitKat.avif";
import KitKatDark from "../images/KitKatDarkChoco.avif";
import KitKatChunky from "../images/KitKatChunky.webp";
import KitKatOriginal from "../images/KitKatOriginal.webp";
import KitKatXmas from "../images/KitKatXmas.webp";

import ProductGenerator from "./ProductGenerator";

import Reveal from "./Reveal";

function Products() {
  // !Adding Products Information

  const productInfo = [
    {
      imgSrc: KitKatCoco,
      name: "KitKat Coconut",
    },
    {imgSrc: KitKat, name: "KitKat 4 Finger"},
    {imgSrc: KitKatDark, name: "KitKat Dark Chocolate"},
    {imgSrc: KitKatPops, name: "KitKat Pops"},
    {imgSrc: KitKatChunky, name: "KitKat Chunky"},
    {imgSrc: KitKatVegan, name: "KitKat Vegan"},
    {imgSrc: KitKatOriginal, name: "KitKat Original"},
    {imgSrc: KitKatXmas, name: "KitKat Christmas Special"},
  ];

  return (
    <div className="w-full  py-10 relative">
      <Reveal>
        <div className="text-center text-5xl mb-4 font-semibold  text-red-600  uppercase underline underline-offset-4 ">
          Choose Your Break
        </div>
      </Reveal>

      {/* Products Start Here */}
      <div className="flex flex-wrap justify-center items-center gap-10 px-20 py-10">
        {/* Product */}

        {productInfo.map((product, index) => (
          <ProductGenerator
            key={index}
            name={product.name}
            imgSrc={product.imgSrc}
          />
        ))}

        {/* <div className=" h-auto w-52 overflow-hidden rounded-md  border-2 border-red-600  flex flex-col">
          <div className="relative overflow-hidden">
            <div className="testbg bg-transparent">
              <img
                src={KitKatCoco}
                className="py-5 border-b-2 border-red-600 z-10 drop-shadow-lg"
                alt=""
              />
            </div>
          </div>
          <div className="text-center  ">
            <p className="text-sm py-2 font-bold border-b-2 border-red-600 text-red-600">
              KitKat Coconut
            </p>
          </div>
          <button className="font-semibold bg-red-600  transition-all text-white w-full py-1">
            Add To Cart
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Products;
