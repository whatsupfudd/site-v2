import Link from 'next/link'

type Argument = {
  title: string;
  description: string;
}


function ShowArguments({ args }: { args: Argument[] }) {
  return (
    <div className="px-3 mt-3 md:flex flex-flow gap-8 lg:grid lg:grid-cols-3 text-black dark:text-white">
      {
      args.map((argument, index) => (
        <div key={index} className="rounded-xl mt-5 pb-3 flex-1 lg:max-w-72 dark:bg-gradient-to-t dark:from-gray-900 dark:to-transparent">
          <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-200">{argument.title}</h1>
          <p className="text-lg mx-1">
            {argument.description}
          </p>
        </div>
      ))
      }
  </div>
  )
}

export function WorkInProgress() {
  return (<>
    <p className="p-6 rounded-xl border border-primary-700 border-4 text-gray-900 dark:text-gray-100">
      <span className="text-primary-700 dark:text-primary-300">WARNING: </span> this project is very much <b className="text-red-400">work in progress!!</b>
    </p>
  </>)
}

export default function AnonymousHero() {
  const allArguments_v1: Argument[] = [
    {
      title: 'accessible',
      description: "The FUDD ecosystem is giving easy access to advanced technology that is normally used by a small group of priviledge software developers. We are making it easy for everyone to understand and use these technologies to build amazing things."
    },
    {
      title: 'powerful',
      description: "You probably already used a development technology inspired by the FUDD ecosystem. Why limit yourself to the few features that have been replicated and not use the full potential of functional programming and advanced distributed programming."
    },
    {
      title: 'futuristic',
      description: "Open your mind to the future of software development. The FUDD ecosystem has so much technology that has barely been pushed to its real potential. We are here to help you understand and use these technologies to build amazing things."
    },
  ]

  const allArguments_v2: Argument[] = [
    {
      title: 'simplicity',
      description: "People want simple tools. It makes total sense... but how do we confirm we provide simplicity? At FUDD, we have defined a metric to benchmark our work and make sure that we deliver simplicity consistently. Our benchmark can even measure other tools so we know we are either outperforming the alternative solutions or we haven't reached our goal yet!"
    },
    {
      title: 'sppm',
      description: "Security, Productivity, Performance and Maintenance: the 4 priorities of the FUDD ecosystem. Day after day we read stories about people agonising over breaches, features that are years late in deployment, application speed that frustrate users and code bases that are frozen in the past with no way to unstuck them. If AI, crypto and the methaverse are upon us, we better clean up this mess or we're definitely doomed."
    },
    {
      title: 'ai-proof',
      description: "The most understood element about AI is that it implies upskilling. How can you move upward if the tech you use is stuck at the bottom? FUDD ecosystem has plenty of expansion capacity to stay relevant in the AI-accelerated development world we're transitioning in."
    },
  ]


  return (<>
    <section className="h-[50vh] md:h-[70vh] lg:h-[70vh] bg-[url('/img/bugOnAJourney_2.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="mx-auto max-w-screen-xl text-white z-1">
        <div className="max-w-screen-lg">
          <div className="p-4 flex flex-cols">
            <p className="text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl">
              <button className="text-center rounded-full p-3 tracking-widest text-rose-600 bg-gray-100/70">FUDD</button>
            </p>
            <p className="mb-6 ml-6 sm:max-w-64 rounded-2xl text-center inline-flex items-center font-light text-gray-200 bg-gray-900/50 dark:text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
              Maximizing Security, Productivity, Performance and Maintenance aspects of web applications.
            </p>
          </div>
          <div className="pt-40 md:pt-96 lg:pt-96 pl-4">
            <Link href="/concepts" className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Start!
            </Link>
            <Link href="/tutorial" className="ml-4 inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-gray-800">
                Tutorial
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <ShowArguments args={ allArguments_v2 } />
    <WorkInProgress />
  </>)
}