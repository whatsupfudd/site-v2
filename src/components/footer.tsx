
type FooterSection = {
  label : string
  , items : SiteLink[]
}

type SiteLink = {
  label : string
  , destUrl : string
}

const siteMapSections : FooterSection[] = [
  {
    label : "Foundation"
    , items : [
      { label : "About", destUrl : "/about" }
      , { label : "Examples", destUrl : "/examples" }
      , { label : "Tutorial", destUrl : "/tutorial" }
      , { label : "Documentation", destUrl : "/documentation" }
      , { label : "Blog", destUrl : "/blog" }
    ]
  }
  , {
    label : "Community"
    , items : [
      { label : "Discord Server", destUrl : "https://discord.com/whatsupfudd" }
      , { label : "GitHub", destUrl : "https://github.com/whatsupfudd" }
      , { label : "Twitter", destUrl : "https://twitter.com/whatsupfudd" }
      , { label : "Contact Us", destUrl : "/contact-us" }
    ]
  }
  , {
    label : "Legal"
    , items : [
      { label : "Privacy Policy", destUrl : "/privacy-policy" }
      , { label : "Terms & Conditions", destUrl : "terms-and-conditions" }
    ]
  }
]


function SiteMapSection({ label, items } : FooterSection) {
  return(<>
    <div className="lg:mx-auto">
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{ label }</h2>
    <ul className="text-gray-500 dark:text-gray-400">
        { items.map((item, idx) => {
          return(<li key={idx} className="mb-4">
            <a href={ item.destUrl } className="hover:underline">{ item.label }</a>
          </li>)
        })}
    </ul>
</div>
  </>)
}


function SiteMaps() {
  return(<>
    {
      siteMapSections.map((section, idx) => {
        return(<SiteMapSection key={idx} {...section} />)
      })
    }

 </>)
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2">
                  <a href="#" className="flex items-center mb-2 text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white">
                      <img src="/img/logo_1.png" alt="FUDD" className="w-8 h-8 mr-2" />
                      FUDD    
                  </a>
                  <p className="my-4 font-light text-gray-500 dark:text-gray-400">
                    FUDD is a community-driven project that aims to debunk the Fear, Uncertainty, and Doubt (FUD) that surrounds the development of webapps and websites using
                    functional programming systems such as Haskell, Elm and a ever-growing ecosystem of advanced tools.
                  </p>
              </div>
              <SiteMaps />
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2020-2024 FUDD foundation. All Rights Reserved.</span>
      </div>
    </footer>
  )
}