import cars from "@/assets/images/pictures/cars"
import CarCard from "../card/CarCard";


type productCardType = {
    position: number,
    title: string,
    //... other product properties
}
const offers = [
    "Premium Cars",
    "Exclusive Services",
    "Fast and Safe Transaction"
]

const Products = () => {
    return ( <div className="mx-28 py-28">
        <div className="mx-auto max-w-[780px] text-center mb-8" >
            <h2 className="uppercase text-4xl font-semibold leading-[54px] mb-3">What we bring to you</h2>
            <p className="text-[#FFFFFFB2] font-medium leading-[24px]">We are all about the fast, luxury and safety. That’s why we provide the best service you can imagine.
            </p>
        </div>
        <div className="w-full flex gap-8 mt-20">
            {offers.map(
                (offer, index) => (
                    <ProductCard key={index} position={index + 1} title={offer} />
                )
            )}
        </div>
        <div className="grid mt-28 gap-x-5 gap-y-7 grid-cols-3 grid-rows-2">
            { cars.slice(3, 9).map((car, i) => (
                <CarCard key={i} {...car} />
            ))}
        </div>
    </div> );
}

const ProductCard = ({position, title}: productCardType) => {
    return (
        <div className="w-full">
            <h2 className="text-[40px] text-[#FFFFFF80] leading-[48px] font-semibold mb-5">{position}</h2>
            <h3 className="text-[24px] leading-7 font-medium mb-3">{title}</h3>
            <p className="text-[#FFFFFFB2] mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aliquid itaque eos ab incidunt accusantium!</p>
            <button><span className="font-medium text-lg">Learn More</span></button>
        </div>
    )
}
 
export default Products;