'use client'
import Navigation from "~/components/navigation"
import Footer from "~/components/footer"

type AccordeonContent = {
  label : string
  , content : JSX.Element
}


const pillars : AccordeonContent[] = [
  { label: "Core programming pillar: Haskell"
    , content: <>
      <p className="text-center text-rose-800 dark:text-rose-400">
        <em>Haskell... oh boy, what a way to start talking about an ecosystem we want the average web developer to use!</em>
      </p>
      <p className="py-4">
        Like its origins, formal logic, the <em>Haskell</em> programming language is both fantastic and horrible. On one side the expressivity, computational power and
        flexibility that have been implemented through its syntax, its default compiler (GHC), its support tools are arguably the most advanced
        there are in the programming world and they have served as the inspiration for many much more popular frameworks.
        On the other side its origin in theoritical computing science (system F), its long gestation in academia (almost 20 years) as a research system,
        and the incredibly complex abstractions that a few lines of code can achieve gives it the most unpleasant reputation.
      </p>
      <p className="py-4">
        Yet the disadvantages aren&apos;t technological, they are mostly based on human nature. And so are the solutions. Projects such as Elixir, Gleam and
        even React have tried to incorporate the advantages of disliked programming environment by building up new languages, compilers, libraries and so on
        that reused the inner elements (eg Erlang&apos;s beam engine) or a majority of concepts (eg Elm). That kind of approach is very demanding, as it requires
        to build new technology which will introduce new issues, re-invent the wheel on many existing components, and absorb the technical debt of the underlying
        components.
      </p>
      <p className="py-4">
        We take a different approach: infuse <em className="text-rose-900 dark:text-rose-400">tender love & care</em> between the Haskell system and the people that
        it puts off, integrate popular peripheral technologies that haven&apos;t been connected yet, and keep improving existing tools or add new tools to the ecosystem that
        benefit a certain sector.
      </p>
      <p className="py-4">
        Why use Haskell given all the downsides?
      </p>
    </>
  }
  , {
    label: "Lightweight programming pillar: Fuddle (Elm fork)"
    , content: <>
      <p className="py-4">Elm is to Haskell what Javascript is to Java: a simpler, nimbler lightweight environment that was designed for building apps that run in a web browser. Its reliability and the speed and user-friendliness of the compiler
    are consistently noted as best-of-class. It was Facebook original candidate for everything-web, and when Facebook went
    a different way, it still inspired many elements of React.
      </p>
      </>
  }
  , {
    label: "Distributed computing: green threads, STM, Haskell Cloud, tRPC"
    , content: <></>
  }
  , {
    label: "Web Frameworks: Servant, Daniell, EasyWordy (Wordpress migrator), Hugo/Nextjs/Gatsby structures, Jinja templates, Markdown markup, Tailwind CSS, Flowbite"
    , content: <></>
  }
  , {
    label: "Package Management: Cabal, git, Repos (Fudd repo server), Tunes (Package UI)"
    , content: <></>
  }
  , {
    label: "Documentation: Sphynx, Looney style"
    , content: <></>
  }
  , {
    label: "Tutorial & Playground: iHaskell, JupyterHub"
    , content: <></>
  }
  , {
    label: "Community: Non-Profit foundation, Discord server, Twitch broadcasts, Social Networks (Twitter, LinkedIn), Stripe Subscriptions"
    , content: <></>
  }
]


function ShowAccordeon({ items } : { items : AccordeonContent[] }) {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {
        items.map((item, idx) => <div key={idx}>
          <h2 id={ "accordion-collapse-heading-" + idx } >
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={ "#accordion-collapse-body-" + idx } aria-expanded="true" aria-controls={ "accordion-collapse-body-" + idx }>
              <span>{ item.label }</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id={ "accordion-collapse-body-" + idx } className="hidden" aria-labelledby={ "accordion-collapse-heading-" + idx } >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              { item.content }
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}


export default function IntroSection() {
  return (<>
    <Navigation currentItem={"VISION"} isLogged={false} />
    <section className="p-8 text-gray-900 dark:text-gray-100">

      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Introduction</h2>
      <p>
        <b className="text-rose-900 dark:text-rose-300">FUDD</b> is an <em>ecosystem</em> for the web. It is made of:
      </p>
      <ul className="ml-4 mt-2 max-w-lg space-y-1 text-black list-disc list-inside dark:text-white">
        <li>a <span className="dark:text-rose-300">vision</span></li>
        <li>programming languages</li>
        <li>interpreters, compilers, debuggers.</li>
        <li>runtime models</li>
        <li>Web frameworks</li>
        <li>packages, versioning and repositories.</li>
        <li>documentation</li>
        <li>tutorials</li>
        <li>a <span className="text-yellow-700 dark:text-yellow-300">community</span></li>
      </ul>
      <h2 className="pt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Vision</h2>
      <p>
        The goal for the <b className="text-rose-900 dark:text-rose-300">FUDD</b> ecosystem is to provide a great environment to
        produce content and applications that will exist in the web.  More concretely, it means we are looking for a holistic solution
        that provides us with a powerful set of features:
      </p>
      <ul className="ml-4 mt-2 max-w-lg space-y-1 text-black list-disc list-inside dark:text-white">
        <li>always web-enabled</li>
        <li>always DB-enabled context</li>
        <li>transactional computations, ie the runtime context is always storable (<i>a la Smalltalk</i>)</li>
        <li>open-sourced and versioned, which implies there&apos;s also a repository system</li>
        <li>functional logic</li>
        <li>distributed computing at micro- and macro-levels</li>
        <li>bug-free coding approach</li>
        <li>user interface expressed with HTML/CSS</li>
        <li>implicit, linear and explicit memory models</li>
        <li>best-of-class access for logic expressivity</li>
        <li>always multi-media, streaming, 3D ready</li>
        <li>readily accessible, up-to-date documentation that is based on the ecosystem capabilities (web-friendly, multi-media, streamable, etc...)</li>
        <li>large amount of tutorials together with a playground environment</li>
      </ul>
      <h2 className="pt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Implementation</h2>
      <p>
        Construct a whole ecosystem from scratch will require an insane amount of resources and time.
        We have neither... so naturally we will build the <b className="text-rose-900 dark:text-rose-300">FUDD</b> ecosystem
        by first assembling existing open-source projects, evaluating how they may be lacking compared to our objectives
        and finally by evolving them through a community effort.
      </p>
      <div className="mb-6">
      </div>

      <ShowAccordeon items={ pillars } />
    </section>
    <Footer />
  </>)
}