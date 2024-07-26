import Image from "next/image";
import * as images from "@/assets/images/logos"

type brand = {
    name: string;
    url: string;
  }

const Brands = () => {


    const logos: brand[] = Object.entries(images).map<brand>(([key, value]) => ({name: key, url: value}))

    return ( <div className="w-full bg-black flex py-5 px-12">
        {logos.map((image, i) => (
            <div className="grid place-content-center w-full" key={i}> 
                <Image width={40} height={40} src={image.url} alt={image.name} />
            </div>
        ))}
    </div> );
}
 
export default Brands;
