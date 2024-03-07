import Navigation from "~/components/navigation"
import AnonymousHero from "~/components/anonymousHero"
import CodingExample from "~/components/codingExample"
import LearnIntro from "~/components/learnIntro"
import BrandSale from "~/components/brandSale"
import Community from "~/components/community"
import Footer from "~/components/footer"

export default function LandingPage() {
  return (<>
    <Navigation currentItem={"HOME"} isLogged={false} />
    <AnonymousHero />
    <LearnIntro />
    <CodingExample />
    <BrandSale />
    <Community />
    <Footer />
  </>)
}
