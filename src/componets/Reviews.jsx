import diamond from "../assets/icons/diamond.png"
import madland from "../assets/icons/madland.png"
import housing from "../assets/icons/housing.png"
export default function Reviews() {
  return (
    <div className="pt-[80px] pb-8 md:h-[100vh] flex flex-col items-center px-[10px]">
      <div className="text-2xl md:text-4xl">
        WHAT OUR <span className="text-blue-700">CLIENTS SAY</span>
      </div>
      <div className="pt-[50px] md:pt-[100px] md:w-4/5 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <img src={diamond} className="w-full h-auto md:h-[100px] md:w-auto" alt="" />
          <div className="w-full p-4 md:p-10 shadow-lg border-1">
            <div className="text-lg md:text-xl text-blue-700 font-bold">RESSE.W</div>
            <div className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex voluptatem quo quidem, voluptatum amet praesentium excepturi. Facilis dolorem similique, non rem ducimus atque iusto, veniam neque, commodi laudantium sint!</div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img src={madland} alt="" className="w-full h-auto md:h-[100px] md:w-auto" />
          <div className="w-full p-4 md:p-10 shadow-lg border-1">
            <div className="text-lg md:text-xl text-blue-700 font-bold">CHRIS.G</div>
            <div className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex voluptatem quo quidem, voluptatum amet praesentium excepturi. Facilis dolorem similique, non rem ducimus atque iusto, veniam neque, commodi laudantium sint!</div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img src={housing} alt="" className="w-full h-auto md:h-[100px] md:w-auto" />
          <div className="w-full p-4 md:p-10 shadow-lg border-1">
            <div className="text-lg md:text-xl text-blue-700 font-bold">BARADEN.S</div>
            <div className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex voluptatem quo quidem, voluptatum amet praesentium excepturi. Facilis dolorem similique, non rem ducimus atque iusto, veniam neque, commodi laudantium sint!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
