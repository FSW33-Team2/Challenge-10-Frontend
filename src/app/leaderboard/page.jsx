import CarouselCustomNavigation from '@/components/LandingPage/Carousel'
import { LandingPageCard } from '@/components/LandingPage/GameList'
import LandingPageSpesification from '@/components/LandingPage/Spesification'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import NavbarSimple from '@/components/Navigation/Navbar'
import Image from 'next/image'
// import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    
    <main className="">
      <NavbarSimple />
      <CarouselCustomNavigation />
      <LandingPageCard />
      <LandingPageSpesification />
      <FooterWithSocialLinks />
      
    </main>
  )
}
