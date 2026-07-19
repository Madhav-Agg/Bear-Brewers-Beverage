import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Story } from "@/components/Story";
import { Reviews } from "@/components/Reviews";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { LogoShowcase } from "@/components/LogoShowcase";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <LogoShowcase />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
