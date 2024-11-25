import Navigation from "~/components/navigation"
import AnonymousHero from "~/components/anonymousHero"
import CodingExample from "~/components/codingExample"
import LearnIntro from "~/components/learnIntro"
import ProgressStatus from "~/components/progressStatus"
import HelpNeeded from "~/components/helpNeeded"
import BrandSale from "~/components/brandSale"
import Community from "~/components/community"
import Footer from "~/components/footer"

export default function LandingPage() {
  return (<>
    <Navigation currentItem={"HOME"} isLogged={false} />
    <AnonymousHero />
    <ProgressStatus />
    <HelpNeeded />
    <LearnIntro />
    <CodingExample />
    <BrandSale />
    <Community />
    <Footer />
  </>)
}
