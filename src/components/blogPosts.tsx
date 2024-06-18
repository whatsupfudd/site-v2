
type ArticleAuthor = {
   name : string
   avatar : string
 }

type BlogArticle = {
  category : string
  , title : string
  , description : string
  , urlLink : string
  /* 715 x 384 */
  , image : string
  , imageDesc : string
  , author : ArticleAuthor
  , postDate : string
  , readTime : string
 }

const author_1 = {
  name: "Elmer Azkellod"
  , avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
}

const blogArticles : BlogArticle[] = [
  {
    category: "Article"
    , title: "Code Complexity Metrics"
    , description: "Putting the foundations for analyzing the effort that have been invested in creating a body of code together."
    , urlLink: "/bposts/code-complexity-metrics"
    , image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
    , imageDesc: "code complexity visualized"
    , author: author_1
    , postDate: "June 17, 2024"
    , readTime: "15 min"
  }
  , {
    category: "Article"
    , title: "HR implications of Statistical Coding"
    , description: "Predicting the effect on the job market of the advent of generative AI's Statistical Coding."
    , urlLink: "/bposts/hr-implications-of-statistical-coding"
    , image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
    , imageDesc: "code complexity visualized"
    , author: author_1
    , postDate: "June 18, 2024"
    , readTime: "1 hr"
  }
]


function BlogArticleP({ article } : { article : BlogArticle } ) {
  return (<>
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href={ article.urlLink }>
            <img className="mb-5 rounded-lg" src={ article.image } alt={ article.imageDesc } />
        </a>
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{ article.category }</span>
        <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href={ article.urlLink }>{ article.title }</a>
        </h2>
        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{ article.description }</p>
        <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={ article.author?.avatar } alt={ article.author?.name } />
            <div className="font-medium dark:text-white">
                <div>{ article.author?.name }</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400"> { article.postDate } · { article.readTime } read</div>
            </div>
        </div>
    </article>
  </>)
}


export default function BlogPostGrid() {
  return (<>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          blogArticles.map( (anArticle, i) =>
            <BlogArticleP key={i} article={anArticle} />
          )
        }
      </div>
  </>)
}