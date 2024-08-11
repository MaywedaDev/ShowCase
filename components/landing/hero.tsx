import { benzAmg } from "@/assets/images/pictures/heroes";
import Image from "next/image";
import Brands from "./brands";

const Hero = () => {
    return ( <div className="w-full max-h-[calc(100vh-80px)] h-[780px] flex flex-col">
        <div className="w-full flex h-[calc(100%-80px)] relative">
            <div className="hidden min-[1368px]:block h-full bg-gradient-to-r from-black from-95% to-[#3B3B3B] to-95% w-[25%] max-w-[400px]">
            </div>
            <div className="absolute mr-8 bottom-20 left-8 md:left-16 xl:left-28 text-white max-w-[600px]">
                <h1 className="text-[60px] leading-[76px] lg:text-[96px] lg:leading-[116px] font-medium text-header uppercase">Mercedes <br/> AMG</h1>
                <p className="text-lg font-normal text-[#FFFFFFB2]">High performance V6 engine coupe with double turbochargers and computer cruise control.<br/> Tuned by AMG.</p>
            </div>
            <div className="w-full max-h-full overflow-hidden">
                <Image src={benzAmg} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="benz" />
            </div>
        </div>
        <Brands />
    </div> );
}
 
export default Hero;