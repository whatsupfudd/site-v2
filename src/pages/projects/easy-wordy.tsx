import Navigation from "~/components/navigation"

export default function FuddlePage() {
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