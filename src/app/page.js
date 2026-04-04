import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Categories from "@/components/sections/Categories";
import FeaturedBikes from "@/components/sections/FeaturedBikes";
import Workshop from "@/components/sections/Workshop";
import StatsCounter from "@/components/sections/StatsCounter";
import Testimonials from "@/components/sections/Testimonials";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedBikes />
        <Workshop />
        <StatsCounter />
        <Testimonials />
        <BrandsMarquee />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
