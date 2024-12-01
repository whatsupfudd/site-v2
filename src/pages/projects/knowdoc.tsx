import Navigation from "~/components/navigation"
import Link from 'next/link'
import Image from 'next/image'
import { CuteLink, FuddEco, NextPage } from "~/components/styling"
import { useState, ReactElement } from 'react';


function KD() {
  return (
    <span className="bold text-primary-700 dark:text-primary-400">KnowDoc</span>
  )
}

function Restr() {
  return (<span className="text-2xl">&#x21D2;</span>)
}

function Cont() {
  return (<span className="text-2xl">&#x2192;</span>)
}
function Bind() {
  return (<span className="text-2xl">&#x2190;</span>)
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
        <h2 className="text-xl text-primary-700 dark:text-primary-300">Main components of KnowDoc</h2>
        <br/>
        <ul className="mx-4 list-disc">
        <li>IDE extensions: hot keys and LSP-like protocol for neovim, VS Code to signal a block</li>
        <li>Backend server: authentication, user context, requests/replies,</li>
        <li>Knowledge base: server, schema/graph specs, ontology,</li>
        <li>Web client: ui for interacting with knowledge,</li>
        <li>Queries and knowledge context logic,</li>
        <li>AI-augmented information extraction and composition,</li>
        <li>Acquisition workflow: collects all existing knowledge and organize within KB.</li>
        </ul>
        <br/>
        <h2 className="text-xl text-primary-700 dark:text-primary-300">Technology choices</h2>
        <ul className="mx-4 list-disc">
          <li>KB server: Neo4j,</li>
          <li>Neo4j client: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/haskell-neo4j-client">Database.Neo4j</Link>,</li>
          <li>neovim extension: lua + ???,</li>
          <li>VS Code extension: js + ???,</li>
          <li>LSP communication: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/lsp-client">Language.LSP.Client</Link>,</li>
          <li>Git manipulations: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/gitlib">Git</Link>,</li>
          <li>HTTP server: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/servant">Servant</Link>,</li>
          <li>HTTP client: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/http-client">Network.HTTP.Client</Link>,</li>
          <li>Structured Database: Postgresql,</li>
          <li>DB client: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/hasql">Hasql</Link>,</li>
          <li>HTML parsing: <Link className="rounded bg-gray-500 text-white" href="https://hackage.haskell.org/package/tagsoup">Text.Html.TagSoup</Link>,</li>
          <li>Natural Language Parsing 1: <Link className="rounded bg-gray-500 text-white" href="https://www.nltk.org/">NLTK</Link>,</li>
          <li>Natural Language Parsing 2: <Link className="rounded bg-gray-500 text-white" href="https://github.com/stanfordnlp/stanza">Stanza</Link>,</li>
          <li>Tokenization: <Link className="rounded bg-gray-500 text-white" href="https://spacy.io/api/tokenizer">spaCy</Link>,</li>
          <li>Sofware Engineering Ontology: <Link className="rounded bg-gray-500 text-white" href="https://dev.nemo.inf.ufes.br/seon/">SEON</Link>,</li>
          <li>Functional Coding Ontology: <Link className="rounded bg-gray-500 text-white" href="https://fno.io/spec/">The Function Ontology</Link>,</li>
          <li>O-O Coding Ontology: <Link className="rounded bg-gray-500 text-white" href="https://github.com/codeontology/parser/blob/master/ontology/CodeOntology.owl">Code Ontology</Link>,</li>
          <li>Web client: <Link className="rounded bg-gray-500 text-white" href="https://elm-lang.org">Elm</Link> (until Fuddle is useable),</li>
        </ul>
        <br/>
        <h2 className="text-xl text-primary-700 dark:text-primary-300">Knowledge ingestion example</h2>
        <p>We look at establishing a knowledge base for the runConduit function of the <code>Conduit</code> package. Assuming the package is already flagged for ingestion, the following
        steps are executed:
        </p>
        <ul className="mx-4 list-disc">
          <li>Data collection and parsing,</li>
          <li>Blocks segmentation and structuring,</li>
          <li>Semantic annotation using ontology,</li>
          <li>Block connections,</li>
          <li>Storage in KB,</li>
        </ul>
        <br />
        <p><span className="text-xl text-blue-800 dark:text-blue-200">Data collection and parsing</span> is first built from the <Link href="https://hackage.haskell.org/package/conduit"> Conduit </Link>
        main package description, from which the module pointer to <Link href="https://hackage.haskell.org/package/conduit-1.3.6/docs/Data-Conduit.html">Data.Conduit</Link> has been extracted using TagSoup
        on the standard structure for package description. The <code>Data.Conduit</code> module&apos;s webpage is also structured in a standard format from pandoc processing. The basic extraction leads to
        a function and explanation being created in a property graph:
        </p>
        <code className="text-sm">(f_123456:Function {"{"}<br/>
          &nbsp;&nbsp;name: &quot;runConduit&quot;,<br />
          &nbsp;&nbsp;, description: &quot;Run a pipeline until processing completes.&quot;<br />
          &nbsp;&nbsp;, source: &quot;https://hackage.haskell.org/package/conduit-1.2.3/docs/Data-Conduit.html#v:runConduit&quot;<br />
          &nbsp;&nbsp;, version: &quot;1&quot;<br />
          &nbsp;&nbsp;, last_updated: &quot;2023-11-24T10:00:00Z&quot;<br />
          &nbsp;&nbsp;, change_type: &quot;Content clarification&quot;<br />
          &nbsp;&nbsp;, content_type: &quot;original&quot;<br />
        {"}"})</code>
        <br />
        <code className="text-sm">(e_123456:Explanation {"{"}<br/>
          &nbsp;&nbsp;  content: &quot;Run a pipeline until processing completes.&quot;<br />
          &nbsp;&nbsp;, version: &quot;1.0.0&quot;<br />
          &nbsp;&nbsp;, created_by: &quot;DocSyParser&quot;<br />
          &nbsp;&nbsp;, created_at: &quot;2023-11-24T10:05:00Z&quot;<br />
          &nbsp;&nbsp;, content_type: &quot;supplementary<br />
        {"}"})</code>
        <br />
        <p>The following relationships are also recorded:</p>
        <ul className="text-sm">
        <li>(f_123456)-[:HAS_EXPLANATION]-&gt;(e_123456)</li>
        <li>(e_123456)-[:EXPLAINS]-&gt;(f_123456)</li>
        <li>(f_123456)-[:DEPENDS_ON]-&gt;(...<i>types used in parameteres, return values and function source.</i>...)</li>
        </ul>
        <br />
        <p>That&apos;s the basic documentation we get for the <code>runConduit</code> function, which isn&apos;t that much. The next step is to augment this base to add the
        following blocks of knowledge:</p>
        <ul className="mx-4 list-disc">
          <li>Function Overview,</li>
          <li>Signature Breakdown,</li>
          <li>In-depth Parameter Description,</li>
          <li>Return Value Explanation,</li>
          <li>Expanded Example Usage,</li>
          <li>Additional Insights,</li>
          <li>Related Concepts and Functions.</li>
        </ul>
        <br />
        <p>The processing through a quality LLM produces to these blocks:</p>
        <ul>
          <li><span className="text-blue-800 dark:text-blue-200">Overview:&nbsp;</span>Executes a <code>Conduit</code> pipeline from a source to a sink, yielding the final result within a monad of choice.</li>
          <li><span className="text-blue-800 dark:text-blue-200">Signature:&nbsp;</span><code>runConduit :: Monad m <Restr /> ConduitT () Void m r <Cont /> m r</code>
            <br />
            <ul className="mx-4">
              <li><span className="text-blue-700 dark:text-blue-300">Monad m: </span>This is a constraint indicating that in the rest of the signature, the type m is a placeholder for a real type
              that must implement the Monad interface. Monads are structures that represent computations.</li>
              <li><span className="text-blue-700 dark:text-blue-300">ConduitT () Void m r: </span>This is an assembly of the three types <code>()</code>, <code>Void</code> and <code>m r</code> under the label <code>ConduitT</code>.
                Breaking it down, these types are used as:
                <ul className="mx-4">
                  <li><span className="text-blue-700 dark:text-blue-300">(): </span> The input type of the conduit, here (), also known as Unit, signifies that the conduit does not consume any input data.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">Void: </span> The output type of the conduit, Void indicates that the conduit does not produce any output downstream.
                    Void is an uninhabited type, meaning it has no possible values.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">m r: </span> The monad m in which the conduit operates and which wraps some type r. For example, the monad type
                  could be the <code>IO</code> type used for input/output operations, and the result type could be the <code>String</code> type to supply text back to the calling code.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">Interpretation: </span> The function takes a ConduitT that doesn&apos;t consume input from a source or generate output for a sink
                   but performs some computation within monad m that we want to terminate in a result of type r.</li>
                </ul>
              </li>
              <li>Result <span className="text-blue-700 dark:text-blue-300">m r: </span> The result is a computation in monad m that yields a value of type r.</li>
            </ul>
          </li>

          <li><span className="text-blue-800 dark:text-blue-200">In-depth parameter description:&nbsp;</span>
          <ul className="mx-4">
              <li><span className="text-blue-700 dark:text-blue-300">ConduitT () Void m r: </span><code>Conduit</code> computations are made to operate within a pipeline of processing. Some computations don&apos; use or contribute to the pipeline data flow.
              In this case, they don&apos;t require any input data from nor produce any output data to the pipeline, but will simply perform some operation
              in the context of a monad and return a result of a certain type.</li>
              <li><span className="text-blue-700 dark:text-blue-300">Why () and Void:&nbsp;</span>
                <ul className="mx-4 list-disc">
                  <li>(): This is the type representing the <i>Unit</i> concept, indicating that the conduit doesn&apos;t need any input data to begin processing. It&apos;s often used when the source of data is generated within the conduit itself.</li>
                  <li>Void: Signifies that the conduit doesn&apos;t pass any output downstream. This is common when the conduit is a sink or when the output is consumed within the conduit.</li>
                </ul>
              </li>
            </ul>
          </li>

          <li><span className="text-blue-800 dark:text-blue-200">Return Value Explanation:&nbsp;</span> The return value <code>m r</code> indicates the <code>runConduit</code> returns a computation
          in some monad <code>m</code> that, when executed, yields a result of some type <code>r</code>. The monad <code>m</code> could be any monad, allowing for flexibility in how the result is
          computed (e.g., <code>IO</code> for input/output, <code>Either</code> for computations that may fail with explanations).
          </li>

          <li><span className="text-blue-800 dark:text-blue-200">Exemple:&nbsp;</span>
            <ul className="mx-4">
              <li><span className="text-blue-700 dark:text-blue-300">Code: </span><code>result <Bind /> runConduit $ sourceList [1..10] .| foldlC (+) 0</code> </li>
              <li><span className="text-blue-700 dark:text-blue-300">Explanation: </span>
                <ul className="mx-4">
                  <li><span className="text-blue-700 dark:text-blue-300">sourceList [1..10]: </span>Creates a source conduit that produces the numbers from 1 to 10.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">.|: </span> The connect operator, used to compose conduits. It connects the output of one conduit to the input of another.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">foldlC (+) 0: </span>A sink conduit that folds the incoming stream of numbers using the (+) operator, starting from 0, effectively calculating the sum of the numbers.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">runConduit $: </span> Executes the composed conduit pipeline.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">result <Bind />: </span> In a monadic context (e.g., within do notation in the IO monad), binds the result of the computation to result.</li>
                </ul>
              </li>
              <li><span className="text-blue-700 dark:text-blue-300">Expected Result: </span> The variable result will contain the sum of numbers from 1 to 10, which is 55.</li>
              <li><span className="text-blue-700 dark:text-blue-300">Possible Errors: </span> Since all operations are pure and the monad m is IO in this context, there are minimal chances for errors.
                However, if the monad m involves IO operations, exceptions could occur (e.g., file read errors).
              </li>
            </ul>
          </li>

          <li><span className="text-blue-800 dark:text-blue-200">Additional insights:&nbsp;</span>
            <ul className="mx-4">
              <li><span className="text-blue-700 dark:text-blue-300">Understanding ConduitT in Context: </span>
                <ul className="mx-4">
                  <li><span className="text-blue-700 dark:text-blue-300">Conduit as a Monad Transformer: </span> <code>ConduitT</code> can be thought of as a monad transformer that allows for building complex data
                  processing pipelines with effects.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">Role of the Parameters Types m and r: </span> <code>m</code> defines the computational context, and <code>r</code> is the result produced after the conduit is
run.</li>
                </ul>
              </li>
              <li><span className="text-blue-700 dark:text-blue-300">Common Use Cases: </span> Reading from files, processing streams of data, network communication, etc.</li>
            </ul>
          </li>
          <li><span className="text-blue-800 dark:text-blue-200">Related concepts and functions:&nbsp;</span>
            <ul className="mx-4">
              <li><span className="text-blue-700 dark:text-blue-300">runConduitPure:</span>
                <ul className="mx-4">
                  <li><span className="text-blue-700 dark:text-blue-300">Description: </span> A variant of runConduit that operates in the Identity monad, used for pure computations without side effects.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">Signature: </span> <code>runConduitPure :: ConduitT () Void Identity r <Cont /> r</code></li>
                </ul>
              </li>

              <li><span className="text-blue-700 dark:text-blue-300">runConduitRes:</span>
                <ul className="mx-4">
                  <li><span className="text-blue-700 dark:text-blue-300">Description: </span> Runs a conduit within the ResourceT monad transformer, which handles resource allocation and
                    deallocation, such as opening and closing files.</li>
                  <li><span className="text-blue-700 dark:text-blue-300">Signature: </span> <code>runConduitRes :: MonadUnliftIO m =&gt; ConduitT () Void (ResourceT m) r <Cont /> m r</code></li>
                </ul>
              </li>

            </ul>
          </li>
        </ul>
        <br />
        <p>Using a hybrid version of the Functional and O-O Coding ontology that matches existing structure in the Hackage documentation increases the opportunities for capturing semantic information.
        We use the following classes and properties to create the knowledge base:</p>
        <ul className="mx-4">
          <li><span className="text-blue-700 dark:text-blue-300">Classes: </span> Function, Type, Monad, Conduit, Parameter, ReturnValue, Example, TypeParameter, Operator, Error, UseCase.</li>
          <li><span className="text-blue-700 dark:text-blue-300">Properties: </span> hasParameter, hasReturnValue, hasTypeParameter, hasDescription, hasExample, relatedTo, explains, hasUseCase, canCauseError, producesResult, synonymTo.</li>
        </ul>
        <br />
        <h2 className="text-xl text-primary-700 dark:text-primary-300">Visual Presentation</h2>
        <br />
        <p>The current Haddoc / Hackage documentation style can be much improved, especially when aiming for a much more interactive and assisted use of information.</p>
        <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image src="/img/projects/knowdoc/conduit_index.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/data_conduit_top.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/runConduit_doc.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/conduitSynopsis.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/conduitCode.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/conduitQuickJump.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/conduitGhDoc_1.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/conduitGhDoc_2.png" width={400} height={800} alt="conduit pic 1" />
        <Image src="/img/projects/knowdoc/conduitGhDoc_3.png" width={400} height={800} alt="conduit pic 1" />
        </div>
        <br />
        <p>For example, we can use an animated knowledge browser as in the following design that calls on graph browsers and the Smalltalk click-to-dig-in approach:</p>
        <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">I made the transitions feel like the new topic is &quot;pushing&quot; the old one out and added inline links and...<br /><br />I&#39;m finding this strangely addictive!<br /><br />what&#39;s really fun is how different the paths can be - I refresh partway through and end up in a completely different area <a href="https://t.co/CyGPgpXOfx">pic.twitter.com/CyGPgpXOfx</a></p>&mdash; Amelia Wattenberger 🪷 (@Wattenberger) <a href="https://twitter.com/Wattenberger/status/1859984433031385317?ref_src=twsrc%5Etfw">November 22, 2024</a></blockquote>
        <br />
        <p>Another approach is to use blocks in rows and columns:</p>
        <Demo_3 />
        <br />
        <p>Another approach yet is a more complex layout with subsections, vertical nav paths and expecting a wide aspect ratio output:</p>
        <Image src="https://i0.wp.com/stefaniapassera.com/wp-content/uploads/2018/05/pattern1.png?resize=800%2C533&ssl=1" width={800} height={800} alt="complex layout example." />
        <p className="text-sm text-gray-500">from <Link href="https://stefaniapassera.com/portfolio/juro/">Stefania Passera</Link> site.</p>
        <br />
        <p>Edward Tufte is always a fantastic source of inspiration, but his work is much more geared toward numerial and engineering information than
        mostly text blocks. We can look at the ideas embedded in the <Link href="https://edwardtufte.github.io/tufte-css/">Tufte-css&nbsp;</Link>
        package but can&apos;t use much of that.
        </p>
        <br />
        <p>Legal documents feel more like the place to look for ideas. For example, <Link href="https://www.legaltechdesign.com/category/resources/reading-list/on-design-of-legal-docs/">Legal Tech Design&nbsp;</Link>
        presents many kind of layouts for dense and complex documents, such as <Image src="https://www.legaltechdesign.com/wp-content/uploads/2018/01/Legal-comm-design-social-annotations.png" width={800} height={800}  alt="legal document example." />
        </p>
        <br />
        <p>Additional ideas lie in the TeX section of StackExchange. For example,
        <Link href="https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends">Showcase of Game documentation </Link>
        presents many pages of structured and dense information:
        <Image src="https://i.sstatic.net/s80xj.png" width={800} height={400}  alt="TeX layouts." />
        </p>
      </section>.
    </div>
  </>)
}

type DemoDesc = { id : number, title : string, description : JSX.Element }
type DemoData2 = { title : string, blocks : DemoDesc[] }

const data_2 : DemoData2[] = [
  {
    title: 'Main Topics',
    blocks: [
      {
        id: 1,
        title: 'Getting Started',
        description: (<>Introduction to the documentation system.</>),
      },
      {
        id: 2,
        title: 'Installation',
        description: (<>Steps to install the software.</>),
      },
      {
        id: 3,
        title: 'Configuration',
        description: (<>How to configure the system settings.</>),
      },
    ],
  },
  {
    title: 'Modules',
    blocks: [
      {
        id: 4,
        title: 'Authentication Module',
        description: (<>Handles user authentication and authorization.</>),
      },
      {
        id: 5,
        title: 'Database Module',
        description: (<>Manages database connections and queries.</>),
      },
      {
        id: 6,
        title: 'API Module',
        description: (<>Facilitates communication with external APIs.</>),
      },
    ],
  },
  {
    title: 'Functions',
    blocks: [
      {
        id: 7,
        title: 'Login Function',
        description: (<>Allows users to log into the system.</>),
      },
      {
        id: 8,
        title: 'Register Function',
        description: (<>Enables new users to create an account.</>),
      },
      {
        id: 9,
        title: 'Fetch Data Function',
        description: (
          <>
            Retrieves data from the server. For more details, refer to the{' '}
            <SubscriptLink href="/api-documentation">API Documentation</SubscriptLink>.
          </>
        ),
      },
    ],
  },
  {
    title: 'Types',
    blocks: [
      {
        id: 10,
        title: 'User Type',
        description: (<>Defines the structure of a user object.</>),
      },
      {
        id: 11,
        title: 'Product Type',
        description: (<>Defines the structure of a product object.</>),
      },
      {
        id: 12,
        title: 'Order Type',
        description: (<>Defines the structure of an order object.</>),
      },
    ],
  },
];


function FaInfoCircle() {
  return ("o")
}
function FaEdit() {
  return ("e")
}
function FaTrash() {
  return ("t")
}
function FaCompress() {
  return ("<")
}

function FaLink() {
  return ("8")
}


function SubscriptLink({ href, children } : { href : string, children : string | JSX.Element}) {
  return (
    <Link href={href} className="relative group text-gray-600 dark:text-gray-300 no-underline hover:underline">
        {children}
        <span className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 text-xs text-blue-500">
          <FaLink />
        </span>
    </Link>
  )
}


function Demo_2() {
  const [columnData, setColumnData] = useState(data_2);

  // Placeholder for reordering functionality
  const handleDragStart = (e : React.DragEvent<HTMLDivElement>, columnIndex : number, blockIndex : number) => {
    e.dataTransfer.setData('column', columnIndex.toString());
    e.dataTransfer.setData('block', blockIndex.toString());
  };

  const handleDrop = (e : React.DragEvent<HTMLDivElement>, columnIndex : number) => {
    const fromColumn = parseInt(e.dataTransfer.getData('column'));
    const fromBlock = parseInt(e.dataTransfer.getData('block'));
    const toColumn = columnIndex;

    if (fromColumn !== toColumn) return; // Prevent moving between columns

    const updatedColumns = [...columnData];
    const block = updatedColumns[fromColumn]!.blocks.splice(fromBlock, 1)[0]!;
    updatedColumns[toColumn]!.blocks.push(block);
    setColumnData(updatedColumns);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Documentation System</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {columnData.map((column, colIdx) => (
          <div
            key={column.title}
            className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, colIdx)}
          >
            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
            <div>
              {column.blocks.map((block, blockIdx) => (
                <div
                  key={block.id}
                  className="bg-gray-50 rounded-md p-3 mb-3 shadow-sm cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, colIdx, blockIdx)}
                >
                  <h3 className="text-lg font-medium">{block.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {block.description}
                  </p>
                  <div className="flex justify-end mt-2 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaInfoCircle />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Demo_3() {
  const [columnData, setColumnData] = useState(data_2);
  const [expandedColumn, setExpandedColumn] = useState<number | null>(null);

  // Placeholder for reordering functionality
  const handleDragStart = (e : React.DragEvent<HTMLDivElement>, columnIndex : number, blockIndex : number) => {
    e.dataTransfer.setData('column', columnIndex.toString());
    e.dataTransfer.setData('block', blockIndex.toString());
  };

  const handleDrop = (e : React.DragEvent<HTMLDivElement>, columnIndex : number) => {
    const fromColumn = parseInt(e.dataTransfer.getData('column'));
    const fromBlock = parseInt(e.dataTransfer.getData('block'));
    const toColumn = columnIndex;

    if (fromColumn !== toColumn) return; // Prevent moving between columns

    const updatedColumns = [...columnData];
    const block = updatedColumns[fromColumn]!.blocks.splice(fromBlock, 1)[0];
    updatedColumns[toColumn]!.blocks.push(block!);
    setColumnData(updatedColumns);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Documentation System
        </h1>
      </div>

      <div className="flex space-x-4 overflow-x-auto">
        {columnData.map((column, colIdx) => {
          const isExpanded = expandedColumn === colIdx;

          return (
            <div
              key={column.title}
              className={`flex-shrink-0 ${
                isExpanded ? 'w-full' : 'w-72'
              } bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-500`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer"
                  onClick={() => setExpandedColumn(isExpanded ? null : colIdx)}
                >
                  {column.title}
                </h2>
                {isExpanded && (
                  <button
                    onClick={() => setExpandedColumn(null)}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  >
                    <FaCompress />
                  </button>
                )}
              </div>

              <div>
                {column.blocks.map((block, blockIdx) => (
                  <div
                    key={block.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-md p-3 mb-3 shadow-sm cursor-move transition-colors duration-300"
                    draggable
                    onDragStart={(e) => handleDragStart(e, colIdx, blockIdx)}
                  >
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                      {block.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {block.description}
                    </p>
                    <div className="flex justify-end mt-2 space-x-2">
                      <button className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600">
                        <FaInfoCircle />
                      </button>
                      <button className="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-600">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default KnowDoc_1;
