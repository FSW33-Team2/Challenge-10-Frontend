import LoginFormPage from '@/components/Auth/Login/LoginForm'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import NavbarSimple from '@/components/Navigation/Navbar'
import Image from 'next/image'
// import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    
    <main className="">
      <NavbarSimple />
      <LoginFormPage />
      <FooterWithSocialLinks />
      
    </main>
  )
}
