import { AiOutlineArrowRight } from "react-icons/ai";

export function Home() {
  return (
    <div name="home" className=" pt-32  w-full bg-slate-900 h-screen">
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white capitalize">
        <p className="  text-[#ccc]  text-2xl sm:text-5xl  my-5">
          hi, my name is{" "}
        </p>
        <p className=" text-3xl sm:text-7xl mb-5 ">mahmoud reda elshentenawy</p>
        <h2 className=" text-2xl sm:text-5xl mb-16  ">I'm FrontEnd</h2>
        <p className=" text-3xl lg:mx-20 mb-12 sm:text-2xl sm:mx-5 " >
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
        <div className="mx-auto mb-5 ">
          <button className="  px-5 py-2 group p border-2 border-white hover:bg-slate-500 hover:border-slate-500 rounded-2xl flex  mb-20  ">
            
            View Work <span className="group-hover:rotate-90 duration-100"> <AiOutlineArrowRight size={20} className="ml-3" /></span>
          </button>
        </div>
      </div>
    </div>
  );
}
