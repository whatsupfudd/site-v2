
function setTab(tab : number) {
  document.querySelectorAll('.tab-content').forEach(function (tabContent) {
    tabContent.classList.add('hidden');
  });
  document.querySelector('#Tab' + tab)!.classList.remove('hidden');
}


function CodeEditor_2() {
  return (
    <div className="p-4 text-black dark:text-white dark:bg-grey-800">
      <ul className="flex border-b">
        <li className="mr-1">
          <button className="inline-block py-2 px-4 text-blue-500 hover:text-rose-800 font-semibold" onClick={ () => setTab(1)}>
            <span className="visible sm:invisible">1</span>
            <span className="invisible sm:visible">Hello World</span>
          </button>
        </li>
        <li className="mr-1">
          <button className="inline-block py-2 px-4 hover:text-rose-800 text-blue-500 font-semibold" onClick={ () => setTab(2)}>
            <span className="visible sm:invisible">2</span>
            <span className="invisible sm:visible">Static Site</span>
          </button>
        </li>
        <li className="mr-1">
          <button className="inline-block py-2 px-4 hover:text-rose-800 text-blue-500 font-semibold" onClick={ () => setTab(3)}>
            <span className="visible sm:invisible">3</span>
            <span className="invisible sm:visible">HTMX, WebSocket backend</span>
          </button>
        </li>
        <li className="mr-1">
          <button className="inline-block py-2 px-4 hover:text-rose-800 text-blue-500 font-semibold" onClick={ () => setTab(4)}>
            <span className="visible sm:invisible">4</span>
            <span className="invisible sm:visible">Client WebApp</span>
          </button>
        </li>
      </ul>

      <div id="Tab1" className="tab-content">
        <pre><code className="language-haskell">print &quot;Hello World&quot;</code></pre>
      </div>
      <div id="Tab2" className="overflow-y-scroll tab-content hidden">
        <pre><code className="language-haskell">import Servant<br />
          import Network.Wai.Handler.Warp (run)<br />
          import Network.HTTP.Types (status200)<br /><br />
          run 8080 $<br />
          &nbsp;&nbsp;\_ respond -&gt; respond $<br />
          &nbsp;&nbsp;&nbsp;&nbsp;responseLBS status200 [(&quot;Content-Type&quot;, &quot;text/html&quot;)] $<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;&lt;h1&gt;Hello World&lt;/h1&gt;&quot;<br />
        </code></pre>
      </div>
      <div id="Tab3" className="tab-content 32">
        <pre><code className="language-haskell">Source code for HTMX, WebSockets, Jinja.</code></pre>
      </div>
      <div id="Tab4" className="tab-content hidden">
        <pre><code className="language-elm">Client WebApp</code></pre>
      </div>
    </div>
  )
}



export default function CodingExample() {
  return (<>
  <section className="pt-6 h-96">
    <CodeEditor_2 />
  </section>
  </>)
}