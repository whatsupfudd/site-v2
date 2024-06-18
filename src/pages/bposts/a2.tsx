import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import { getFakeAuthor, BlogContent, BlogPostRender } from "~/components/genPost"


const blogPost : BlogContent = {
  author : getFakeAuthor()
  , postDate : "18 June 2014"
  , techPostDate : "2024-06-18"
  , title : "HR implications of Statistical Coding"
  , intro : "Predicting the effect on the job market of the advent of generative AI&apos;s Statistical Coding."
}


export default function BlogPage() {
  return (<>
    <Navigation currentItem={"Blog"} isLogged={false} />
    <BlogPostRender bpost={ blogPost } />
    <Footer />
  </>)
}
