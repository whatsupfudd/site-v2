import Navigation from "~/components/navigation"

export default function FuddlePage() {
  return (<>
    <Navigation currentItem={"PROJECTS/FUDDLE"} />
    <section className="px-4 text-black dark:text-white">
      <h1 className="text-4xl text-center py-4 text-rose-900 dark:text-rose-400">Fuddle</h1>
      <h2 className="text-xl text-center pb-4">Your friendly lightweight functional language that loves a reliable web.</h2>
      <p className="py-4">
        Fuddle is a fork of the <a className="text-yellow-900 dark:text-yellow-400" href="https://elm-lang.org">Elm</a> language.
      </p>
    </section>
  </>)
}