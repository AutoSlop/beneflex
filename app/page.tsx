import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Modules from "./components/Modules";
import Compliance from "./components/Compliance";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Simulator from "./components/Simulator";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Problem />
        <HowItWorks />
        <Benefits />
        <Modules />
        <Compliance />
        <Pricing />
        <Faq />
        <Simulator />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
