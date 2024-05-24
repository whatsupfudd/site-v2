import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import Link from "next/link"


export default function TutorialPage() {
  return (<>
    <Navigation currentItem={"TUTORIAL"} isLogged={false} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">TUTORIAL</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Practical introduction to web application developement with Haskell</h1>
        <p className="mb-6">
        Use this to find out more about real-life Haskell work for implementing modern web applications that rely
        on Tailwind CSS, HTMX, SQL database, JWT security, Javascript frameworks and etc.
        </p>
        <p className="mb-6">
        The introduction runs in an interactive Jupyter Notebook to make your life more interesting! Use the following
        Docker Compose config file to get on it, with password <span className="text-rose-900 dark:text-rose-100">fuddfudd </span> to login to the notebook
        (<span className="text-red-700 dark:text-red-500">warning: you probably will have to fix the indentation in your compose file</span>):
        </p>
        <div className="w-3/4 overflow-x-auto bg-blue-100 dark:bg-blue-900">
          <pre className="whitespace-pre">
            services:
            <div className="px-5">
              nginx:<br />
              <div className="px-5">
                restart: always<br />
                image: whatsupfudd/jupytell:1.1<br />
                ports:<br />
                <div className="px-5">
                  - &quot;9980:80&quot;<br />
                  - &quot;9443:443&quot;<br />
            </div>
                volumes:<br />
                <div className="px-5">
                  - &quot;/usr/share/nginx/html&quot;<br />
                  - &quot;/etc/nginx/certs&quot;<br />
                  </div>
                networks:<br />
                <div className="px-5">
                  - proxies<br />
                  </div>
            </div>
            </div>
            <br />
            <div className="px-5">
              jupyter:<br />
              <div className="px-5">
                restart: always<br />
                image: whatsupfudd/intro1:1.3<br />
                networks:<br />
                <div className="px-5">
                  - proxies<br />
                </div>
              </div>
              </div>
            <br />
              networks:<br />
              <div className="px-5">
                proxies:<br />
              </div>
        </pre>
      </div>
      <p className="mb-6  my-6">
      To see the non-interactive version, follow the link:
      </p>
      <Link href="/practical-haskell-1.html" className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      INTRODUCTION #1
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </Link>
      </section>
    </div>
    <Footer />
  </>)
}
