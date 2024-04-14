export default function WhyChooseUs() {
  return (
    <div className="min-h-[80vh]">
      <div className="bg-blue-800 w-full p-8 md:p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 text-white mb-8 md:mb-0">
          <div className="font-bold text-lg md:text-2xl mb-4">GET CONNECTED</div>
          <div className="font-extrabold text-xl md:text-4xl mb-4">REQUEST A CALL</div>
          <div className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus animi consectetur recusandae, labore dicta doloribus alias iure ex neque necessitatibus natus id placeat iste non. Cum quidem itaque possimus labore.
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="flex flex-col md:flex-row">
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Full Name" name="" id="" />
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Phone Number" name="" id="" />
          </div>
          <div className="flex flex-col md:flex-row">
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Email Address" name="" id="" />
            <input type="text" className="p-2 m-2 md:m-4 outline-none" placeholder="Preferred Contact Time" name="" id="" />
          </div>
          <button className="bg-gray-200 text-blue-800 font-extrabold py-2 m-2 md:m-4 self-center">REQUEST A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
