import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Story } from "@/components/Story";
import { Reviews } from "@/components/Reviews";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { LogoShowcase } from "@/components/LogoShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bear Brewers — Premium Craft Beer, Brewed Wild" },
      {
        name: "description",
        content:
          "Premium craft beer with bold flavors and icy attitude. Discover the Bear Brewers lineup — Arctic Gold, Polar Punch, Berry Frost, and Mango Melt.",
      },
      { property: "og:title", content: "Bear Brewers — Brewed Wild. Served Cold." },
      {
        property: "og:description",
        content: "Premium craft beer with bold flavors and icy attitude.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
