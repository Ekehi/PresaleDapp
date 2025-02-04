import Menu from "./homepageComponents/menu.js";
import HomeSection from "./homepageComponents/home.js";
import About from "./homepageComponents/about.js";
import Section3 from "./homepageComponents/whitepaper.js";
import Section4 from "./homepageComponents/sales.js";
import Ecosystem from "./homepageComponents/ecosystem.js";
import Tokenomics from "./homepageComponents/tokenomics.js";
import Roadmap from "./homepageComponents/roadmap.js";
import Footer from "./homepageComponents/footer.js";
import Airdrop from "./homepageComponents/airdrop.js";

export default function Home()
{
  return (
    <div className="v_dark w-fit m-auto p-auto">
      <Menu />
      <main  className="w-fit m-auto p-auto">
        <HomeSection />
        <About />
        <Section3 />
        {/* <Section4 /> */}
        <Ecosystem />     
        <Tokenomics />
        <Roadmap />
        {/* <Airdrop/> */}
        <Footer />
      </main>
    </div>
  )
}
