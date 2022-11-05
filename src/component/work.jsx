import first from "../assets/image/first.png";
import second from "../assets/image/sec.png";


export function Works() {
  return (
    <div name="work" >
    <div  className= "pt-16 bg-slate-900 pb-8">
      <div className="bg-slate-900 max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-[#ccc] text-[#ccc] ">
            work
          </p>
          <p className=" my-8 text-[#ccc] text-2xl">
            These are the Technologies I've Worked With{" "}
          </p>
        </div>
        {/* container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8  ">
          {/* grid */}

          <div
            style={{ backgroundImage: `url(${first})` }}
            className=" shadow-lg shadow-slate-800 group hover:scale-110 duration-200 rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-black tracking-wider">
                react js education website
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${second})` }}
            className=" shadow-lg shadow-slate-800 group hover:scale-110 duration-200 rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-black tracking-wider">
                react js education website
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${first})` }}
            className=" shadow-lg shadow-slate-800 group hover:scale-110 duration-200 rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-black tracking-wider">
                react js education website
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${second})` }}
            className=" shadow-lg shadow-slate-800 group hover:scale-110 duration-200 rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-black tracking-wider">
                react js education website
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${first})` }}
            className=" shadow-lg shadow-slate-800 group hover:scale-110 duration-200 rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-black tracking-wider">
                react js education website
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${second})` }}
            className=" shadow-lg shadow-slate-800 group hover:scale-110 duration-200rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-black tracking-wider">
                react js education website
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg px-5 py-1 m-2 bg-yellow-100 text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
