import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Categories from "@/components/sections/Categories";
import FeaturedBikes from "@/components/sections/FeaturedBikes";
import WorkshopService from "@/components/sections/WorkshopService";
import Workshop from "@/components/sections/Workshop";
import StatsCounter from "@/components/sections/StatsCounter";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/ui/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <StatsCounter />
        <Categories />
        <BrandsMarquee />
        <FeaturedBikes />
        <WorkshopService />
        <Workshop />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
