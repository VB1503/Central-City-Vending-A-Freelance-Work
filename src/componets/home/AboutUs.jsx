import '../../About.css'
export default function AboutUs() {
  return (
    <div>
      <div className="abt-cont">
        <div className=" abt-gist">
          <div className="abt-title">
            WELCOME TO CENTRAL CITY VENDING:{' '}
            <span className="text-blue-800">
               ELEVATING BREAKROOM EXPERIENCE
            </span>
          </div>
          <div className='flex justify-center items-center'>
            <p className='abt-text'>
            AT Central City Vending, we believe that a workplace is more than
            just a space where people gather to work it&apos;s a community. Our
            mission is to transform break rooms into vibrant, uplifting spaces,
            fostering joy and connectivity through our top-notch vending
            solutions.
            </p>
          </div>
          <div className="abt-butt-cont">
            <button className="get-started-butt">LEARN MORE...</button>
          </div>
       
        </div>
      </div>
    </div>
  );
}
