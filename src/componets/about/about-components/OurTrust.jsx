import { FaClock, FaHandshake, FaUserTie, FaHeadset } from 'react-icons/fa'; // Importing required icons
import { IconContext } from 'react-icons'; // Import IconContext for styling icons

const QualityFeature = ({ icon, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8 pb-[70px]">
      <IconContext.Provider value={{ size: '80px', className: 'text-blue-700' }}> {/* Setting icon size and color */}
        {icon}
      </IconContext.Provider>
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 flex justify-center flex-col box-shadow">
      <span className="service-name text-center w-full font-[600] ">QUALITY FEATURES</span>
      <h2 className="justify-center text-center font-bold text-[30px] text-gradient">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto ">
        <QualityFeature
          icon={<FaClock />} // Use react-icons instead of imgSrc
          title="Fast Performance"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
        <QualityFeature
          icon={<FaHandshake />} // Use react-icons instead of imgSrc
          title="Partnership deal"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
        <QualityFeature
          icon={<FaUserTie />} // Use react-icons instead of imgSrc
          title="Pro Subscription"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
        <QualityFeature
          icon={<FaHeadset />} // Use react-icons instead of imgSrc
          title="Customer Support"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
