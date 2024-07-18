import NewsBreak from "../images/NewsBreak.webp";
import Border from "../images/TestBorder.png";
import Reveal from "./Reveal";
import RevealY from "./RevealY";

function Newsletter() {
  return (
    <div className="w-full  bg-red-600 text-white py-20 relative">
      <img src={Border} alt="" className="top-0 left-0 absolute w-20 md:w-56" />
      <Reveal>
        <div className="text-center text-4xl md:text-5xl font-semibold mb-16 ">
          NEWSLETTER
        </div>
      </Reveal>
      <RevealY>
        <div className="flex items-center justify-center text-center">
          <div className="w-[80%] bg-red-200 rounded-md py-10 md:py-20 px-4 grid grid-cols-1 place-items-center md:flex justify-between items-center">
            <img src={NewsBreak} className="w-96 mb-5 md:mb-0" alt="" />

            <div className="w-full md:w-[50%] flex flex-col  md:pr-10 gap-5">
              <p className="text-red-600 text-xl md:text-3xl font-bold">
                SIGN UP FOR EXCLUSIVE BREAK OPPORTUNITIES
              </p>
              <p className="text-red-600 text-md md:text-2xl font-semibold">
                Sign up for news, updates, exclusive offers, prizes and more!
              </p>
              <form className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full mb-5 px-2 md:px-4 py-2 font-medium md:w-3/4 outline-none focus:outline-none text-red-600 border-2 border-red-600 bg-red-200 placeholder:text-red-600"
                />
                <button
                  type="submit"
                  className="bg-red-600 nbtn w-full  md:w-3/4 py-2 font-semibold"
                >
                  <span>Sign Up</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealY>
    </div>
  );
}

export default Newsletter;
