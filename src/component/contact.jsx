export function Contact() {
  return (
    <div name="contact" className= "pt-28 bg-slate-900 pb-8 p-4 flex flex-col justify-center w-full h-screen">
      <form
        className=" flex flex-col max-w-[600px] justify-center item-center mx-auto"
        action=""
      >
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-[#ccc] text-[#ccc] ">
            Contact
          </p>
          <p className="mt-8 text-xl  text-[#ccc] ml-10">
            submit  the form below or  shoot me an email elshentenawy@gmail.com
          </p>
        </div>
        <input type="text" className="m-3 p-3 bg-[#cce2ee]" placeholder="name" name="name" id="" />
        <input type="email" className="m-3 p-3 bg-[#cce2ee]" placeholder="e-mail" name="email" id="" />
        <textarea className="m-3 p-3 bg-[#cce2ee]"  name="texetarea" id="" cols="30" rows="10"></textarea>
        <button  className="m-3 py-2 rounded-lg px-6 bg-[#cce2ee] mx-auto flex items-center ">Submit</button>

      </form>
    </div>
  );
}
