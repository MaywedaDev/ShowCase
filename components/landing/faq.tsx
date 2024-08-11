import cars from "@/assets/images/pictures/cars";
import Image from "next/image";


const bmw = cars[cars.length - 1];


type accordionTabType = {
    question: string,
    answer: string
} 

const FAQ = () => {


    const qas: accordionTabType[] = [
        { question: 'Supercars to get in 2023 and why?', answer: 'You should try getting the Huracan, not just for the speed but the luxurious style. Its sleek and glassier than clear coats, finishing with a deep, glassy shine. This car is truly unrivaled amongst paint protections and nice value for your money. '},
        { question: 'Customers care', answer: '' },
        { question: 'High performance cars', answer: ''}
    ]


    return ( <div className="w-full flex px-8 md:px-16 xl:px-28 my-28 gap-10 shrink">
        <div>
            <h2 className="text-[32px] font-medium">Maybe your question is yet to be answered, check this out</h2>
            <div className="w-full mt-10 space-y-6">
                {qas.map((qa, i) => {
                    return (
                        <>
                            <AccordionTab key={i} {...qa} />
                            <hr className="border-b-[4px] border-[#3B3B3B] w-full" />  {/* Add a border line */}
                        </>
                    )
                })}
            </div>
        </div>
        <div className="max-lg:hidden w-full min-w-[500px]">
            <Image src={bmw.src} height={bmw.height} width={bmw.width} alt="bmw" />
        </div>
    </div> );
}
 
export default FAQ;

const AccordionTab = ({question, answer}: accordionTabType) => {
    return (
        <div className="w-full space-y-3">
            <h3 className="font-normal text-xl">{question}</h3>
            {answer && <p className="text-[15px] text-[#FFFFFFB2]">{answer}</p>}
        </div>
    )
}