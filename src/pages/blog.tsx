import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import BlogPostGrid from "~/components/blogPosts"


export default function BlogPage() {
  return (<>
    <Navigation currentItem={"Blog"} isLogged={false} />
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">BLOG</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>
        <BlogPostGrid />
      </div>
    </section>
    <Footer />
  </>)
}
