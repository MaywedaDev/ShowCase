
import { Inter } from '@next/font/google'
import { ReactElement } from "react";
import NavBar from "../navbar";


const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: ReactElement
}

const Layout = ({children}: LayoutProps) => {

   
    return ( <div className={`max-w-screen h-screen bg-primary ${inter.className} bg-primary`}>
            <NavBar />
            {children}
      </div> );
}
 
export default Layout;