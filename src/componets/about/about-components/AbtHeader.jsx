import React from 'react'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo}  justify-center items-center gap-[20px] px-[30px]`}>
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] justify-center">Welcome to Central City Vending:  <br className='sm:block hidden'/><span className='text-blue-800'>Elevating Breakroom Experiences</span></h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center mt-5">
        AT Central City Vending, we believe that a workplace is more than just a space where people gather to work; it's a community. Our mission is to transform break rooms into vibrant, uplifting spaces, fostering joy and connectivity through our top-notch vending solutions.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src='/images/image2.png'
          alt='card'
          className='w-[80%] h-[80%]'
        />
      </div>
    </section>
  )
}

export default CardDeal

