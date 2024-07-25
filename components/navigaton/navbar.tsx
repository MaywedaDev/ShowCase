import Link from "next/link";

const NavBar = () => {
    return ( 
    <div className="w-full">
        <nav className="flex items-center justify-between px-16 py-4 bg-gradient from-[#3B3B3B6B] to-[#3B3B3B1A] text-white">
            <div className="flex items-center">
                <h1 className="text-2xl">Showcase</h1>
            </div>
            <ul className="flex items-center gap-x-14">
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