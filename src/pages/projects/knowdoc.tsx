import Navigation from "~/components/navigation"
import { CuteLink, FuddEco, NextPage } from "~/components/styling"

function KD() {
  return (
    <span className="bold text-primary-700 dark:text-primary-400">KnowDoc</span>
  )
}


function KnowDoc_1() {
  return (<>
    <Navigation currentItem={"PROJECTS/EASYWORDY"} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">KnowDoc</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-400">Goal</h1>
        <p className="text-lg">The goal of <KD /> is to provide the best features of Stack Overflow and ChatGPT to unblock your coding journey.
        </p>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Efficient unblocking through the essence of Stack Overflow and ChatGPT.</h1>
        <p>
        The KnowDoc project provides provides a documentation and knowledge support to software developers to make sure they can efficiently keep coding whenever they encounter a block in their work.
        </p>
        <br/>
      </section>
    </div>
  </>)
}


export default KnowDoc_1;
