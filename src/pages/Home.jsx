import React, { useState } from "react";
import LeafVeins from "@/components/site/LeafVeins";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Menu from "@/components/site/Menu";
import Stay from "@/components/site/Stay";
import Gallery from "@/components/site/Gallery";
import Reviews from "@/components/site/Reviews";
import Visit from "@/components/site/Visit";
import Footer from "@/components/site/Footer";
import BookingButton from "@/components/site/BookingButton";
import BookingOverlay from "@/components/site/BookingOverlay";

export default function Home() {
  const [booking, setBooking] = useState(false);
  const openBooking = () => setBooking(true);

  return (
    <div className="relative overflow-x-clip bg-cream">
      <LeafVeins />
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <About />
        <Menu />
        <Stay onBook={openBooking} />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <BookingButton onClick={openBooking} hidden={booking} />
      <BookingOverlay open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}