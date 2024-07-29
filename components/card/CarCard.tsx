import Image, { StaticImageData } from "next/image";



const CarCard = (props: StaticImageData) => {
    return ( <div className="w-full h-full">
        <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} width={props.width} height={props.height} src={props.src} alt="A car" />
    </div> );
}
 
export default CarCard;