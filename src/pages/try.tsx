import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function TryPage() {
  return (<>
    <Navigation currentItem={"TRY"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">TRY IT YOURSELF</p>
    <Footer />
  </>)
}
