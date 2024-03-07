import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function TermsPage() {
  return (<>
    <Navigation currentItem={"TERMS"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">TERMS</p>
    <Footer />
  </>)
}
