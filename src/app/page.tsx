import Image from 'next/image'
import Navbar from "@/app/shared/Navbar";
import Hero from "@/app/shared/Hero";

export default function Home() {
  return (
      <>
      <section>
          <Navbar />
            <Hero />
          <div>Pic of the two pugs</div>
      </section>
      </>
  )
}
