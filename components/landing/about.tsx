import cars from "@/assets/images/pictures/cars";
import CarCard from "../card/CarCard";


const About = () => {
    return ( <div className="w-full px-28 py-14">
        <div className="flex w-full justify-between text-white">
            <h1 className="text-[48px] font-semibold leading-[58px] max-w-[500px]">
                EXCLUSIVE & REVOLUTINARY CAR
            </h1>
            <div className="max-w-[480px]">
                <p>Lorem ipsum dolor sit amet consectetur. Varius facilisi a netus id metus at leo fermentum. Urna et egestas nisl purus vehicula.</p>
                <button className="mt-4"><span className="text-lg font-semibold">Learn More</span></button>
            </div>
        </div>
        <div className="mt-24 grid grid-cols-3 grid-rows-2 w-full gap-x-5 gap-y-7 h-[660px]">
            {cars.map((car, i) => (
                <div key={i} className={i === 0 ? "row-span-2" : "col-span-2"}>
                    <CarCard {...car} />
                </div>
            ) )}
        </div>
    </div> );
}
 
export default About;