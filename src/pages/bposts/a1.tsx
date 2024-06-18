import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import { getFakeAuthor, BlogContent, BlogPostRender } from "~/components/genPost"


const blogPost : BlogContent = {
  author : getFakeAuthor()
  , postDate : "17 June 2014"
  , techPostDate : "2024-06-17"
  , title : "Code Complexity Metrics"
  , intro : "Putting the foundations for analyzing the effort that have been invested in creating a body of code together."
}

export default function BlogPage() {
  return (<>
    <Navigation currentItem={"Blog"} isLogged={false} />
    <BlogPostRender bpost={ blogPost } />
    <Footer />
  </>)
}
