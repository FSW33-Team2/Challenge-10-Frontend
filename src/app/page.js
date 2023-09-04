import CarouselCustomNavigation from '@/components/LandingPage/Carousel'
import { LandingPageCard } from '@/components/LandingPage/GameList'
import LandingPageSpesification from '@/components/LandingPage/Spesification'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import NavbarSimple from '@/components/Navigation/Navbar'
import Dummygame1 from '@/components/dummyGame/Dummygame1'
import Image from 'next/image'
// import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    
    <main className="">
      <>
      <NavbarSimple />
      <CarouselCustomNavigation />
      <LandingPageCard />
      <LandingPageSpesification />
      <FooterWithSocialLinks />

      

      </>

      
    </main>
  )
}
