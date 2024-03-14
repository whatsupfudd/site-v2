import Navigation from "~/components/navigation"

export default function DaniellPage() {
  return (<>
    <Navigation currentItem={"DANIELL"} />
    <section className="text-black dark:text-white">
      <h1 className="text-4xl text-center py-4 text-rose-900 dark:text-rose-400">Daniell</h1>
      <h2 className="text-xl text-center pb-4">A fast and versatile website builder compatible with Hugo, Next.js and Gatsby.</h2>
      <p className="py-4">
        This is Daniell.
      </p>
    </section>
  </>)
}