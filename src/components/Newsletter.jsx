import NewsBreak from "../images/NewsBreak.webp";
import Border from "../images/TestBorder.png";

function Newsletter() {
  return (
    <div className="w-full  bg-red-600 text-white py-20 relative">
      <img src={Border} alt="" className="top-0 left-0 absolute" />
      <div className="text-center text-5xl font-semibold mb-16 ">
        NEWSLETTER
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[80%] bg-red-200 rounded-md py-20 px-4 flex justify-between items-center">
          <img src={NewsBreak} className="w-96" alt="" />
          <div className="w-[50%] flex flex-col pr-10 gap-5">
            <p className="text-red-600 text-3xl font-bold">
              SIGN UP FOR EXCLUSIVE BREAK OPPORTUNITIES
            </p>
            <p className="text-red-600 text-2xl font-semibold">
              Sign up for news, updates, exclusive offers, prizes and more!
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                required
                className="mb-5 px-4 py-2 font-medium w-3/4 outline-none focus:outline-none text-red-600 border-2 border-red-600 bg-red-200 placeholder:text-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 nbtn  w-3/4 py-2 font-semibold"
              >
                <span>Sign Up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
