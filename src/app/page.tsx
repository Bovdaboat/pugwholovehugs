import Image from 'next/image'
import Navbar from "@/app/shared/Navbar";
import Hero from "@/app/shared/Hero";
import Pugs from "@/app/shared/pugs";
import Footer from "@/app/shared/Footer";
export default function Home() {
  return (
      <>
      <section>
          <Navbar />
            <Hero />
          <Pugs />
          <Footer />
      </section>
      </>
  )
}
