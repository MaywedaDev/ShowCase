import Link from "next/link";


const navbarStyles = {
    background: "linear-gradient(180deg, rgba(59, 59, 59, 0.42) -20.62%, rgba(59, 59, 59, 0.1) 136.25%)",
}

const NavBar = () => {
    return ( 
    <div className="w-full">
        <nav style={navbarStyles} className="flex items-center justify-between px-16 py-4 h-20 text-white">
            <div className="flex items-center">
                <h1 className="text-2xl">Showcase</h1>
            </div>
            <ul className="flex items-center gap-x-20 text-xl">
                <li>
                    <Link href="/">Inventory</Link>
                </li>
                <li>
                    <Link href="/about">Supercars</Link>
                </li>
                <li>
                    <Link href="/contact">Brand</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
            </ul>
        </nav>
    </div> 
    );
}
 
export default NavBar;

// background: linear-gradient(180deg, rgba(59, 59, 59, 0.42) -20.62%, rgba(59, 59, 59, 0.1) 136.25%);
// bg-gradient-to-b from-[#3B3B3B6B] to-[#3B3B3B1A]
