import Accordion from "./Accordion";
import fingers from "../images/fingers.png";
import Reveal from "./Reveal";
import RevealY from "./RevealY";

function Faq() {
  return (
    <div className="w-full bg-red-600  text-white py-20 relative overflow-hidden">
      <img src={fingers} className="absolute z-0 -top-40 left-10" alt="" />
      <Reveal>
        <div className="text-4xl md:text-5xl  z-10 font-semibold text-center mb-12 relative">
          FREQUENTLY ASKED QUESTIONS
        </div>
      </Reveal>
      <RevealY>
        <div className="flex flex-col gap-10 justify-center items-center z-10">
          <Accordion
            title="Can I have KitKat if I am lactose intolerant? "
            content="KitKat is made from milk products, so unfortunately We don't have any products in our market that are lactose friendly."
          />

          <Accordion
            title="What are KitKats made of?"
            content="The perfect treat for your break, our KitKat bars are made of a crispy wafer covered in smooth milk chocolate."
          />
          <Accordion
            title="Does KitKat chocolate have artificial preservatives and colourants?"
            content="No, our chocolates don’t have any artificial preservatives and colourants, so take a break and enjoy"
          />
          <Accordion
            title="Can I have KitKat if I am allergic to nuts?"
            content="You can examine the back of the packaging for our allergen declaration line to check if the product contains fruit/nuts etc."
          />
        </div>
      </RevealY>
    </div>
  );
}

export default Faq;
