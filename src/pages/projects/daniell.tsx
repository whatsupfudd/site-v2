import Navigation from "~/components/navigation"

export default function DaniellPage() {
  return (<>
    <Navigation currentItem={"DANIELL"} />
    <section className="text-black dark:text-white">
      <h1 className="text-4xl text-center py-4 text-rose-900 dark:text-rose-400">Daniell</h1>
      <h2 className="text-xl text-center pb-4">A fast and versatile website builder compatible with Hugo, Next.js and Gatsby.</h2>

      <div className="px-6">
      <p>The <b>Daniell</b> project is available on <a className="bg-primary-100 dark:bg-primary-900" href="https://github.com/whatsupfudd/daniell">Github</a>.
      </p>
      <h3 className="pt-4 text-2xl" id="the-general-logic-is-to">The general logic is to:</h3>
      <ul className="px-4 list-outside list-disc">
      <li>
      read the driving configuration for driving static site generation from a list of markup files,
      </li>
      <li>
      parse the folders and collect all relevant files,
      </li>
      <li>
      apply transformation logic from descriptions to HTML and associated resources,
      </li>
      <li>
      provide either a HTTP access for browsing the site, or a stand-alone version of the content ready for publication on CDNs.
      </li>
      </ul>

      <h3 className="pt-4 text-2xl" id="implementation">Implementation:</h3>
      <ul className="px-4 list-outside list-disc">
      <li>
      use Haskell for code base,
      </li>
      <li>
      inspire template processing from <a href="https://github.com/tdammers/ginger">Ginger</a>,
      </li>
      <li>
      inspire script interpretation from <a href="https://abhinavsarkar.net/posts/implementing-co-2/">Co</a>,
      </li>
      <li>
      use Servant for web services,
      </li>
      </ul>

      <h3 className="pt-4 text-2xl" id="commands">Commands:</h3>
      <ul className="px-4 list-outside list-disc">
      <li>
      <em>no arguments</em> : reads the current folder and creates a version of the static site in the <em>public</em> sub-folder.
      </li>
      <li>
      <strong>new site</strong> <a href="path">path</a> : populates a folder <em>path</em> with the required basic scaffholding, creating the folder if it doesn&#39;t already exist.
      </li>
      <li>
      <strong>new</strong> <a href="path">path</a> : creates a markup file at <em>path</em> with the minimal content to be useful in static site processing.
      </li>
      <li>
      <strong>server</strong> : creates an internal representation of the static site and and make it available to browsers on a HTTP channel.
      </li>
      <li>
      <strong>mod init</strong> <a href="path">path</a> : populates a folder <em>path&gt;</em> with the required basic scaffholding for a <strong>module</strong>, creates the folder <em>path</em> if it doesn&#39;t already exist.
      </li>
      <li>
      <strong>mod get</strong> : updates the modules from their git repo.
      </li>
      </ul>

      <h3 className="pt-4 text-2xl" id="site-description-folder-structure">Site Description Folder Structure:</h3>
      <ul className="px-4 list-outside list-disc">
      <li>
      archetypes:
      </li>
      <li>
      assets: resources used by the scriting logic (pipes) in on-the-fly no-markup content transformation.
      </li>
      <li>
      content: the top level container for all markup files that will lead to the generation of pages in the static site. Its subfolders correspond to sub-sections of the site.
      </li>
      <li>
      data: files providing structured datasets to the scripting logic for inclusion into the content transformation (eg rows of records).
      </li>
      <li>
      layouts: templates of HTML and scripting logic that drive the transformation logic of markup files into static web pages.
      </li>
      <li>
      public: publishable version of the static site.
      </li>
      <li>
      static: resources that support the rendering of pages in the static site (images, style sheets, javascript, etc). This folder is recreated as is in the public folder when a version of the static site is created.
      </li>
      <li>
      themes: reusable version of site definitions that provide a much faster and simpler creation process.
      </li>
      <li>
      config.<a href="ext">ext</a> : the configuration for driving the transformation logic, provided either in yaml, toml or json format.
      </li>
      </ul>

      <h3 className="pt-4 text-2xl" id="transformation-concept">Transformation concept:</h3>
      <p className="py-3">The main idea for the transformation of the site description into a static site of HTML pages is to apply to each markup file found in the hierarchy of folders in <em>content</em> the simple formula of:
      Transform interpreter-context markup template =&gt; static-page.html</p>
      <p className="py-3">The main transformation logic is provided by a path.html template file, which contains a mix of HTML code and golang <em>template/text</em> scripting statements.</p>

      <h3 className="pt-4 text-2xl" id="templating-structure">Templating structure:</h3>
      <p className="py-3">The <em>layout</em> folder provides at the top level templates for kinds of pages that are pre-defined in the logic. Each subfolder in <em>layout</em> defines templating logic for the kind of page named identically to the subfolder.</p>
      <p className="py-3">Templates can provides <em>blocks</em> of definitions with the directive <em>define <a href="label">label</a></em>.  A block can be applied with the <em>block <a href="label">label</a></em> directive.</p>
      <p className="py-3">If there is file <em>baseof.html</em> is present in a folder, it serves as a base defintion for every other template file. In this case, the <em>baseof.html</em> template will be the main logic, and other templates will provide alternative block definitions that the main logic uses, similarly to an abstract class logic that is complemented by concrete class implementations.</p>
      <p className="py-3">If there is a <em>partials</em> folder in the <em>layout</em> folder, files in that folder will represent a <em>subroutine</em> of templating logic.  The <em>partial <a href="path.html">path.html</a></em> directive in a template will get the logic to insert the content of the <em>path.html</em> file (relative to <em>layout/partials</em>) at that position in the calling template, and instatiate a new interpreter context to process its content to generate static text.  the <em>partial <a href="path.html">path.html</a> .</em> directive will pass the existing interpreter context to the generating logic.</p>

      <h3 className="pt-4 text-2xl" id="template-scripting">Template scripting:</h3>
      <p className="py-3">WHen transforming a markup file, the simplest template is made purely of HTML text, which means that none of the markup content being used for the generation of the static page.  It is the absorbant case.</p>
      <p className="py-3">Content from the markup file can be inserted in the HTML text by using the <strong>&#123;&#123; <a href="value">value</a> &#125;&#125;</strong> syntax. The <em><a href="value">value</a></em> will be transformed based on the interpreter context and inserted at the position it appears into the HTML stream of text.</p>
      <p className="py-3">For example to transfer all of the content of a markup file at a given position through the HTML stream of text, it is simply a matter of putting <em>&#123;&#123; .Content &#125;&#125;</em> at that position. The <em>.Content</em> value is a predefined variable in the interpreter context that is simply all the content of the markup file being processed.</p>
      <p className="py-3">Beside value inserting, the scripting syntax provides typical control structures and function application to source values.  The statements are:</p>
      <pre><code>&#123;&#123; if &lt;pipeline&gt; &#125;&#125; TrueBlock [ &#123;&#123; else [if &lt;pipeline&gt;] &#125;&#125; FalseBlock ] &#123;&#123; end &#125;&#125;<br/>
      &#123;&#123; with &lt;string-literal&gt; &#125;&#125; JustBlock [ &#123;&#123; else &#125;&#125; NothingBlock ] &#123;&#123; end &#125;&#125;<br/>
      &#123;&#123; range &lt;array | slice | map | channel&gt; &#125;&#125; LoopBlock [ &#123;&#123; else &#125;&#125; OtherwiseBlock ] &#123;&#123; end &#125;&#125;<br/>
      &#123;&#123; break &#125;&#125;<br/>
      &#123;&#123; continue &#125;&#125;<br/>
      &#123;&#123; template &lt;string-literal&gt; [ &lt;context-var&gt; ] &#125;&#125;<br/>
      </code></pre>
      <p className="py-3"><em>var-def</em> and <em>var-assign</em> are also statements.</p>
      <p className="py-3">A <a href="value">value</a> is called a <em>pipeline</em> in golang <em>template/text</em> library.  It is defined as:</p>
      <pre><code>&lt;pipelines&gt; ::= &lt;pipeline&gt; | &quot;(&quot; &lt;pipeline&gt; &quot;)&quot;<br/>
      &lt;pipeline&gt; ::= &lt;args&gt; | &lt;call&gt;<br/>
      &lt;call&gt; ::= &lt;function&gt; [ &lt;args&gt; ] [ &quot;|&quot; &lt;call&gt; ]<br/>
      &lt;args&gt;::= &lt;var&gt; | &lt;constant&gt; | &quot;.&quot;<br/>
      &lt;var&gt; ::= [ &lt;var&gt; ] &quot;.&quot; &lt;label&gt; | &lt;local-var&gt;<br/>
      &lt;local-var&gt; ::= &quot;$&quot; &lt;label&gt;<br/>
      &lt;var-def&gt; ::= &lt;local-var&gt; &quot;:=&quot; &lt;pipelines&gt;<br/>
      &lt;var-assign&gt; ::= &lt;local-var&gt; &quot;=&quot; &lt;pipelines&gt;<br/>
      </code></pre>

      <h3 className="pt-4 text-2xl" id="markup-file-to-layout-association">Markup file to Layout association:</h3>
      <ul className="px-4 list-outside list-disc">
      <li>
      _index.md =&gt; list
      </li>
      <li>
      <em>anything</em>.md =&gt; single
      </li>
      </ul>
      <h3 className="pt-4 text-2xl" id="resource-transformatoin">Resource transformatoin:</h3>
      <p className="py-3">Files in <em>assets</em> folder can be passed through scripting pipeline to obtain HTML text.  For example, if the SCSS file <em>assets/sass/style.scss</em> is available for styling, a template can do:</p>
      <pre><code>&#123;&#123; $style := resources.Get &quot;sass/style.scss&quot; | resources.ToCSS | resources.Minify &#125;&#125;
      </code></pre>
      <p className="py-3">and then:</p>
      <pre><code>... href=&quot;&#123;&#123; $style.Permalink &#125;&#125;&quot; ...
      </code></pre>
      <p className="py-3">to obtain both a CSS file in the resulting static site and a link referring to that file in the HTML code that will use the CSS styling.</p>
      <h3 className="pt-4 text-2xl" id="hugo-command-set">Hugo command set:</h3>
      <pre><code>Usage:
        hugo [flags]<br/>
        hugo [command]<br/>
<br/>
      Available Commands:<br/>
        config      Print the site configuration<br/>
        convert     Convert your content to different formats<br/>
        deploy      Deploy your site to a Cloud provider.<br/>
        env         Print Hugo version and environment info<br/>
        gen         A collection of several useful generators.<br/>
        help        Help about any command<br/>
        import      Import your site from others.<br/>
        list        Listing out various types of content<br/>
        mod         Various Hugo Modules helpers.<br/>
        new         Create new content for your site<br/>
        server      A high performance webserver<br/>
        version     Print the version number of Hugo<br/>
<br/>
      Flags:<br/>
        -b, --baseURL string             hostname (and path) to the root, e.g. http://spf13.com/<br/>
        -D, --buildDrafts                include content marked as draft<br/>
        -E, --buildExpired               include expired content<br/>
        -F, --buildFuture                include content with publishdate in the future<br/>
            --cacheDir string            filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/<br/>
            --cleanDestinationDir        remove files from destination not found in static directories<br/>
            --config string              config file (default is path/config.yaml|json|toml)<br/>
            --configDir string           config dir (default &quot;config&quot;)<br/>
        -c, --contentDir string          filesystem path to content directory<br/>
            --debug                      debug output<br/>
        -d, --destination string         filesystem path to write files to<br/>
            --disableKinds strings       disable different kind of pages (home, RSS etc.)<br/>
            --enableGitInfo              add Git revision, date and author info to the pages<br/>
        -e, --environment string         build environment<br/>
            --forceSyncStatic            copy all files when static is changed.<br/>
            --gc                         enable to run some cleanup tasks (remove unused cache files) after the build<br/>
        -h, --help                       help for hugo<br/>
            --i18n-warnings              print missing translations<br/>
            --ignoreCache                ignores the cache directory<br/>
            --ignoreVendor               ignores any _vendor directory<br/>
            --ignoreVendorPaths string   ignores any _vendor for module paths matching the given Glob pattern<br/>
        -l, --layoutDir string           filesystem path to layout directory<br/>
            --log                        enable Logging<br/>
            --logFile string             log File path (if set, logging enabled automatically)<br/>
            --minify                     minify any supported output format (HTML, XML etc.)<br/>
            --noChmod                    don&#39;t sync permission mode of files<br/>
            --noTimes                    don&#39;t sync modification time of files<br/>
            --path-warnings              print warnings on duplicate target paths etc.<br/>
            --print-mem                  print memory usage to screen at intervals<br/>
            --quiet                      build in quiet mode<br/>
            --renderToMemory             render to memory (only useful for benchmark testing)<br/>
        -s, --source string              filesystem path to read files relative from<br/>
            --templateMetrics            display metrics about template executions<br/>
            --templateMetricsHints       calculate some improvement hints when combined with --templateMetrics<br/>
        -t, --theme strings              themes to use (located in /themes/THEMENAME/)<br/>
            --themesDir string           filesystem path to themes directory<br/>
            --trace file                 write trace to file (not useful in general)<br/>
        -v, --verbose                    verbose output<br/>
            --verboseLog                 verbose logging<br/>
        -w, --watch                      watch filesystem for changes and recreate as needed<br/>
      </code></pre>

      <h3 className="pt-4 text-2xl" id="daniell-implementation">Daniell implementation</h3>
      <h4 className="pt-3 text-xl"  id="general-structure">General Structure</h4>
      <p className="py-3">The Main simply invokes configuration for the runtime, and based on the outcome of reading all arguments and config files it calls the <code>MainLogic</code>&#39;s execution function <code>runwithOptions</code>.</p>
      <p className="py-3">The <code>MainLogic.runwithOptions</code> unifies all options and default values and then switches to one of the <em>Commands</em> function.</p>
      <p className="py-3">The principal command, <em>generate</em>:</p>
      <ul className="px-4 list-outside list-disc">
      <li>
      launches a scan of the site definition folder,
      </li>
      <li>
      associates a transformation rule for each markup file from the <strong>content</strong> directory,
      </li>
      <li>
      applies the transformation logic to each instantiated rule,
      </li>
      <li>
      consolidates the result of the transformations and takes care of global resources if required,
      </li>
      <li>
      reports on the execution results.
      </li>
      </ul>
      <p className="py-3">Top-level execution of the software:</p>
      <ul className="px-4 list-outside list-disc">
      <li>
      <code>app/Main.hs</code>
      <ul className="px-4 list-outside list-disc">
      <li>
      parses the CLI options, then the config file, and if that went well enough pass the control to the command handlers (<code>runWithOptions</code>).
      </li>
      </ul>
      </li>
      <li>
      <code>src/MainLogic.hs</code>
      <ul className="px-4 list-outside list-disc">
      <li>
      <code>runWithOptions</code> look for a job to do (<strong>import</strong>, <strong>server</strong>, etc), then merges the cli &amp; file options into a runtime option set (<code>RunOptions</code>), and switches the execution to a command handler (<code>src/Commands/*.hs</code>).
      </li>
      </ul>
      </li>
      </ul>

      <h4 className="pt-3 text-xl"  id="configuration-logic-yaml-htoml-aeson-cli-optionsapplicative">Configuration logic (yaml, htoml, aeson) + cli (options-applicative)</h4>
      <ul className="px-4 list-outside list-disc">
      <li>
      Options (<code>src/Options/*.hs</code>)
      <ul className="px-4 list-outside list-disc">
      <li>
      <code>CliOptions</code>: control of the launch of the software, 1st layer of control on execution.
      </li>
      <li>
      <code>FileOptions</code>: usual control of software parameters, provide most informatino about configuration
      </li>
      <li>
      <code>RunOptions</code>: final version of all parameters controlling execution of software, created by merging the cli, the file and default options.
      </li>
      <li>
      <code>SiteConfig</code>: parameters specific for a site, such as base URL, build expiry date, etc.
      </li>
      </ul>
      </li>
      </ul>
      <p className="py-3">At bootstrap, produce a <code>CliOptions</code> and <code>FileOptions</code> structure to select which main action(s) to perform and parameters for the action(s) execution.</p>
      <p className="py-3">During template interpretation the <code>SiteConfig</code> context, loaded from the <em>config.<a href="ext">ext</a></em> file(s), parametrizes the way the logic merges source data (markup files) and template structures.</p>

      <h4 className="pt-3 text-xl"  id="folder-hierarchy-traversal-for-acquiring-config-markup-templates-and-theme-files-dirtraverse-pathwalk">Folder hierarchy traversal for acquiring config, markup, templates and theme files (<a href="https://hackage.haskell.org/package/dir-traverse">dir-traverse</a>, <a href="https://hackage.haskell.org/package/pathwalk">pathwalk</a>)</h4>
      <p className="py-3">The <code>src/SiteDefinition</code> functions look into the folder hierarchy and create a model of its meaning using the <code>SiteDefinition</code> type. It provides information about the following items discovered parsing files in the source folders:</p>
      <ul className="px-4 list-outside list-disc">
      <li>
      Hierarchy
      <ul className="px-4 list-outside list-disc">
      <li>
      MarkupPage: represents a markup file, which will provide content into the templates.
      </li>
      <li>
      Template: represents a template file, which is structure + logic + parent + children.
      </li>
      <li>
      Asset :  ?
      </li>
      <li>
      Data : ?
      </li>
      <li>
      Reources : ?
      </li>
      <li>
      Static : ?
      </li>
      <li>
      Theme : ?
      </li>
      </ul>
      </li>
      </ul>
      <p className="py-3">The <code>src/SiteDefinition/Explore</code> logic walks through the source folders and gather information on all files available as content or logic.</p>

      <h4 className="pt-3 text-xl"  id="associtation-logic-for-markup-and-templates">Associtation logic for markup and templates</h4>
      <p className="py-3">The <code>src/SiteDefinition/AssocRules</code> logic associates entries in the <code>SiteDefinition</code> to create a workplan for generating the static site content (ie the output).</p>
      <ul className="px-4 list-outside list-disc">
      <li>
      WorkPlan
      </li>
      <li>
      Transformation
      </li>
      </ul>
      <p className="py-3">Creates a workplan of transformations to apply to page markup descriptions in order to generate the static site.</p>

      <h4 className="pt-3 text-xl"  id="markup-files-parser-mmark-cmark">Markup files parser (<a href="https://hackage.haskell.org/package/mmark">mmark</a>, <a href="https://hackage.haskell.org/package/cmark">cmark</a>)</h4>
      <p className="py-3">The <code>src/Markup/Page</code> is the logic for handling marked up files operations.  It relies on the different markdup parsers (<code>src/Markup/Markdown</code>) that will parse content and transform it into an internal structure.</p>
      <ul className="px-4 list-outside list-disc">
      <li>
      MarkupPage
      <ul className="px-4 list-outside list-disc">
      <li>
      Encoding: The kind of markup the content is written in (eg Markdown).
      </li>
      <li>
      FrontMatter: configuration entries to drive the rendering of the page.
      </li>
      <li>
      Content: actual content for the page.
      </li>
      </ul>
      </li>
      </ul>
      <p className="py-3">Uses the markdown library to read the content of a markup file into an internal list of parameters and HTML content.</p>

      <h4 className="pt-3 text-xl"  id="template-files-parser">Template files parser</h4>
      <p className="py-3">The <code>src/Template</code> logic handles the parsing of template files structure and logic and their representation into an internal format.  The <code>src/Template/Parser</code> is the top-level access to the logic, and it relies on <code>src/Template/Jinja2</code> and <code>src/TemplateText/Parser</code> to do the real work.</p>
      <ul className="px-4 list-outside list-disc">
      <li>
      Template
      <ul className="px-4 list-outside list-disc">
      <li>
      TextBlock: content that is to be entered verbatim into the output stream.
      </li>
      <li>
      Statement: logic in AST that needs to be converted for the interpreter
      </li>
      <li>
      Children: other templates utilised by this templates (inserted at runtime).
      </li>
      <li>
      Parent: template that creates a top-level setting for execution by the current template.
      </li>
      </ul>
      </li>
      </ul>
      <p className="py-3">Read a <em>template/text</em> template, referred templates and partials, and create an executable representation of the whole set of content/logic ready for the next phase.</p>

      <h4 className="pt-3 text-xl"  id="scripting-interpreter">Scripting interpreter</h4>
      <ul className="px-4 list-outside list-disc">
      <li>
      Interpreter
      <ul className="px-4 list-outside list-disc">
      <li>
      TextTmplInterpreter
      </li>
      <li>
      RtContext
      </li>
      <li>
      Output
      </li>
      </ul>
      </li>
      </ul>

      <h4 className="pt-3 text-xl"  id="simple-http-service-for-providing-browser-access-to-the-static-site-generated-wai-warp-servant">Simple http service for providing browser access to the static site generated (wai, warp, servant)</h4>
      <ul className="px-4 list-outside list-disc">
      <li>
      WebServer
      <ul className="px-4 list-outside list-disc">
      <li>
      SimpleHandler
      </li>
      </ul>
      </li>
      </ul>

      <h4 className="pt-3 text-xl"  id="publishing-logic-to-construct-a-selfsufficient-folder-for-the-static-site">Publishing logic to construct a self-sufficient folder for the static site</h4>
      <ul className="px-4 list-outside list-disc">
      <li>
      Publisher
      <ul className="px-4 list-outside list-disc">
      <li>
      Dependency
      </li>
      </ul>
      </li>
      </ul>
      <p className="py-3">Takes out the (sucessful) output of the interpreter and serializes it into a self-sufficient folder that makes up a static site.</p>

      </div>
    </section>
  </>)
}