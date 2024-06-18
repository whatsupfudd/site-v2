import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import { CuteLink, FuddEco, InitialImage, NextPage } from "~/components/styling"


export default function ConceptsPage() {
  return (<>
    <Navigation currentItem={"CONCEPTS"} isLogged={false} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">CONCEPTS</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-400">Goal</h1>
        <p className="text-lg">The goal of the <FuddEco /> is to provide a
          new level of power, friendliness and ease of development to a large
          amount of developers that will still be coding as we embark in the generative-AI era.
        </p>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Assumptions</h1>
        <p>
          The following assumptions on the near-term conditions for digital content and applications
          drive the development of the <FuddEco />:
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>almost constant Internet connectivity (<CuteLink href={"https://www.starlink.com/"}>StarLink!</CuteLink>),</li>
          <li>most typical UI implementation is with HTML/CSS (typeset interactive documents),</li>
          <li>fine-grained distributed computing being the standard logic execution approach,</li>
          <li>high interactivity for all kinds of digital media,</li>
          <li>overall gamification of digital content & applications (<CuteLink href={"https://www.imdb.com/title/tt1677720/"}>metaverse</CuteLink>),</li>
          <li>aided code generation by large language models (statistical coding),</li>
        </ul>
        <p className="mt-5">
          Let&apos;s look at the big picture first. We are increasingly going toward a world where we have a constant-on and evolving
          artificial reality layer on top of our physical environment. Today it means most people stuck on their smartphone and a happy
          few wearing an Apple Vision Pro. While the following <CuteLink href="http://hyper-reality.co/">Hyper-Reality</CuteLink> short-film
          unfortunately gives a distopian version of that future, it&apos;s nonetheless a good starting point to reflect on what the assumptions imply.
        </p>
        <div className="py-5 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YJg02ivYzSs?si=o6zlYWdnQ7fYbZOp"
            title="Hyper-reality" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
        </div>
        <p>
          We see a lot of 3D and physical-world aware content, highly integrated heteregenous streaming data (Gelernter&apos;s Lifestreams!),
          dynamic simulations (AI personas), a lot of synchronized interactivity and the incredible importance of securit and
          privacy. Forgetting the price of the Vision Pro and battery capacities, we have today the hardware technology to basically
          make that world happen. But now imagine the incredible difficulty of developing a secure, reliable and constantly evolving version of
          the application environment shown in that video using React, Node.js, Mysql, etc so that billions of users don&apos;t end up in the same kind
          of digital criminal nightmare. The <FuddEco /> aims to provide an answer to that challenge by taking a high-level view of the issues and
          limitations of current technologies and assembling an integrated solution that is powerful, easy to use and is welcoming evolution.
        </p>
        <h2 className="text-2xl mt-6 text-primary-700 dark:text-primary-400">Constant Connectivity</h2>
        <InitialImage src={"/img/continuousConnectivity.jpg"} alt={"Continuous Connectivity"} />
        <p className="mt-5">
          The evolution of high-bandwidth networking availability at all time
          means that up-to-date information is becoming an expectation, and that intermittant update cycles for
          native apps are increasingly an annoyance for the users as well as for the app maintainers. Similarly
          to how streaming services have killed the offline content model (remember DVDs and iPods?), applications
          life cycle will transition to continuous updates, which is pretty much the case for web applications already.
          The question is then: what will be the advantage of developing a native app rather than a web app?
          Maybe the answer is: UI implementation and runtime performance? Let&apos;s reflect a bit more...
        </p>
        <h2 className="text-2xl mt-6 text-primary-700 dark:text-primary-400">Dynamic Hypermedia Markup</h2>
        <InitialImage src={"/img/dynamicHypermedia.jpg"} alt={"Dynamic Hypermedia"} />
        <p className="mt-5">
          When the NeXT computer came out, the main selling point that Steve Jobs would pitch was how easy it was
          to create a UI with Interface Builder. Indeed nothing on the market was so powerful for drawing UIs
          that were both beautiful and functional. The same advantage carried on to the Mac after the NeXT acquisition,
          and eventually to the iPhone and iPad. Interestingly, Steve Jobs had been putting a lot of importance to that
          aspect of the NeXT platform because he was strongly inspired by the Dynabook, a concept where content and
          UI elements were merged. After eventually achieving the mobile computing dream with the iPhone, Jobs continued
          its Dynabook vision by transitioning the IT consumer market from the expensive desktop software model to the
          App Store one, essentially ending Microsoft&apos;s lock on the software industry through the association with the
          single music track model, ie a piece of unexpensive and small-bite content that one buys and discards very easily.
        </p>
        <p className="mt-5">
          While the Web created a huge shift on the consumer access to data and application, the momentum of the App Store
          created a period of reduced interest on browser-based stuff. During that time the WebKit-based browsers became the
          standard for mobile and desktop browsing, and probably the main focus of development activity for the web were
          Gmail and the Google productivity suite, Wikipedia, Wordpress. That period of focus and feature consolidation with
          HTML5, CSS3 and JavaScript has actually been very beneficial. By 2015 the web apps had both a powerful and consistent
          model for content and UI, together with a standard logic execution system (JavaScript).
          At this point the rate of adoption of web apps on mobile and the blurring between content and UI indicates that an
          application is indeed becoming first and foremost a piece of content (elegant, descriptive, magazine-like) that is
          highly interactive and natural language-dense, and not an independant piece of UI that is just buttons, forms
          and alert panels.
        </p>
        <p className="mt-5">
          Going back to the question of native app advantage: it is becoming irrelevant, and so is the App Store and its payment monopole (Stripe anyone?).
          The web app model is the way to go, with a priority on
          mobile devices as the desktop support will easily follow. The significant increase in the complexity of
          the ecosystem for designing, implementing, maintaining and innovating on web apps calls for the <FuddEco /> to
          exist.
        </p>
        <h2 className="text-2xl mt-6 text-primary-700 dark:text-primary-400">Fine-Grained Distributed Computing</h2>
        <InitialImage src={"/img/distributedComputing.jpg"} alt={"Distributed Computing"} />
        <p className="mt-5">
          This is a big one. Ancient developers will remember the CORBA and DCOM technologies, which were early attempt to implement a distributed
          computing model. Probably some may have heard of the Connection Machine, the original massively parallel computer that was super-hyped
          during the previous AI craze but eventually pettered out. The first real winner in distributed computing was the HTTPD/Ajax/CGI combo,
          which was much simpler to understand and work with. But that simplicity also meant that
          the distribution of processing stayed very coarse which in turn led to much duplication, confusion and inefficiency.
          REST and GraphQL added some structure, but neither of them provided the required
          innovation to improve much the distribution of logic execution. Htmx, (t/g)RPC and Phoenix/Liveview have added some
          elements to the distribution of logic execution, but neither is a game changer.
        </p>
        <p className="mt-5">
          The reality is that parallel processing, the essence of distributed computing, is still poorly understood by computer scientists. Perhaps the
          most promising work on that topic is <CuteLink href={"https://en.wikipedia.org/wiki/Jean-Yves_Girard"}>Jean-Yves Girard&apos;s</CuteLink>
          <CuteLink href={"https://en.wikipedia.org/wiki/Linear_logic"}>Linear Logic</CuteLink> (LL). Girard came up with LL in the
          mid-80&apos;s, trying to find peace with the idea that if effectively <i className="text-yellow-700 dark:text-yellow-300">3 + 3 = 6</i>, we should feel that we only need to write either&nbsp;
          <i className="text-yellow-700 dark:text-yellow-300">3 + 3</i> or <i className="text-yellow-700 dark:text-yellow-300">6</i> but not both. But as intuitively writing both sides of the equation feels like the right thing to do,&nbsp;
          <i className="text-yellow-700 dark:text-yellow-300">3 + 3</i> must not be perfectly equal to <i className="text-yellow-700 dark:text-yellow-300">6</i> and something is missing in the underlying logic.
          The deep insight is that until logic can account for space and time, parallel processing is not happening! Girard&apos;s Linear Logic ideas eventually showed the way to the designers
          of Rust on how to implement a memory model with the advantage of a garbage collector but without the performance issues.
        </p>
        <p className="mt-5">
          Why that detour on Girard and LL? The incredible importance of Girard&apos;s contribution to the field of computer science is worth mentioning!
          But also LL is still far from complete, and if
          top experts in fundamental computer science haven&apos;t figured it out yet the right way to express distributed computing and parallel
          processing correctly, we have to be realistic about what can be achieved in FUDD. Based on the current state of Linear Logic, we expect to be
          able to address critical issues that bother web application developers consistently and impeed their productivity and provide strong solutions for:
        </p>
        <ul className="pl-6 pt-2 list-disc">
          <li className="pl-1">hiding the transport mechanisms of logic and content (data) between the clients and servers used
            in the processing -- networking -- rendering -- reacting cycle,
          </li>
          <li className="pl-1">having consistancy between client and server-side logic expression, so it can be expressed, analyzed and used anywhere
            in the computing fabric,</li>
          <li className="pl-1">expressing state and event management (reactivity) and their modular utilization in logic and dynamic content (UI),</li>
          <li className="pl-1">automatizing the overall synchronization of work units (prioritizing, spawning, waiting, joining).</li>
        </ul>
        <p className="mt-5">
          Technologies that try to tackle these issues aren&apos;t integrated nor provide a powerful enough solution to become standard pillars.
          Think of GraphQL, Golang goroutines, Redux, Nextjs SSR, Vercel Edge, etc. There needs to be a high-level model that looks at the end-user
          device input/output as one of two ultimate synchronization layers of the computing fabric, the other being secure snapshots of app/content
          states. Between these two layers, there is in-device and cloud-based CPUs with
          variable amounts of CPU and memory, heteregenous networking bandwidth and latency, multiple database engines and storage, streams of data, static content
          that maybe cache or not; these can be thought of as a great graph of resources and data flows.
        </p>
        <p className="mt-5">To reach its goal, the <FuddEco /> must provide a consistent and comprehensive framework that developers can use to achieve optimal results on both ultimate layers while expressing logic easily.
          That means not bothering
          the developers with underlying protocols and transport mechanisms, having duplicated or incompatible client vs server side logic, managing complex states
          and events reactions, optimizing asynchronous operations and varying latencies to improve time to first byte.
        </p>
        <h2 className="text-2xl mt-6 text-primary-700 dark:text-primary-400">Highly Interactive Content</h2>
        <InitialImage src={"/img/interactiveContent.jpg"} alt={"Interactive Content"} />
        <p className="mt-5">
          The average computer has at least 99% of its electronic components idle at any given moment. This obscene
          waste is simply due to the overwhelming amount of sleepy RAM that serves as temporary storage area for the
          only active element, the CPU. Daniel Hillis frustration with this situation led him to design the Connection Machine,
          in which he added tens of thousands of elementary processors to the RAM chips, increasing the overall processing
          capability by many orders of magnitude and leading the way to Xilinx and Nvidia.
        </p>
        <p className="mt-5">
          Looking at the typical web application, there&apos;s a similar level of waste. Taking the&nbsp;
          <CuteLink href="https://en.wikipedia.org/wiki/List_of_most-visited_websites">top websites in the world</CuteLink>&nbsp;
          and looking at the typical web page (ie, the UI-content mix), we see that the vast majority of content is one-way non-interactive. We are
          effectively back in the broadcast model, in front of a TV set-top box with the basic remote control: change channel (hyperlinks),
          speed up / slowdown the content (forward/rewind/scroll), and pause.  Ok, there&apos;s also a &quot;like&quot; feedback button, a huge innovation! The biggest interactivity
          element is the text box that lets us hit the world with our worse thoughts, appropriately peppered with emojis.
        </p>
        <p className="mt-5">
          The&nbsp; <CuteLink href="https://en.wikipedia.org/wiki/Memex">original idea</CuteLink>&nbsp; of the hyper-stuff (media, link, text, etc) was to increase dramatically the interactivity of the content, to enable the content consumer
          to evolve the structure and increase the information in a N-way conversation amongst themselves, the sources of information and other interested parties.
          Many implementations of that idea came about, such as Xanadu, Hypercard, the Dynabook and SCORM. But it is the Web, with the&nbsp;
          <CuteLink href="https://www.loc.gov/preservation/digital/formats/fdd/fdd000465.shtml#:~:text=SGML%20was%20adapted%20from%20IBM&apos;s,initials%20of%20the%20three%20surnames.">SGML markups</CuteLink>,
          the CSS styling, the JavaScript programming and the HTTPD transport that has established an effective base implementation for the hyper-stuff.
          But the complexity of the interaction model in the current Web is still too high to open up the way to highly interactive content.
        </p>
        <p className="mt-5">
          The <b>Hyper-Reality</b> video gives a preview into the evolution of the UX/UI that the development of spatial computing will likely bring.
          As AR and immersive devices progress, the end-user expanded reality will be filled by streams of different kind of media modulated by the
          surrounding environment, the end-user reactions, the sponsored marketing and a few more sources. It is very difficult to imagine implementing
          such a cooperative (if competitive) organisation of dynamic content if there isn&apos;t more advanced and high-level structural and event propagation
          models to achieve the interactivity amongst all content elements.  The current organisation approach is still the windowing system: visual
          rectangular areas on the screen (either windows or popups) that define the context of content and interaction. It is clear that there needs to
          be mechanisms for cooperative computing across content, but the <em>Share button</em> solution provided by iOS and Android OS is too simplistic
          to be the answer. History repeats and the Web has a significant advantage: contrary to the OS, the open nature of the content and computing model within the browser
          context enables anyone to provide new solutions and doesn&apos;t need to wait for either Apple or Google to figure it out.
        </p>
        <p className="mt-5">
          Mathematica and then <CuteLink href="https://docs.jupyter.org/en/latest/#what-is-a-notebook">Jupyter Notebooks</CuteLink> have lead the path to more interactive content model. The mix of data and code into dynamic cells that
          imply a computing capacity and interpretative logic for content units provides some important features for highly interactive content. The
          <FuddEco /> must foster such approach by using it for its own documentation, and by providing the necessary tools that facilitate and accelerate
          the creation, hosting and expansion of interactive documents.
        </p>
        <h2 className="text-2xl mt-6 text-primary-700 dark:text-primary-400">Gamification</h2>
        <InitialImage src={"/img/gamification.jpg"} alt={"Gamification"} />
        <p className="mt-5">
          The gamification theme is
          very typical in the HR and education sector, and it is expanding to other sectors as well. In practice it is rarely actually implemented
          and adding a graphic or a sound effect to a button is often the extent of the effort. The main idea behind gamification is that people are
          more engaged and more likely to gain from an experience if they are having fun, and by definition gaming is a fun activity therefore it is
          the way to go. But adapting content to a game or vice-versa is in general a complex effort, and thus the gamification work is often reduced
          to adding the most rudimentary game elements, which are not fun at all by themselves. Taking the definition from the very entertaining field of&nbsp;
          <CuteLink href="https://en.wikipedia.org/wiki/Game_theory">Game Theory</CuteLink>, we can consider that
          gamification establishes a strategic interactions amongst rational agents. That supposes there will be a gain or a loss for the agents, and human
          nature makes sure that people will get involved if they see a path to winning something they value, or they can foresee being entertained while
          trying to do so. Taking that as a more precise goal for gamification, the <FuddEco /> must provide the solutions for developers and content
          providers to increase the enjoyment of people&apos;s interaction with their work by adding strategic frameworks and entertaining elements that lead
          to winning something, also meaning that there will be scoring, benchmarks and all other items that indicate to people they are improving and
          getting closer to a successful outcome.
        </p>
        <p className="mt-5">
          For the <FuddEco /> to provide a proper support to gamification, it must have the following features:
        </p>
        <ul className="pl-6 py-1 list-disc">
          <li>increasing levels of complexity,</li>
          <li>rules and strategies,</li>
          <li>individual scores and statistics,</li>
          <li>sessions and their underlying elements,</li>
          <li>combined versioning,</li>
          <li>complex environments (virtual worlds),</li>
          <li><CuteLink href={"https://en.wikipedia.org/wiki/Intelligent_agent"}>virtual agents and referees,</CuteLink></li>
          <li>recording, access and playback of sessions.</li>
        </ul>
        <p className="mt-5">
          On one side it is a very complex set of features, but on the other side it is a great motivator to integrate many other concepts that drive
          the <FuddEco /> development to build a significantly differentiated offering.
        </p>
        <h2 className="text-2xl mt-6 text-primary-700 dark:text-primary-400">AI statistical coding</h2>
        <InitialImage src={"/img/statisticalCoding.jpg"} alt={"Statistical Coding"} />
        <p className="mt-5">
          Natural intelligence is still a mystery, so it feels safe to say that large language models are the
          best technology for AI that we&apos;ll have to aid the software development process for the foreseable future.
        </p>
        <p className="mt-5">
          Just for fun, Copilot suggested the following text for the next paragraph as I started writing it:
        </p>
        <blockquote className="mt-3 border-l-4 border-primary-200 pl-4">
          The main advantage of AI statistical coding is that it can provide a lot of help to the developer in
          creating the logic and content of the application. The main disadvantage is that it can provide a lot of
          help to the developer in creating the logic and content of the application. The main challenge is to
          provide the right amount of help to the developer in creating the logic and content of the application.
        </blockquote>
        <p className="mt-5">
          The purely statistical nature of LLM means its support to the development process lacks the logical consistency
          that is required to create complex applications that are bug-free and meeting the specs.
          Instead we observe that hallucinations, surprisingly elementary errors and a lack of creativity limit their
          application to simple situations.
          But as the state of software development today still implies a lot of simple boiler-plate situations that
          elementary skilled developers easily learn and apply (<i>copy-pasta!</i>), it&apos;s likely that AI generative coding
          will automatize these jobs in the
          near future with similar results in coding quality. It also means that experienced and highly skilled developers
          will have more freedom to focus on big picture and innovative elements of applications. And importantly, they will
          be able to work on more advanced environments as the leveling towards the bottom that is required today to be
          compatible with the mass of elementary skilled developers won&apos;t be necessary anymore.
        </p>
        <p className="mt-5">
          It also means that being a junior developer will not mean anymore that you are a unskilled developer, but
          that you haven&apos;t had much time in the workforce. The general ability for junior developers to work with
          advanced tools, algorithms and systems will significantly increase, as this will be the only way to compete
          with the AI aided coding.
        </p>
        <p className="mt-5">
          The <FuddEco /> needs to provide as much support for AI aided coding as possible, while providing the
          advanced developers with equivalently advanced tools and technologies that will enable them to
          create quickly the next generation of web applications and related content.
        </p>
      </section>
      <NextPage destination={"/implementation"}>Implementation</NextPage>
    </div>
    <Footer />
  </>)
}