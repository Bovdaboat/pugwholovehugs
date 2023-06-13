import Image from 'next/image'
import Navbar from "@/app/shared/Navbar";
import Hero from "@/app/shared/Hero";
import Pugs from "@/app/shared/pugs";
export default function Home() {
  return (
      <>
      <section>
          <Navbar />
            <Hero />
          <Pugs />
          <div>Pic of the two pugs</div>
      </section>
      </>
  )
}
