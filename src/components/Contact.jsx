import KitKats from "../images/KitKats.avif";
import RedBorder from "../images/RedTestBorder.png";
import Reveal from "./Reveal";
import RevealY from "./RevealY";

function Contact() {
  return (
    <div className="w-full py-20 relative">
      <img src={RedBorder} alt="" className="absolute top-0" />
      <Reveal>
        <div className="text-center text-5xl font-semibold uppercase text-red-600 mb-10">
          Contact Us
        </div>
      </Reveal>
      <RevealY>
        <div className="px-20 flex justify-center  gap-10">
          <div className="w-[50%] text-2xl font-bold text-red-600">
            Need help? No worries, our team can assist you.{" "}
            <p className="mb-10 text-base font-semibold tracking-tight mt-5">
              We are available from Monday to Thursday between 09:00 - 18:00 and
              Fridays between <br /> 9:00 - 16:00, excluding public holidays. We
              will get back to you within 2 working days.
            </p>
            <p className="flex gap-4 items-center">
              <i className="fa-regular fa-envelope"></i>
              <span className="text-base">consumer.services@za.nestle.com</span>
            </p>
          </div>
          <div className="w-[28%] flex-shrink-0">
            <div className="">
              <img src={KitKats} alt="" className="" />
            </div>
          </div>
        </div>
      </RevealY>
    </div>
  );
}

export default Contact;
