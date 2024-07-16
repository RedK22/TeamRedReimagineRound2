import KitKats from "../images/KitKats.avif";
import RedBorder from "../images/RedTestBorder.png";
import Reveal from "./Reveal";
import RevealY from "./RevealY";

function Contact() {
  return (
    <div className="w-full py-20 relative">
      <img src={RedBorder} alt="" className="absolute top-0 w-20 md:w-56" />
      <Reveal>
        <div className="text-center text-4xl md:text-5xl font-semibold uppercase text-red-600 mb-10">
          Contact Us
        </div>
      </Reveal>
      <RevealY>
        <div className="md:px-20 px-4 block md:flex justify-center  gap-10">
          <div className="md:w-[50%] text-2xl font-bold text-red-600">
            Need help? No worries, our team can assist you.{" "}
            <p className="mb-10 text-sm md:text-base font-semibold tracking-tight mt-5">
              We are available from{" "}
              <span className="font-bold underline">Monday to Thursday</span>{" "}
              between <span className="font-bold underline">9:00 - 18:00</span>{" "}
              and <span className="font-bold underline">Fridays</span> between{" "}
              <br /> <span className="font-bold underline">9:00 - 16:00</span>,
              excluding public holidays. We will get back to you within 2
              working days.
            </p>
            <p className="flex gap-2 md:gap-4 items-center mb-4 md:mb-0">
              <i className="fa-regular fa-envelope"></i>
              <span className="md:text-base text-sm">
                consumer.services@za.nestle.com
              </span>
            </p>
          </div>
          <div className="md:w-[28%] flex-shrink-0">
            <div className="">
              <img src={KitKats} alt="" className="block" />
            </div>
          </div>
        </div>
      </RevealY>
    </div>
  );
}

export default Contact;
