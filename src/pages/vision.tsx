'use client'
import Navigation from "~/components/navigation"
import Footer from "~/components/footer"
import { ShowImplementation } from "~/components/implItems"

export default function IntroSection() {
  return (<>
    <Navigation currentItem={"VISION"} isLogged={false} />
    <section className="p-8 text-gray-900 dark:text-gray-100">

      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Introduction</h2>
      <p>
        <b className="text-rose-900 dark:text-rose-300">FUDD</b> is an <em>ecosystem</em> for the web. It is made of:
      </p>
      <ul className="ml-4 mt-2 max-w-lg space-y-1 text-black list-disc list-inside dark:text-white">
        <li>a <span className="dark:text-rose-300">vision</span></li>
        <li>programming languages</li>
        <li>interpreters, compilers, debuggers.</li>
        <li>runtime models</li>
        <li>Web frameworks</li>
        <li>packages, versioning and repositories.</li>
        <li>documentation</li>
        <li>tutorials</li>
        <li>a <span className="text-yellow-700 dark:text-yellow-300">community</span></li>
      </ul>
      <h2 className="pt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Vision</h2>
      <p>
        The goal for the <b className="text-rose-900 dark:text-rose-300">FUDD</b> ecosystem is to provide a great environment to
        produce content and applications that will exist in the web.  More concretely, it means we are looking for a holistic solution
        that provides us with a powerful set of features:
      </p>
      <ul className="ml-4 mt-2 max-w-lg space-y-1 text-black list-disc list-inside dark:text-white">
        <li>always web-enabled</li>
        <li>always DB-enabled context</li>
        <li>transactional computations, ie the runtime context is always storable (<i>a la Smalltalk</i>)</li>
        <li>open-sourced and versioned, which implies there&apos;s also a repository system</li>
        <li>functional logic</li>
        <li>distributed computing at micro- and macro-levels</li>
        <li>bug-free coding approach</li>
        <li>user interface expressed with HTML/CSS</li>
        <li>implicit, linear and explicit memory models</li>
        <li>best-of-class access for logic expressivity</li>
        <li>always multi-media, streaming, 3D ready</li>
        <li>readily accessible, up-to-date documentation that is based on the ecosystem capabilities (web-friendly, multi-media, streamable, etc...)</li>
        <li>large amount of tutorials together with a playground environment</li>
      </ul>
      <h2 className="pt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Implementation</h2>
      <p>
        Construct a whole ecosystem from scratch will require an insane amount of resources and time.
        We have neither... so naturally we will build the <b className="text-rose-900 dark:text-rose-300">FUDD</b> ecosystem
        by first assembling existing open-source projects, evaluating how they may be lacking compared to our objectives
        and finally by evolving them through a community effort.
      </p>
      <div className="mb-6">
      </div>
      <ShowImplementation />
    </section>
    <Footer />
  </>)
}