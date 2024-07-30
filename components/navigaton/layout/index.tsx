
import { Inter } from '@next/font/google'
import { ReactElement } from "react";
import NavBar from "../navbar";


const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: ReactElement
}

const Layout = ({children}: LayoutProps) => {

   
    return ( <div className={`max-w-screen min-h-screen bg-primary ${inter.className} text-white`}>
            <NavBar />
            {children}
      </div> );
}
 
export default Layout;