import Navigation from "~/components/navigation"
import Footer from "~/components/footer"

import { ShowImplementation } from "~/components/implItems"
import { CuteLink, FuddBrand, FuddEco } from "~/components/styling"

export default function ImplementationPage() {
  return (<>
    <Navigation currentItem={"IMPLEMENTATION"} isLogged={false} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">IMPLEMENTING FUDD</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Objectives</h1>
        <p>
          The <FuddEco /> is for implementing web applications. It is made of:
        </p>
        <ul className="ml-4 mt-2 max-w-lg space-y-1 text-black list-disc list-inside dark:text-white">
          <li>a <CuteLink href="/concepts">vision</CuteLink> to drive the selection of components and development processes,</li>
          <li>a <CuteLink href="https://discord.com/whatsupfudd">community</CuteLink></li>
          <li>tutorials</li>
          <li>documentation</li>
          <li>some programming languages</li>
          <li>IDEs</li>
          <li>interpreters, compilers, debuggers</li>
          <li>runtime models</li>
          <li><i>Web</i> frameworks</li>
          <li>packages, versioning and repositories.</li>
        </ul>
        <h1 className="text-3xl pt-10 pb-4 text-primary-700 dark:text-primary-400">Selection criteria</h1>
        <p className="mt-5">
          Based on the vision for an ecosystem that cathers to the needs of web developers as we move into a world where
          spatial computing and powerful AI services become mainstream, we have made some initial decisions on what
          makes up the significant components of <FuddBrand />.
        </p>
        <p className="mt-5">
          First, the elephant in the room: what kind of programming language should we use? We don&apos;t expect that
          developers that will be using <FuddBrand /> will be intimidated by the more complex languages that provide
          type safety, distributed execution, advanced logical concepts and so on. We also want to work in a context that is
          logically efficient, where different kind of programming situations can be tackled by the most appropriate syntax and/or
          programming model. We want to have both the performance of compiled code and the simple and immediate feedback
          of interpreted code usable as required. Finally we want a great mix of maturity and ongoing innovation, giving us
          both a solid base to rely on and access to new features that respond to the trends of the industry.
        </p>
        <p className="mt-5">
          Given that Javascript is a fundamental component of the web applications, it must be part of the equation. However
          Javascript is too simplistic and error-prone to deliver the main features of <FuddBrand />. So we&apos;ll consider Javascript as the
          low-level component of our ecosystem, ie we&apos;ll think of it as the assembly language of the web and use more advanced
          languages to generate it.
        </p>
        <p className="mt-5">
          After a long deliberation, we have decided to use Haskell as the core language for <FuddBrand />. On the positive side,
          Haskell has gone through decades of reflection and improvement in the lab before hitting the mainstream, providing a very
          strong foundation for handling complex logic and data manipulation. It has the best type system in the industry, which
          provides a lot of information for automatic tools and AI aided code generation validation. Very importantly Haskell is
          extensible in many ways, supporting domain-specific syntax that respond to the desire to use the most efficient expression
          of logic. The code generated by the GHC compiler is very efficient and enables many different strategies for optimization,
          memory management and distributed execution. Finally Haskell can run both in interpreted and compiled mode, and can be
          transpiled into Javascript to fit in the web environment.
        </p>
        <p className="mt-5">
          On the negative side, Haskell is not such a popular language. Given its large amount of features and its stronly functional
          programming model, developers that don&apos;t have a good background in in computer science have a harder time learning it. The
          large amount of people involved in reserach that use Haskell has generated a lot of libraries that are very advanced and powerful,
          but aren&apos;t well documented and require serious reflection to understand. As Haskell is in very active development,
          keeping up with the latest features and best practices is a challenge. Finally the long gestation period of Haskell in the
          academic circles has given it a reputation for not being practical in the real world.
        </p>
        <p className="mt-5">
          To ease the shock of having Haskell as the core language, we&apos;ve decided provide a fork of the Elm language as the
          solution for scripting and getting experience in functional programming. While Elm is already a very good language
          that gets compiled into very efficient Javascript and is especially powerful for client-side development, inspiring
          many of the current trends in web development. Unfortunately it has lost its way in the last few years and the
          development of the compiler has stalled. We&apos;ll move it forward in a project called Fuddle. Fuddle will keep the
          simplicity of Elm, but we&apos;ll improve its client-side DOM management system, open it to the rest of the Javascript
          world, add more support for server-side programming, and make the packaging and deployment of Elm applications more
          flexible.
        </p>
        <h1 className="text-2xl pt-10 pb-4 text-primary-700 dark:text-primary-400">Stuff</h1>
        <p className="mt-6">
          The first concept to achieve this goal is go the functional way, reduce the amount of
          syntax and enable embedded specialized extensions for different kind of situations, such as
          SQL for data manipulations, HTML for web, and so on.
        </p>
        <p className="mt-6">
          The second concept is to strike a good balance between not reinventing the wheel, but not
          getting stuck with the status quo either. This means that FUDD builds on powerful and mature
          technologies, and extends them to provide a more advanced and easier to use experience. The
          underlying implications is that the ecosystem will evolve significantly, and finding the right
          balance between incorporating existing solutions and creating new ones is an art that will
          require a strong interaction with the community.
        </p>
        <p className="mt-6">
          The third concept is to take advantage of the AI technologies to offer as much knowledge and
          training material as possible to the developers. The ecosystem must also provide tools to
          generate ample tutorials, examples and reference documents that are up-to-date, interesting and interactive.
        </p>
        <br />
        <br />
        <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-400">Components</h1>
        <p>
          The FUDD ecosystem core components are evolved from best-of-breed mature technologies. They
          include:
        </p>
        <ul className="mt-5 list-disc pl-5">
          <li>the Elm language as the basis to create UI logic and do scripting,</li>
          <li>the Servant framework (Haskell) for backend web services,</li>
          <li>the Hugo, Gatsby and Next.js folder and file structures for describing websites,</li>
          <li>the Hasql framework (Haskell) for embedded SQL</li>
          <li>the Wordpress CMS structures for describing editable websites,</li>
          <li>the TailwindCSS framework for styling HTML,</li>
          <li>the Jupyter notebook and IHaskell runtime for providing interactive tutorials.</li>
        </ul>
        <ShowImplementation />
      </section>
    </div>
    <Footer />
  </>)
}