import React from "react";

function Footer() {
  return (
    <div className="w-full py-10 bg-red-600">
      <div className="flex justify-center items-center">
        <div className="w-[95%] mt-4 font-semibold  py-2 px-4 rounded-md flex justify-between bg-white text-red-600">
          <div>This is a reimagined website for KitKat.</div>
          <div>&copy;Ritwik 2024</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
