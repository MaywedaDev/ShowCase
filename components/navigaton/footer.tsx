import { title } from "process";

const Footer = () => {

    const links = [
        {title: "Navigation", sublinks: ["Home", "Brands", "Supercars", "Inventory", 'FAQ']},
        {title: 'Support Us', sublinks: ["Contact Us", "Support Center", "Security"]},
        {title: "Partner", sublinks: ["Our Partner", "Community", "Customers"]}
    ]

    return ( <div className="w-full bg-[#151A1A] px-28 py-14">
            <div className="w-full flex justify-between">
            <div className="max-w-[360px]">
                <h3 className="text-2xl">Showcase</h3>
                <p className="mt-4 text-[#FFFFFFB2]">
                Subscribe to our newsletter to get informed on the latest news and happenings in the world of fast cars. Lorem ipsum bala blue.
                </p>
                <div className="flex w-full h-[52px] border-[2px] border-[#373639] font-semibold mt-6">
                    <input type="text" className="bg-[#373639] border-none h-full  py-3 px-5 w-full" placeholder="Your email address" />
                    <button className="h-full py-3 px-4 bg-[#1D1D1D] text-[#373639]">Subscribe</button>
                </div>
            </div>
            <div className="flex">
                    {links.map((link, index) => (
                        <div className="mr-28" key={index}>
                            <h4 className="text-xl font-medium">{link.title}</h4>
                            <ul className="space-y-2 mt-3">
                                {link.sublinks.map((sublink, subIndex) => (
                                    <li key={subIndex}><a href="#" className="text-[#FFFFFFB2] text-sm hover:text-[#373639]">{sublink}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
        </div>
        <hr className="bg-[#1C2121] border-2 w-full mt-28" />
        <div className="w-full flex mt-6 text-sm" >
            <div>
                <div className="flex gap-3">
                    <span>Terms and conditions</span>
                    <span>Privacy Policy</span>
                    <span>Sitemap</span>
                </div>
                <p className="mt-4">©Showcase Website 2023 All Rights Reserved.</p>
            </div>
        </div>
    </div> );
}
 
export default Footer;