import '../styles/whychooseus.css'
export default function WhyChooseUs() {
  return (
    <div className="min-h-[80vh]">
      <div className="bg-blue-800 w-full why-chooes-us-back p-8 md:p-20 flex flex-col md:flex-row relative">
        
        <div className="w-full md:w-1/3 text-white mb-8 md:mb-0 z-10">
          <div className="font-bold text-lg md:text-2xl mb-4">GET CONNECTED</div>
          <div className="font-extrabold text-xl md:text-4xl mb-4">REQUEST A CALL</div>
          <div className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus animi consectetur recusandae, labore dicta doloribus alias iure ex neque necessitatibus natus id placeat iste non. Cum quidem itaque possimus labore.
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-end">
          <div className="flex flex-col justify-end md:flex-row">
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Full Name" name="" id="" />
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Phone Number" name="" id="" />
          </div>
          <div className="flex flex-col justify-end md:flex-row">
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Email Address" name="" id="" />
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Preferred Contact Time" name="" id="" />
          </div>
          <div className="flex flex-col justify-end md:flex-row">
          <button className="bg-[#004AAD] border text-gray-200 px-3 font-extrabold py-2 m-2 md:m-4 self-center">REQUEST A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
