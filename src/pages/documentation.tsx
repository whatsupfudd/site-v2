import Link from "next/link"

import Navigation from "~/components/navigation"
import Footer from "~/components/footer"


type ProjectDesc = {
  label: string
  , description : string
  , destUrl : string
  , image : string
}


const projects : ProjectDesc[] = [
  {
    label: "Daniell: website generator"
    , description: "Very quick generator of websites compatible with Hugo, Next.js and Gatsby."
    , destUrl: "/projects/daniell"
    , image: "/img/projects/daniell_1.jpg"
  }
  , {
    label: "Fuddle: scripting language"
    , description: "Fuddle forks the Elm project and adds multiple features required to make it a reliable environment both for long-term project development and for code execution."
    , destUrl: "/projects/fuddle"
    , image: "/img/projects/fuddle_1.jpg"
  }
  , {
    label: "EasyWordy: Wordpress recycler - extender"
    , description: "EasyWordy is a Wordpress-compatible CMS that enables an easy and very gradual transition out of the PHP and Wordpress architecture and into modern web frameworks."
    , destUrl: "/projects/easy-wordy"
    , image: "/img/projects/easywordy_1.png"
  }
  , {
    label: "VSocMed: AI website generator"
    , description: "VSocMed transforms a short description into a full-fledged static website that includes sections, images, community management."
    , destUrl: "/projects/vsocmed-creator"
    , image: "/img/projects/vsocmed_1.png"
  }
  , {
    label: "Migrator: SQL migration manager"
    , description: "The Migrator calculates the migration code required to transform a SQL database to match two commits in a git history."
    , destUrl: "/projects/migrator"
    , image: "/img/projects/migrator_1.jpg"
  }
  , {
    label: "FuddBite: Flowbite adaptation for Fudd"
    , description: "A UI block library in Fuddle that is based on the FlowBite design."
    , destUrl: "/projects/migrator"
    , image: "/img/projects/fuddbite_1.jpg"
  }
  , {
    label: "GHC: Haskell compiler"
    , description: "The defacto Haskell language implementation, an extensible, evolutionary and high-performance compiler that has 30 years of experience built-in."
    , destUrl: "/projects/ghc"
    , image: "/img/projects/ghc_1.jpg"
  }
  , {
    label: "Stack: project manager and build/run tool"
    , description: "Modern applications are built on the shoulder of giants, which are libraries that one need to get access to at build time. And then there's all the options for compiling and testing. Stack makes that easy."
    , destUrl: "/projects/stack"
    , image: "/img/projects/stack_1.jpg"
  }
  , {
    label: "Cabal: project definition and package management"
    , description: "Modern applications are built on the shoulder of giants, which are libraries that one need to get access to at build time. And then there's all the options for compiling and testing. Stack makes that easy."
    , destUrl: "/projects/cabal"
    , image: "/img/projects/cabal_1.jpg"
  }
  , {
    label: "iHaskell: Haskell kernel for Jupyter"
    , description: "The Jupyter notebook architecture provides an interactive environment for presenting and experimenting with code. The iHaskell kernel provides all the backend logic for running Haskell in Jupyter notebooks."
    , destUrl: "/projects/ihaskell"
    , image: "/img/projects/ihaskell_1.jpg"
  }
  , {
    label: "Hasql: embedded SQL with Postgresql support"
    , description: "The Hasql package adds Embedded SQL capability to GHC through the Template extension. Further more Hasql supports the Postgresql extensions."
    , destUrl: "/projects/hasql"
    , image: "/img/projects/hasql_1.jpg"
  }
  , {
    label: "Servant: rigorous high performance web server"
    , description: "The Servant package provides a high-level, performant and rigorous solution for defining a web service. Implement quickly, deploy and it works."
    , destUrl: "/projects/servant"
    , image: "/img/projects/servant_1.jpg"
  }
  , {
    label: "Ginger: Jinja templates support"
    , description: "The Jinja templating is great for building both static websites and dynamic web components (such as HTMX-driven sites)."
    , destUrl: "/projects/servant"
    , image: "/img/projects/servant_1.jpg"
  }

]


function ProjectCard({ proj } : { proj : ProjectDesc }) {

  return (
  <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={ proj.image } alt={ proj.label } />
    </a>
    <div className="p-5">
        <a href= { proj.destUrl }>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> { proj.label }</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> { proj.description }</p>
        <a href={ proj.destUrl } className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
  </div>
  )
}



export default function DocumentationPage() {
  return (<>
    <Navigation currentItem={"DOCUMENTATION"} isLogged={false} />
    <p className="text-4xl font-bold text-center text-black dark:text-white">DOCUMENTATION</p>
    <section className="p-8 text-black dark:text-white">
    <h1 className="text-2xl mb-4">A Vision</h1>
    <p className="mb-6">
      The goal for the <b className="text-rose-900 dark:text-rose-300">FUDD</b> ecosystem is to provide a great environment to
      produce content and applications that will exist in the web.  More concretely, it means we are looking for a holistic solution
      that provides us with a powerful set of features
    </p>
    <Link href="/concepts" className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      Find out more
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </Link>
    </section>
    <section className="py-8 text-black dark:text-white">
      <h1 className="text-center text-2xl">Projects</h1>
      <hr className="my-4" />
      <div className="gap-10 flex flex-cols grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          projects.map((p, idx) =>
            <ProjectCard proj={ p } key={idx}/>
          )
        }
      </div>
    </section>
    <Footer />
  </>)
}
