import '../styles/HowItWorks.css';
export default function HowItWorks() {
  return (
    <div className='card-holder'>
    <div className="how-it-works-container">
        <img src='/images/hiwBg.png' alt="How It Works" className="header-image" />
        <div className="header-content">
          <div className='flex justify-center'><div className="hiw-btn"><button className='h-btn'>How it works</button></div></div>
          
          <div className="hiw-title">
          &quot;UNLOCKING CONVENIENCE: <span className="text-blue-800">HOW IT WORKS WITH CENTRAL CITY VENDING&quot;</span>
          </div>
        </div>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-title">CHOOSE YOUR VENDING EXPERIENCE</div>
          <div className="step-description">Select from our range of state-of-the-art vending machines designed to elevate your breakroom atmosphere. Whether it&apos;s snacks, beverages, or a combination of both, Central City Vending offers a variety of options to suit your workplace preferences.</div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-title">SCHEDULE YOUR FREE INSTALLATION</div>
          <div className="step-description">Experience the ease of our hassle-free process. Simply reach out to us to schedule your free vending machine installation. Our expert team will handle everything, ensuring a seamless setup that aligns with your convenience and business hours.</div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-title">ENJOY JOYFUL BREAKS</div>
          <div className="step-description">Once installed, your Central City Vending machine is ready to delight. From healthy snack choices to refreshing beverages, our commitment to servicing ensures your breakroom stays stocked and your team experiences the joy of a rejuvenating break. Elevate your workplace with Central City Vending – where every break is a moment of joy.</div>
        </div>
      </div>
    </div>
  );
}
