import NewsBreak from "../images/NewsBreak.webp";

function Newsletter() {
  return (
    <div className="w-full h-screen bg-red-600 text-white py-10">
      <div className="text-center text-5xl font-semibold mb-16 ">
        NEWSLETTER
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[80%] bg-red-200 rounded-md py-20 px-4 flex justify-between items-center">
          <img src={NewsBreak} className="w-96" alt="" />
          <div className="w-[50%] flex flex-col pr-10 gap-5">
            <p className="text-red-600 text-2xl font-semibold">
              Sign Up for news, offers, updates and more!
            </p>
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 font-medium w-3/4 outline-none focus:outline-none text-red-600 border-2 border-red-600 bg-red-200 placeholder:text-red-600"
            />
            <button className="bg-red-600 nbtn  w-3/4 py-2 font-semibold">
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
