import machine from '../assets/icons/machine.png'
import service from '../assets/icons/service.png'
import racks from "../assets/icons/racks.png"
import card from "../assets/icons/crd.png"
export default function Services() {
  return (
    <div className="flex flex-col items-center">
      <hr className="border-2 border-blue-700 w-4/5 " />
      <div className="my-[50px] md:w-4/5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 font-extrabold text-[40px] text-center md:text-left sm:text-[30px]">
          OUR SERVICES
        </div>
        <div className="w-full md:w-1/3 md:pl-4">
          <div className="flex m-2">
            <img src={machine} alt="" className="h-[100px]" />
            <div className="m-2 border border-1 border-black"></div>
            <div className="">
              <div className="text-[20px] font-extrabold text-blue-700 sm:text-[15px]">
                SMART VENDING
              </div>
              <div className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum perspiciatis incidunt sequi sed veritatis in.inima
                praesentium?
              </div>
            </div>
          </div>
          <div className="flex m-2">
            <img src={card} alt="" className="h-[100px]" />
            <div className="m-2 border border-1 border-black"></div>
            <div className="">
              <div className="text-[20px] font-extrabold text-blue-700 sm:text-[15px]">
                CONTACTLESS SOLUTIONS
              </div>
              <div className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum perspiciatis incidunt sequi sed veritatis in.inima
                praesentium?
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:pl-4">
          <div className="flex m-2">
            <img src={service} alt="" className="h-[100px]" />
            <div className="m-2 border border-1 border-black"></div>
            <div className="">
              <div className="text-[20px] font-extrabold text-blue-700 sm:text-[15px]">
                24/7 REPAIR SERVICE
              </div>
              <div className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum perspiciatis incidunt sequi sed veritatis in.inima
                praesentium?
              </div>
            </div>
          </div>
          <div className="flex m-2">
            <img src={racks} alt="" className="h-[100px]" />
            <div className="m-2 border border-1 border-black"></div>
            <div className="">
              <div className="text-[20px] font-extrabold text-blue-700 sm:text-[15px]">
                MICROMARKET
              </div>
              <div className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum perspiciatis incidunt sequi sed veritatis in.inima
                praesentium?
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-blue-700 w-4/5 " />
    </div>
  );
}
