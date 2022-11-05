import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import js from "../assets/image/javascript.png";
import github from "../assets/image/github.png";
import aws from "../assets/image/aws.png";
import node from "../assets/image/node.png";
import react from "../assets/image/react.png";
import tailwind from "../assets/image/tailwind.png";

export function Skills() {
  return (
    <div name="skill" className="bg-slate-900 pt-16">
      <div className="bg-slate-900 max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-[#ccc] text-[#ccc] ">
            Experince
          </p>
          <p className=" my-8 text-[#ccc] text-2xl">
            These are the Technologies I've Worked With{" "}
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-8  mb-12">
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={html} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">HTML</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={css} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">CSS</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={js} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">JS</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={github} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">GITHUB</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={aws} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">AWS</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={node} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">NODE</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={react} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">REACT</p>
          </div>
          <div className=" shadow-md shadow-slate-800 hover:scale-110 duration-150 p-2">
            <img src={tailwind} className="w-24 mx-auto mb-5" />
            <p className="text-[#ccc] text-2xl">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
