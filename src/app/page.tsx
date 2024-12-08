import Blog from "@/components/Blog";
import Editor from "@/components/Editor";
import FeaturedProducts from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import NeuralUiverse from "@/components/NeuralUiverse";
import Image from "next/image";

export default function Home() {
  return (
  
    <main>
      <HeroSection/>
      <Editor/>

      <FeaturedProducts/>
      <Hero/>
      <NeuralUiverse/>
      <Blog/>
      
    </main>
  );
}
