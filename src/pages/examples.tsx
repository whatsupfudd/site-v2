import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function ExamplesPage() {
  return (<>
    <Navigation currentItem={"EXAMPLES"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">EXAMPLES</p>
    <Footer />
  </>)
}
