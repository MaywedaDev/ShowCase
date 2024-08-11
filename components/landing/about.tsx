import cars from "@/assets/images/pictures/cars";
import CarCard from "../card/CarCard";


const About = () => {
    return ( <div className="w-full px-8 md:px-16 xl:px-28 py-14">
        <div className="flex max-[1085px]:flex-wrap gap-6 w-full justify-between text-white">
            <h1 className="text-[30px] leading-[42px] sm:text-[48px] font-semibold sm:leading-[58px] max-w-[500px]">
                EXCLUSIVE & REVOLUTINARY CAR
            </h1>
            <div className="max-w-[480px]">
                <p>Lorem ipsum dolor sit amet consectetur. Varius facilisi a netus id metus at leo fermentum. Urna et egestas nisl purus vehicula.</p>
                <button className="mt-4"><span className="text-lg font-semibold">Learn More</span></button>
            </div>
        </div>
        <div className="mt-24 grid min-[1085px]:grid-cols-3 min-[1085px]:grid-rows-2 grid-rows-[repeat(3, 330px)] w-full gap-x-5 gap-y-7 min-[1085px]:h-[660px]">
            {cars.slice(0, 3).map((car, i) => (
                <div key={i} className={i === 0 ? "min-[1085px]:row-span-2" : "min-[1085px]:col-span-2"}>
                    <CarCard {...car} />
                </div>
            ) )}
        </div>
    </div> );
}
 
export default About;