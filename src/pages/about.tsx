import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function AboutPage() {
  return (<>
    <Navigation currentItem={"ABOUT"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">ABOUT</p>
    <Footer />
  </>)
}
