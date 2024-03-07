import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function ContactUsPage() {
  return (<>
    <Navigation currentItem={"CONTACTUS"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">CONTACTUS</p>
    <Footer />
  </>)
}
