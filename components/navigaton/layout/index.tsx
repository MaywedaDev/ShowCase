
import { Inter } from '@next/font/google'
import { ReactElement } from "react";
import NavBar from "../navbar";


const inter = Inter({ subsets: ['latin'] })

const Layout = ({children}: {children: ReactElement}) => {

   
    return ( <div className={`w-screen h-screen bg-slate-600 ${inter.className} bg-primary`}>
            <NavBar />
            {children}
      </div> );
}
 
export default Layout;