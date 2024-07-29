// import Head from 'next/head'
// import Image from 'next/image'

import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Products from "@/components/landing/products";





export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
    </>
  )
}
