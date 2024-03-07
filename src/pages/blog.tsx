import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


export default function BlogPage() {
  return (<>
    <Navigation currentItem={"Blog"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">BLOG</p>
    <Footer />
  </>)
}
