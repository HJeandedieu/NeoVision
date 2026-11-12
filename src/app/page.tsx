import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedArticle from "@/components/sections/FeaturedArticle";
import Testimonials from "@/components/sections/Testimonials";
import VideoBanner from "@/components/sections/VideoBanner";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Partners />
        <About />
        <Services />
        <FeaturedArticle />
        <Testimonials />
        <VideoBanner />
      </main>
      <SiteFooter />
    </>
  );
}
