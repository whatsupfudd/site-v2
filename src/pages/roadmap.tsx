import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import { CuteLink, FuddEco, InitialImage, NextPage } from "~/components/styling"


export default function ConceptsPage() {
  return (<>
    <Navigation currentItem={"ROADMAP"} isLogged={false} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">ROADMAP</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-400">Priorities</h1>
        <p className="text-lg">The <FuddEco /> focuses on the Security, Productivity, Performance and Maintenance (SPPM) aspects of web applications development and capabilities.
        </p>
        <br />
        <h2 className="text-xl pb-4 text-primary-700 dark:text-primary-400">Security</h2>
        <h2 className="text-xl pb-4 text-primary-700 dark:text-primary-400">Productivity</h2>
        <h2 className="text-xl pb-4 text-primary-700 dark:text-primary-400">Performance</h2>
        <h2 className="text-xl pb-4 text-primary-700 dark:text-primary-400">Maintenance</h2>
      </section>
    </div>
    <Footer />
  </>)
}