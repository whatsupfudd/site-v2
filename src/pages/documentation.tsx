import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function DocumentationPage() {
  return (<>
    <Navigation currentItem={"DOCUMENTATION"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">DOCUMENTATION</p>
    <Footer />
  </>)
}
