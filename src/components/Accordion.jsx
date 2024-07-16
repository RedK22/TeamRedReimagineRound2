import {useState} from "react";

function Accordion({title, content}) {
  const [open, setOpen] = useState(false);

  const setAccordionOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-[90%] md:w-[80%] z-10 border-2 transition-all border-white tracking-tighter md:tracking-normal  py-4 px-2 md:px-10 cursor-pointer">
      <div
        onClick={setAccordionOpen}
        className="flex justify-between items-center"
      >
        <p className="text-md tracking-tighter md:tracking-normal md:text-2xl font-medium md:font-semibold">
          {title}
        </p>
        <span className="font-semibold">{open ? "-" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
        style={{maxHeight: open ? "100px" : "0px"}}
      >
        <div className="font-regular text-sm md:text-lg mt-4">
          {"> " + content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
