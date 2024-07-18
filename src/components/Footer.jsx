import {useState} from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="w-full py-2 pb-4 bg-red-600">
      {/* Desktop Footer */}
      <div className="hidden md:grid grid-cols-3 place-items-center py-4 text-white">
        <div>
          <ul className="flex h-full gap-2 justify-center flex-col">
            <li className="font-semibold text-lg">Products</li>
            <li className="text-sm hover:underline">
              <a href="#products">View All Products</a>
            </li>
            <li className="text-sm hover:underline">
              <a href="#">Our Classics</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex h-full gap-2 justify-center flex-col">
            <li className="font-semibold text-lg">About Us</li>
            <li className="text-sm hover:underline">
              <a href="#news">Latest News</a>
            </li>
            <li className="text-sm hover:underline">
              <a href="#">The Nestlé Cocoa Plan</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex h-full gap-2 justify-center flex-col">
            <li className="font-semibold text-lg">Support</li>
            <li className="text-sm hover:underline">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="text-sm hover:underline">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="grid grid-cols-1 md:hidden place-items-center py-2 text-white">
        {/* Products */}
        <div
          onClick={toggleOpen}
          className={`w-[80%] mb-2 border-2 transition-all border-white py-2 px-2 text-sm cursor-pointer ${
            isOpen ? `h-20` : `h-10`
          }`}
        >
          <div className=" text-sm font-medium flex justify-between tracking-tight">
            <div>Products</div>
            <p>{isOpen ? "-" : "+"}</p>
          </div>

          <ul
            className={`h-full gap-1 justify-center flex-col ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li className="text-xs hover:underline">
              <a href="#products">View All Products</a>
            </li>
            <li className="text-xs hover:underline">
              <a href="#">Our Classics</a>
            </li>
          </ul>
        </div>

        {/* About Us */}

        <div
          onClick={toggleOpen2}
          className={`w-[80%] mb-2 border-2 transition-all border-white py-2 px-2 text-sm cursor-pointer ${
            isOpen2 ? `h-20` : `h-10`
          }`}
        >
          <div className=" text-sm font-medium flex justify-between tracking-tight">
            <div>About Us</div>
            <p>{isOpen2 ? "-" : "+"}</p>
          </div>

          <ul
            className={`h-full gap-1 justify-center flex-col ${
              isOpen2 ? "flex" : "hidden"
            }`}
          >
            <li className="text-xs hover:underline">
              <a href="#news">Latest News</a>
            </li>
            <li className="text-xs hover:underline">
              <a href="#">The Nestlé Cocoa Plan</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}

        <div
          onClick={toggleOpen3}
          className={`w-[80%] border-2 transition-all border-white py-2 px-2 text-sm cursor-pointer ${
            isOpen3 ? `h-20` : `h-10`
          }`}
        >
          <div className=" text-sm font-medium flex justify-between tracking-tight">
            <div>Support</div>
            <p>{isOpen3 ? "-" : "+"}</p>
          </div>

          <ul
            className={`h-full gap-1 justify-center flex-col ${
              isOpen3 ? "flex" : "hidden"
            }`}
          >
            <li className="text-xs hover:underline">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="text-xs hover:underline">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Designed By Text */}
      <div className="flex justify-center items-center">
        <div className="w-[95%] text-sm md:text-md tracking-tight mt-4 font-semibold px-2 py-1 md:py-2 md:px-4 rounded-md flex justify-between bg-white text-red-600">
          <div>This is a reimagined website for KitKat.</div>
          <div>&copy;Ritwik 2024</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
