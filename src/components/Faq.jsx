import {useState} from "react";
import fingers from "../images/fingers.png";

function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleOpen4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div className="w-full bg-red-600 min-h-screen text-white py-10 relative overflow-hidden">
      <img src={fingers} className="absolute z-0 -top-40 left-10" alt="" />

      <div className="text-5xl  z-10 font-semibold text-center mb-12 relative">
        FREQUENTLY ASKED QUESTIONS
      </div>

      {/* Starting FAQ Section */}
      <div className="flex flex-col gap-10 justify-center items-center z-10">
        {/* FAQ 1 */}
        <div
          onClick={toggleOpen}
          className={`w-[80%] z-10   border-2 transition-all border-white  py-5 px-10 font-medium text-2xl cursor-pointer ${
            isOpen ? `h-28` : `h-20`
          }`}
        >
          <div className="flex justify-between tracking-tight">
            <div>Can I have KitKat if I am lactose intolerant? </div>
            <p>{isOpen ? "-" : "+"}</p>
          </div>
          <p className="font-regular text-sm mt-4">
            {isOpen
              ? ` 
            > 

KitKat is made from milk products, so unfortunately We don't have any products in our market that are lactose friendly.
`
              : ""}
          </p>
        </div>

        {/* FAQ 2 */}
        <div
          onClick={toggleOpen2}
          className={`w-[80%] z-10  border-2 transition-all border-white  py-5 px-10 font-medium text-2xl cursor-pointer ${
            isOpen2 ? `h-28` : `h-20`
          }`}
        >
          <div className="flex justify-between tracking-tight">
            <div>What are KitKats made of? </div>
            <p>{isOpen2 ? "-" : "+"}</p>
          </div>
          <p className="font-regular text-sm mt-4">
            {isOpen2
              ? ` 
            > The perfect treat for your break, our KitKat bars are made of a crispy wafer covered in smooth milk chocolate.`
              : ""}
          </p>
        </div>

        {/* FAQ 3 */}
        <div
          onClick={toggleOpen3}
          className={`w-[80%] z-10  border-2 transition-all border-white  py-5 px-10 font-medium text-2xl cursor-pointer ${
            isOpen3 ? `h-28` : `h-20`
          }`}
        >
          <div className="flex justify-between tracking-tight">
            <div>
              Does KitKat chocolate have artificial preservatives and
              colourants?
            </div>
            <p>{isOpen3 ? "-" : "+"}</p>
          </div>
          <p className="font-regular text-sm mt-4">
            {isOpen3
              ? ` 
            > 

No, our chocolates don’t have any artificial preservatives and colourants, so take a break and enjoy.

`
              : ""}
          </p>
        </div>

        {/* FAQ 4 */}
        <div
          onClick={toggleOpen4}
          className={`w-[80%] z-10  border-2 transition-all border-white  py-5 px-10 font-medium text-2xl cursor-pointer ${
            isOpen4 ? `h-28` : `h-20`
          }`}
        >
          <div className="flex justify-between tracking-tight">
            <div>Can I have KitKat if I am allergic to nuts? </div>
            <p>{isOpen4 ? "-" : "+"}</p>
          </div>
          <p className="font-regular text-sm mt-4">
            {isOpen4
              ? ` 
            > 
You can examine the back of the packaging for our allergen declaration line to check if the product contains fruit/nuts etc.

`
              : ""}
          </p>
        </div>

        {/* Faq Ended */}
      </div>
    </div>
  );
}

export default Faq;
