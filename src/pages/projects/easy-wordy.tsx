import Navigation from "~/components/navigation"
import { CuteLink, FuddEco, NextPage } from "~/components/styling"

function Ewb() {
  return (
    <span className="bold text-primary-700 dark:text-primary-400">EasyWordy</span>
  )
}


function EasyWordy_1() {
  return (<>
    <Navigation currentItem={"PROJECTS/EASYWORDY"} />
    <section className="px-4 text-black dark:text-white">
      <h1 className="text-4xl text-center py-4 text-rose-900 dark:text-rose-400">EasyWordy</h1>
      <h2 className="text-xl text-center pb-4">Escape the Wordpress jail gradually</h2>
      <p className="px-6 py-3">
      The EasyWordy project provides an evolution path out of WordPress into more advanced and secure web site applications and content presentation.
      </p>
      <p className="px-6 py-3">
      It is achieved by embedding a PHP interpreter into a highly verifiable web server. The web server itself is based on the Servant package, and it is developed using the Haskell language.
      </p>
      <p className="px-6 py-3">
      The core functionality of Wordpress is re-implemented in Haskell, which provide a base on which Wordpress themes and plugins can be added just like in the conventional Wordpress. This enables current Wordpress users to do a no-effort dropin of EasyWordy into their environment and then start using more powerful and less error-prone logic to evolve their web site.
      </p>
    </section>
  </>)
}

function EasyWordy_2() {
  return (<>
    <Navigation currentItem={"PROJECTS/EASYWORDY"} />
    <div className="py-8 flex justify-center flex-col text-black dark:text-white">
      <h1 className="mt-4 text-4xl font-bold text-center">EasyWordy</h1>
      <section className="max-w-screen-xl px-10 py-8 md:px-15 lg:px-20 text-lg">
        <h1 className="text-3xl pb-4 text-primary-700 dark:text-primary-400">Goal</h1>
        <p className="text-lg">The goal with <Ewb /> is to provide a solution for all these people that have started
          on WordPress and that would now like to evolve to a more advanced CMS, delivery and application ecosystem.
        </p>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">WordPress: a giant on the web</h1>
        <p>
          WordPress has achieved a dominant position on the web, both in terms of content creation and operation of websites.
        </p>
        <br/>
        <div className="sm:block md:flex lg:flex">
          <div>
            <p className="align-left mr-4">Over 40% of all websites in the world are running out of a WordPress installation.
            </p>
            <p className="align-left mr-4 mt-3">When looking only a CMS-based websites, WordPress takes a 60% market share. In the last decade, it&apos;s also telling that the proportion of websites that aren&apos;t using a CMS went from 68% to 30%.</p>
          </div>
          <img className="rounded-lg sm:max-w-screen sm:mx-auto md:max-w-2xl lg:max-w-2xl" src="/img/projects/easywordy/cms-historical-market-share-statistics.png" alt="WordPress Market Share History" />
        </div>
        <br/>
        <br/>
        <p>The reasons for the popularity of WordPress are:</p>
        <ul className="space-y-1 list-disc list-outside ms-8">
          <li>integral personalization capability with <b>themes</b>, leading to a catalog that is now in the tens of thousands of options.</li>
          <li>integral feature extension capability with <b>plugins</b>, with a catalog of ten of thousands of plugins, amongst which are WooCommerce for online retailing, Yoast SEO for search-based marketing and Akismet for spamming control.</li>
          <li>the ease of installing PHP and MySQL that WordPress runs on, meaning the simplest of laptop is all one needs to start creating content or developing extensions.</li>
          <li>the low learning curve of PHP, a template-based interpreted scripting language with dynamic typing, meaning any hobbyist can quickly get to a <i>hello-world</i> result and be encouraged to continue working on themes and plugins.</li>
          <li>the many hosting providers that have built managed WordPress instances that enabled non-technical people to build large-scale solutions without getting in the technical details of content delivery.</li>
        </ul>
        <br/>
        <p>Yet WordPress is not a perfect solution! Amongst the top complaints issues that have emerged, we see:</p>
        <ul className="space-y-1 list-disc list-outside ms-8">
          <li>there are many security issues due to the ease of making bugs in PHP.</li>
          <li>the design of WordPress, PHP and MySQL aren&apos;t especially efficient, and scaling a WordPress-based website incur costs that are much better managed with other technologies.</li>
          <li>integrating modern web technologies like React/NextJS, Rust and so on isn&apos;t natural in WordPress, usually leading to either sticking to the error-prone and simplistic PHP or rebuilding everything in a different tech stack.</li>
        </ul>
        <br/>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Growing out of WordPress</h1>
        <p>Two important trends have emerged around 2022: both the growth of WordPress use and of CMS in general has stalled. Why is that?
        </p>
        <br/>
        <p>We think the following factors are at play:
        </p>
        <ul className="space-y-1 list-disc list-outside ms-8">
          <li>The COVID effect that has pushed retailers to transition to online commerce is now being absorbed negatively as the growth rate reverts to its mean.</li>
          <li>The <i>native mobile app</i> as an alternative way to distribute content also took a piece of growth.</li>
          <li>The pure textual content websites (blogs, homepages) have turned to <i>cooler</i> video-based format and thus have takend some growth toward Youtube and TikTok, and also to image-based social media (FB, Instagram, etc).</li>
        </ul>
        <br/>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Why is this important?</h1>
        <p>In 2024, there were 250K new websites created every day, and over 80M existing active WordPress installations <CuteLink href="https://siteefy.com/how-many-websites-are-there/"><u>(siteefy)</u></CuteLink>. Being able to provide a path toward an improvement over WordPress base technology stack given its enormous market share can do wonder for the web, both economically and technically.
        </p>
        <br/>
        <p>There is a lot of information about how low webpage load, security breaches and limited UI and UX impact negatively the economics of online commerce (eg, <CuteLink href="https://www.forbes.com/advisor/business/software/website-statistics/">this Forbes&apos; article</CuteLink>). The AI revolution, the main buzz of the day, is likely to have a big impact on content creation. But until the basic issues of security, reliability, performance and technology expansion of the WordPress ecosystem are resolved, the critical elements of commercial activity online aren&apos;t going to change much.
        </p>
        <br/>
        <p>The next videos narrated by Matt Billmann are full of great insights on the way the WordPress core design leads to all kind of issues and the way new web technology is able to move beyond them. Note that they are almost a decade old and still very relevant...</p>
        <br/>
        <div className="sm:block md:flex lg:flex">
          <div className="align-left">
              <iframe width="300px" height="200px" loading="lazy" data-lazyiframe="" src="https://player.vimeo.com/video/163522126?title=0&amp;byline=0&amp;portrait=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen={false} title="Mathias Biilmann Smashing Conf 2016 talk video: The New Front-End Stack"></iframe>
          </div>
          <div className="p-4"></div>
          <div className="align-right">
            <iframe width="300px" height="300px" src="https://www.youtube.com/embed/rB4Cl5LSe2c" title="Moving Smashing Away from WordPress" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}></iframe>
          </div>
        </div>
        <br/>
        <p>As a balance to the JAMstack philosophy, also interesting to look at this <CuteLink  href="https://lichess.org/">Lichess</CuteLink> case study, a online chess playing website which is very focused on the UX and server-side rendering rather than client-based rendering as in JAMstack. No technology is perfect, it&apos;s the proper approach for a given situation that makes the make or break of a technology.
        </p>
        <iframe className="mt-4" width="300px" height="300px" src="https://www.youtube.com/embed/7VSVfQcaxFY" title="How 1 Software Engineer Outperforms 138 - Lichess Case Study" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}></iframe>
        <br/>
        <p>There are many solutions that try to compete with WordPress using modern web technology, but they have so far barely taken any momentum as they must also provide the very large amount of themes and plugins that are already available in the WordPress ecosystem to present a worthy alternative.
        </p>
        <br/>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Our approach: recycling existing efforts, extending to new heights</h1>
        <p>We put together <Ewb />, a technology stack that enables the following:
        </p>
        <ul className="space-y-1 list-disc list-outside ms-8">
          <li>drop-in replacement for the existing PHP and MySQL installation that handles the routing logic and still operates out of WordPress,</li>
          <li>incremental and optional replacement of WordPress core functionality by a highly secure and powerful compiled and optimized code, with existing PHP-based themes and plugins still operating,</li>
          <li>incremental conversion of themes into more powerful and performant templating technology using modern web technologies,</li>
          <li>incremental conversion of plugins from PHP code to highly secure and powerful compiled and optimized code.</li>
        </ul>
        <br/>
        <p>This solution enables someone using WordPress to very simply transition to a more advanced web server runtime without changing anything on the WordPress code, the themes and plugins, the database, or the proxy technology. Yet by doing the switch, the installation gains a control system where it is possible to introspect the execution of WordPress components and start planning for an improvement path.
        </p>
        <br/>
        <p>The components of <Ewb /> are:</p>
        <ul className="space-y-1 list-disc list-outside ms-8">
          <li>a routing module that tracks incoming request activity, distributes the requests to the PHP engine for execution while tracking operational statistics for each WordPress components (files, functions, theme and plugin use), and then returns the results.</li>
          <li>a visualization system for all historical and ongoing activity.</li>
          <li>an automatic PHP code converter, which does a deep analysis of the logic and creates secure and efficient code that is compiled for efficient execution.</li>
          <li>a configuration UI that enables to trigger the execution of the native code instead of the PHP code for any function written in the WordPress core.</li>
          <li>an equivalency system that enables WordPress core to transparently see and use themes written in the Fudd templating system.</li>
          <li>a bridging system that enables plugins to use non-PHP/WordPress logic directly from PHP.</li>
        </ul>
        <br/>
        <p>As part of the FUDD ecosystem, the main part of <Ewb /> is written in Haskell. It uses the <i>Servant</i> and <i>Hasql</i> packages for performant and secure routing and database work. Within <Ewb /> is the latest stable version of PHP, closely integrated using SAPI, which enables a lot of customization in the execution of the PHP code without any hacking of the PHP official source code.
        </p>
        <br/>
        <h1 className="text-3xl py-4 text-primary-700 dark:text-primary-400">Technical details</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">Request Routing</h2>
        <p>The <a href="">Servant</a> package implements the hoisting and routing of all requests coming to <Ewb />.</p>
        <br/>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">PHP execution</h2>
        <p>The official <a href="">PHP</a> engine v8.2 executes the WordPress code.</p>
        <br/>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">Automatic PHP conversion</h2>
        <p><a href="">Tree-Sitter</a> and a in-house derivative of <a href="">Megaparsec</a> achieves the conversion of PHP code into an internal abstract syntax tree (AST) that contains verbatim blocks (html text), comments and logic.</p>
        <br/>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">Command App</h2>
        <p>Templates using the <a href="">Hugo</a> and <a href="">Fuddle</a> logic provides the UI for the web-based UI of <Ewb />.
        </p>
        <br/>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">Template to WordPress integration</h2>
        <p>TBD</p>
        <br/>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">Non-PHP logic to WordPress content</h2>
        <p>TBD</p>
      </section>
    </div>
  </>)
}


export default EasyWordy_2;
