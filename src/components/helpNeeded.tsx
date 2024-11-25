export default function HelpNeeded() {
  return (<>
  <section className="p-3 gap-16 text-black dark:text-white">
    <p className="text-2xl text-primary-700 dark:text-primary-300">HELP NEEDED</p>
    <div className="p-2">
      <p><span className="text-primary-200 dark:text-primary-700">Community&nbsp;&gt;&nbsp;</span>Volunteer recruitment strategy; content creation on media
      channels (youtube, instgram, x, bluesky, discord); volunteer skillset classification; events; feedback loop; governance structure; cooperation with Haskell &amp; Elm communities.
      </p>
    </div>
    <div className="p-2">
      <p><span className="text-primary-200 dark:text-primary-700">Coding&nbsp;&gt;&nbsp;</span>Fuddle compilation (type resolution, bytecode generation); package manager (configuration, chaining);
      KnowDoc (db population workflow, prototype UI); WP code annotation (UI); EW distributed proof-of-concept; Cannelle&apos;s automatic route extration and implicit API generation;
      cabal/stack package introspection (UI); dynamic library linking facilitation in Haskell runtime; EW embedded VM for Fuddle execution.
      </p>
    </div>
    <div className="p-2">
      <p><span className="text-primary-200 dark:text-primary-700">Website&nbsp;&gt;&nbsp;</span>visual assets; esthetic presentation; content; sandbox Fuddle execution.
      </p>
    </div>
  </section>
  </>)

}