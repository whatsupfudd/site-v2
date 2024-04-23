import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function TutorialPage() {
  return (<>
    <Navigation currentItem={"TUTORIAL"} isLogged={false} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">TUTORIAL</h1>
    </div>
    <Footer />
  </>)
}
