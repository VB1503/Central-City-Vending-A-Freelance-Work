import { FaFacebookF, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className="flex justify-center">
<div className="flex flex-col md:w-1/3 text-gray-400 gap-3">
    <hr className="border-2 border-gray-400"/>
    <div className="flex justify-evenly">
        <div className="cursor-pointer" >Home</div>
        <div className="cursor-pointer" >About Us</div>
        <div className="cursor-pointer" >How it Works</div>
        <div className="cursor-pointer" >Contact</div>
        <div className="cursor-pointer" >FAQs</div>
    </div> 
    <div className="flex justify-evenly">
    <div className="">&copy; CENTRAL CITY VENDING</div>  
    <div className="">Privacy and Security Policy</div>  
    </div>   
    <div className="flex justify-center gap-4 text-[30px] pb-5">
        <FaSquareXTwitter />
        <FaFacebookF />
        <FaYoutube />
    </div>
</div>

</div>
  )
}

