import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function PrivacyPage() {
  return (<>
    <Navigation currentItem={"PRIVACY"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">PRIVACY</p>
    <Footer />
  </>)
}
