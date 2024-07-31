
import { Inter } from '@next/font/google'
import { ReactElement } from "react";
import NavBar from "../navigaton/navbar";
import Footer from '../navigaton/footer';


const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: ReactElement
}

const Layout = ({children}: LayoutProps) => {

   
    return ( <div className={`max-w-screen min-h-screen bg-primary ${inter.className} text-white`}>
            <NavBar />
            {children}
            <Footer />
      </div> );
}
 
export default Layout;