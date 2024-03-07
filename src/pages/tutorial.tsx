import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function TutorialPage() {
  return (<>
    <Navigation currentItem={"TUTORIAL"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">TUTORIAL</p>
    <Footer />
  </>)
}
