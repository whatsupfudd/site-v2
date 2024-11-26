import Navigation from "~/components/navigation"
import Link from 'next/link'
import { CuteLink, FuddEco, NextPage } from "~/components/styling"

function CNL() {
  return (
    <span className="bold text-primary-700 dark:text-primary-400">Cannelle</span>
  )
}


function Cannelle_1() {
  return (<>
    <Navigation currentItem={"PROJECTS/CANNELLE"} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">Cannelle</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-400">Goal</h1>
        <p className="text-lg">The goal of <CNL /> is to provide a well-reflected and performant templating solution.
        </p>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Objectives</h1>
        <p>
        The CNL project objectives are:
        </p>
        <ul className="ml-6 list-disc">
        <li>Many popular templating formats support to recycle existing content,</li>
        <li>Introduces a format optimized for Fuddle and Daniell,</li>
        <li>Provides an efficient serialization method that supports all templating formats and enables caching and faster execution than source-based templates,</li>
        <li>Provides an execution model and an engine that implements it that can be used in all other projects of <FuddEco />.</li>
        </ul>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Reflecting about Templates</h1>
        <p>
        Templating is an old process to produce new items out of sketches of exiting items. A few thousand years ago, one equipped with a good collection of clay cylinders could
        pump up contracts on papyrus by inking and One could say that those almighty large language models we all praise and fear these days are just
        another kind of template, in which we drop a set of tokens in the slots and get back a statistical-driven assembly of matching tokens out.
        </p>
        <br/>
        <p>
        In the early 90s HTML shows up, and Perl scripts provide the first step in assembling content as a sequence of function calls. Sadly, that&apos;s the model that React uses today.
        The httpd and later Apache servers URL routing is directory-based, so effectively the structure of a website is its on-disk directory structure.
        </p>
        <br />
        <h2 className="text-xl mb-4 text-primary-800 dark:text-primary-300">WebObjects</h2>
        <p>
        But very quickly WebObjects appears; it is a completely different approach to content assembly. Backed by NeXT experience in advanced development tools, prototyping, object-oriented
        models for UI and database, it came from day one with the following features:
        </p>
        <ul className="ml-6 mb-4 list-disc">
        <li>Component-based architecture, with components being composable, containing both logic and content fragments,</li>
        <li>Separation of concerns, reducing the complexity of tracking logic effects between business and presentation layers,</li>
        <li>Template binary representation as a stream of serialized objects, for high performance loading and execution,</li>
        <li>Dynamic content binding that could reassign sources and sinks in different ways during content rendering, increasing component reusability and simplifying logic,</li>
        <li>Automatic creation of layouts from metadata descriptions (Direct-to-Web), eliminating all together the need for building templates,</li>
        <li>Serialization of component states at runtime, implicitely providing session management and client=server workflow synchronization,</li>
        <li>Distributed computing to spread workload and separate processing centers for quick operations and long jobs,</li>
        <li>Internationallization and adaptation to user preferences,</li>
        <li>Build/test/deploy integrated tools with high-end UI.</li>
        </ul>
        <p>
        NeXT considered WebObjects to be an entreprise product and was selling it an entry price of 50K usd, and later Apple considered it mission-critical for its online store
        and counter-productive for its App concept so it simply stopped distributing it. Unfortunately very few people ever found out what the future of web application
        development was going to look like. Most of the features introduced
        by WebObjects eventually found their way in popular frameworks like Rails, React, NextJS and Phoenix. But still today no framework delivers such an integrated set of features
        as advanced as WebObjects was doing 30 years ago.
        </p>
        <br />
        <h2 className="text-xl mb-4 text-primary-800 dark:text-primary-300">PHP</h2>
        <p>
        Instead PHP became the most popular way to build websites! For good reasons too: it was easily accessible both in terms of distribution and familiarity with scripting languages,
        one could quickly write a few <code>echo</code> calls and get the feeling the entire website was going to be finished in a few minutes, and the MySQL and Apache support meant it
        was a no-brainer way to implement a data-driven site. Like so many other, I used PHP in early 2000s to implement my startup online retail presence that grew up to the million of requests
        per day, it was getting the job done.
        <br />
        </p>
        <p>PHP runs on the simplest template concept possible: there&apos;s is some HTML content, then some logic that may or may not create additional content, some more HTML, some more logic and so on. Almost nothing is implicit:
        one has to write the code load sub-components, to extract request parameters, to build a data context (careful about the mysql timeouts!), to add content to the output stream, to build up HTTP headers
        (careful about the ordering!), to define route structures within the content, and the list goes on. But it was interpreted and immediately activated by a browser&apos;s request on the web
        server, giving that amazing instant gratification of seeing code edits be reflected into a web page with just a simple refresh. It takes much longer to work that way, but it <b>feels&nbsp;</b>
        fast.
        </p>
        <br />
        <p>Eventually some blogging platform were written in PHP and eventually one of them really took off and today over 40% of the websites in operations are running on WordPress. One of the
        reason for WordPress popularity was that it essentially removed all templating activity for casual users but for one operation: supply the content, and WordPress will put it in the middle of a webpage, and organize
        many pages automatically. But on the other side, WordPress opened the door to themes, which effectively are hierarchies of templates. Creating a clear separation and market infrastructure for
        content and theme providers is probably the essence of WordPress phenomenal success, on which it also grew a software market with its plugin architecture.
        </p>
        <br />
        <h2 className="text-xl mb-4 text-primary-800 dark:text-primary-300">React</h2>
        <p>While PHP&apos;s approach is to be an <i>&nbsp;assembly language for websites&nbsp;</i>, Ruby on Rails got some traction by introducing more high-level concepts. But it was still a
        server-side interpreted and dynamic rendering approach, which had the same issues of performance as PHP.
        </p>
        <br />
        <p>Around 2010 the JavaScript engine in browsers was fast enough to run client-side content creation logic, leading to the development of SPA frameworks like Angular, Elm, React and Vue.
        While Angular and Vue aimed for a more traditional <i>PHP-in-the-browser</i> approach to templating, Elm focused on high-level software engineering concepts such as MVC, state management
        and security through strong typing. React went simply for components, and that turned out to be the winning approach. The significant shortage of skilled software developers meant React
        implemented the solution to a latent market: an exchange of specialized components between higher-skilled developers that can write them and lower-skilled content creators that can
        aggregate them into online applications they can sell to businesses. Angular and Vue required too much software skills, Elm was for even more advanced developers... Like for WordPress,
        React was simplistic enough to be adopted by the majority of people producing web applications and then push the entire industry to work with it.
        </p>
        <br />
        <h2 className="text-xl mb-4 text-primary-800 dark:text-primary-300">NextJS</h2>
        <p>React offers nothing else of templating systems; it is simply a library that executes functions doing DOM construction/editing in the browser. This limited feature set and performance issues
        started to be painful enough that demand for a better solution started to be loud and clear. The buzz for a return to <b>fast</b> static content, for the routing management to be simpler (implicit!),
        for easy deployable sites and so on found its champion in NextJS. NextJS still use React at its core, and then adds support for themes, for directory-and-files-as-routes, for server-side
        static content rendering, etc. The success of Vercel and its NextJS framework talks for itself, it is the way to go these days for building a static website or interactive web app.
        </p>
        <br />
        <p>NextJS isn&apos;t perfect though; it is still a React-based system which runs in a Javascript engine. Writing templates means writing Typescript code, merging lots of npm modules, and being creative to
        assess the end-result is what was hoped for. React was created for client-side use, and from time to time that blows in the face of a server-side script. There&apos;s no high-level site editor,
        nor a WordPress-like overall solution. Components are just functions and thus lack higher-level structures that could provide NextJS with more context on routing, content merging strategies or caching.
        Javascript for server-side execution isn&apos;t the best technology available for performance, security or productivity, but that&apos;s the only one that runs React (and thus NextJS sites/apps).
        The distributed processing capabilities of Javascript are simplistic. You get the idea...
        </p>
        <br />
        <p>It&apos;s possible to do better!</p>
        <br />
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Building something good enough for the FUDD ecosystem</h1>
        <p>
        The <CNL /> template system can study a lot of experience to implement its objectives. We know from WebObjects how a very advanced templating system can work, or the popularity of
        themes and separation of content and layouts from WordPress, or the strenght of the component model from React. We know we want to keep it simple to support the non-technical content
        providers, and we also want to convey high-level computational concepts to be able to derive automatically as much information as possible on the template to optimize its performance
        and consistency automatically rather than relying on developers to solve these issues.
        </p>
        <br />
        <p>First <CNL /> has to support existing templating systems that have traction. That means being able to read a template in PHP, Jekyll, Jinja, Hugo, Gatsby and NextJS. It means
        to be able to understand the embedded logic of each of those template format to eventually execute it. The parsing is achieved with a mix of technologies: the Jinja templates are
        supported with the Ginger package, while the PHP, Jekyll, Hugo and React-based templates are first parsed by the TreeSitter grammars and then converted into an internal AST.
        </p>
        <br />
        <p>Then <CNL /> has to be able to store templates in post-parsed/compiled format for fast retrival and activation. The serialized template format has to provide as much information
        as possible to the runtime system, such as external resources used, events listened for and routes exposed, context parameters expected and static vs dynamic fragments of content. This
        information is extracted from a descent into internal AST representation of the template. The serialized format is derived from the Java Virtual Machine (JVM) class file binary
        format; it uses a constant pool as its central data repository where verbatim strings are compressed, multiple tables that gives quick introspection capability to the template,
        and then blocks of bytecodes that express the template logic.
        </p>
        <br />
        <p>Then there&apos;s the engine! <CNL /> defines a virtual machine (VM) that is also inspired by the JVM, but with a focus on efficient stream concatenation and a low-level data
        model and instruction set that supports both object-oriented and functional programming specifics. The VM supports also native function calls to use performant implementations of
        support libraries for the different template formats. Unlike the JVM, the <CNL /> uses 32 bits as it base size data word, which simplifies Unicode support. The VM reuses the Haskell
        garbage collection and threading models, optimized over decades.
        </p>
        <br />
        <p>Equiped with an internal AST for each template format, a compiled template format and a VM for runtime, the last piece of the equation is to transform a template&apos;s logic
        into bytecode. For this <CNL /> has a generic compiler and assembler for the VM bytecode, and a specialization of the compiler for each language in which the template formats
        express their logic. This compilation capability of each template format into the same executable model enables <CNL /> to mix and match different template formats together at runtime.
        So for example a partial template written for Hugo can be used in a PHP template, and vice-versa, as long as the data required from the different templates is compatible.
        </p>
        <br />
        <p>Interestingly, <CNL /> internal AST representation provides a node identification and serialization feature. This identification support means that nodes can be annotated or trees
        can be compared to do logic analysis and build automatic code conversion. EasyWordy uses that feature to do gradual conversion of PHP to Haskell/Fuddle code.
        </p>
        <br />
        <p>The <CNL /> template system is a strong base for recycling existing content and integrating it into new projects. But that is just the starting point for the FUDD ecosystem.
        </p>
        <br />
        <h2 className="text-xl mb-4 text-primary-800 dark:text-primary-300">Extending <CNL /> capabilities</h2>
        <p>
        A modern and powerful templating system should be everything WebObjects was able to provide 30 years ago, and then some! To get there <CNL /> needs to be much more than just compatible
        with popular template formats. It needs to support implicit routing definitions, distributed computing, adaptable client- and server-side computing depending on operating targets,
        internationalization and personalization. This is where the Fuddle extensions come to play.
        </p>
        <br />
        <p>Fuddle is an fork of the <Link href="https://elm-lang.org/"><b>Elm</b></Link> language and runtime framework. Elm code is compiled to JavaScript for execution, and the Elm runtime expects for the most to run in a
        browser, ie Elm applications are client-side applications. Elm is a great piece of technology and well respected amongst the development community, having in fact inspired many other frameworks,
        React included... but it is rarely used for a variety of reasons.
        The most cited issues with Elm are that the project hasn&apos;t evolved since 2019 and that Elm rigourous rules for bug-free code is too opiniated for casual applications.
        Fuddle brings in some needed modernization to Elm, and removes some constraints so that many more situations can be tackled with Fuddle code. It also harmonizes a few details in
        Elm&apos;s syntax that lead to frustrations when switching between Haskell and Elm; Fuddle code can be copy-pasted into Haskell code and run.
        </p>
        <br />

        <p>
        <CNL /> brings in all the previously mentioned features to Fuddle templates. Amongst other things, it means that Fuddle code can run in the <CNL /> VM rather than as JavaScript. That frees Fuddle
        templates from requiring a JavaScript engine to execute.
        </p>

        <p>
        There are 3 kinds of Fuddle templates. The first kind is the classic embedded logic one like in PHP, Hugo and Jekkyl templates, using the <code>&#123;&#123;</code> and <code>&#125;&#125;</code> syntax
        to switch between verbatim HTML and executable content.
        </p>

        <p>
        The second kind is a much simplified approach to writing HTML based on Elm Html and Attributes libraries. In a conventional Elm application
        the content description is in fact a module with multiple function calls like in React. This it will be executed at runtime to create a DOM. In the second kind of Fuddle templating format,
        the VM does an immediate execution of all the HTML functions that are used in a static context to create the fragments of text that will be stored in the template binary format. This
        implements server-side rendering in a very effective and problem-free manner given the underlying advanced typing, immutability and decidability of Fuddle. So a Fuddle template in this
        format will look like:
        </p>
        <br />
        <pre><code>body [ class &quot;text-primary-700 dark:text-primary-300&quot; ] [</code></pre>
        <pre><code>  div [ class &quot;p-4&quot; ] [</code></pre>
        <pre><code>    i [] [ text &quot;Some text in italics.&quot; ]</code></pre>
        <pre><code>  ]</code></pre>
        <pre><code>]</code></pre>
        <br />
        <p>
        As this contains no dynamic code, it will just become a single compact block of text in the compiled template. But even when using components in the template code, if Fuddle can
        detec that the components aren&apos;t using dynamic code, it will still convert the logic into a single block of text, as when the <code>defaultFormats</code> is used, a function that
        doesn&apos;t depend on any runtime context:
        </p>
        <br />
        <pre><code>body defaultFormats [</code></pre>
        <pre><code>  div [ class &quot;p-4&quot; ] [</code></pre>
        <pre><code>    i [] [ text &quot;Some text in italics.&quot; ]</code></pre>
        <pre><code>  ]</code></pre>
        <pre><code>]</code></pre>
        <br />
        <p>
        When a runtime dependant context is detected, the static logic before and after the dynamic function will be transformed into compact blocks of text so that only the dynamic code
        is actually executed at runtime and efficiently concatenated into the result stream. For example:
        </p>
        <br />
        <pre><code>body defaultFormats [</code></pre>
        <pre><code>  div [ class &quot;p-4&quot; ] [</code></pre>
        <pre><code>    i [] [ someContextualMessage ]</code></pre>
        <pre><code>  ]</code></pre>
        <pre><code>]</code></pre>
        <br />
        <p>
        Assuming that the function <code>someContextualMessage</code> is relying on a dynamic value,
        the Fuddle template will result at runtime in the concatenation of a compact block of text that ends with the <i>italic</i> elment,
        the result of calling the <code>someContextualMessage</code> funciton and another compact block of text that starts with the closing of the <i>italic</i> element.
        </p>
        <br />
        <p>
        The third Fuddle template format uses a short-hand notation to augment content with simple logic, such as variable dereferencing or simple if/then/else control on
        blocks of verbatim content. This is mostly used in code templates, such as Haskell project templates that are in fact a hierarchy of directories with code blocks that
        get assembled from a few configurations, like the <code>stack new</code> feature.&nbsp;<CNL /> only supports a single template parsing and rendering, Daniell is the
        tool that takes care of understanding a full hierarchy and processing it logically to obtain a complex final result.
        </p>
      </section>
    </div>
  </>)
}


export default Cannelle_1;
