import RevealY from "./RevealY";

function ProductGenerator({imgSrc, name}) {
  return (
    <RevealY>
      <div className="w-52 overflow-hidden rounded-md  border-2 border-red-600  flex flex-col">
        <div className="relative overflow-hidden">
          <div className="testbg bg-transparent">
            <img
              src={imgSrc}
              className="py-5 w-full h-52 border-b-2 border-red-600 z-10 productshadow"
              alt=""
            />
          </div>
        </div>
        <div className="text-center  ">
          <p className="text-sm py-2 font-bold  text-red-600">{name}</p>
        </div>
        <button className="font-semibold bg-red-600  transition-all text-white w-full py-1">
          Add To Cart
        </button>
      </div>
    </RevealY>
  );
}

export default ProductGenerator;
