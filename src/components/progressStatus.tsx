import Link from 'next/link'

export default function ProgressStatus() {
  return (<>
  <section className="p-3 gap-16 text-black dark:text-white">
    <p className="text-2xl text-primary-700 dark:text-primary-300">PROGRESS STATUS</p>
    <div className="p-2">
      <p><Link href="/projects/daniell"><span className="text-primary-200 dark:text-primary-700">Daniell&nbsp;&gt;&nbsp;</span></Link>Parses Hugo, NextJS and Fuddle projects; classifies all components in a project;
      applies <code>content</code> and <code>theme</code> rules for Hugo; applies <code>pages</code> and <code>components</code> rules for NextJS; parse front-matter and markdown for Hugo;
      compiles templates in themes for Hugo; compiles TSX files; executes the template files with fake data context for Hugo; outputs the HTML for Hugo; parses
      the Fuddle template files for a code project; creates a new directory tree as per template; executes the template logic and generates the output files in the
      right location.
      </p>
    </div>
    <div className="p-2">
      <p><Link href="/projects/easy-wordy"><span className="text-primary-200 dark:text-primary-700">Easy-Wordy&nbsp;&gt;&nbsp;</span></Link>PHP SAPI integration and management (based on fpm); all WordPress routes
      defined; PHP execution of WP files matching the routes; PHP output buffer management and HTTP reply to client; partial request parameter extraction and SAPI global variables population;
      misc PHP functions calling from Haskell; WordPress parameters in config file; demo WP instance installation; MySQL connectivity; Postgresql connectivity; Websocket support; Htmx support; EW test application (flowbite admin dashboard demo);
      WP Core code analysis (92% of files); WP code AST storage in DB; WP code browsing and visualization on EW application.
      </p>
    </div>
    <div className="p-2">
      <p><Link href="/projects/fuddle"><span className="text-primary-200 dark:text-primary-700">Fuddle&nbsp;&gt;&nbsp;</span></Link>Elm compiler and package server fork; Template-extension definition; proof-of-concept template examples.
      </p>
    </div>
    <div className="p-2">
      <p><Link href="/projects/cannelle"><span className="text-primary-200 dark:text-primary-700">Cannelle&nbsp;&gt;&nbsp;</span></Link>Parse Golang, compiles and run Jinja2
      (using Ginger project); generic TreeSitter-to-internal AST model; parses PHP, TSX and Fuddle syntax to internal AST; VM bytecode specification done (v1); VM function call and return model implemented; VM dynamic field load/store implemented; VM stack and heap implemented;
      VM constant pool implemented; template storage model specified; template to disk read/write implemented; compiles Golang to VM bytecode; transforms Hugo templates to storage model;
      compiles Fuddle records and map/fold logic to VM bytecode; Haskell-TreeSitter fork and updates for Fuddle template syntax support.
      </p>
    </div>
    <div className="p-2">
      <p><Link href="/projects/knowdoc"><span className="text-primary-200 dark:text-primary-700">KnowDoc&nbsp;&gt;&nbsp;</span></Link>Roadmap; technology identification; knowledge base design; prototype definition.
      </p>
    </div>
    <div className="p-2">
      <p><Link href="/tutorial"><span className="text-primary-200 dark:text-primary-700">Tutorial&nbsp;&gt;&nbsp;</span></Link>Write up; demo assets and DB population; iHaskell extension; implementation as Jupyter Notebook; docker image wrapup;
      text-to-speech generation (openai).
      </p>
    </div>
  </section>
  </>)

}