import Link from 'next/link'

export function CuteLink({ href, children }: { href: string, children: string | JSX.Element }) {
  return <Link className="rounded-md px-0.5 border-dashed border-2 border-gray-200 bg-orange-200 dark:bg-orange-600 dark:border-gray-500 visited:text-primary" href={href}>{children}</Link>
}

export function FuddBrand() {
  return (<>
    <b className="text-primary-900 dark:text-primary-300"> FUDD</b>
  </>)
}

export function FuddEco() {
  return (<>
    <b className="text-primary-900 dark:text-primary-300"> FUDD</b> <em>ecosystem </em>
  </>)
}

export function NextPage({ destination, children }: { destination: string, children: string }) {
  return (
  <a href={destination} className="flex items-center justify-center px-4 h-10 text-base font-medium text-primary-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-primary-400 dark:hover:bg-gray-700 dark:hover:text-white">
    {children}
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
  )
}

export function PreviousPage({ destination, children }: { destination: string, children: string }) {
  return (
  <a href={destination} className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    {children}
  </a>
  )
}

export function InitialImage({ src, alt }: { src: string, alt: string }) {
  return (
    <img src={src} alt={alt} className="mt-6 mr-2 rounded-xl float-start w-[100px] border-dotted border-primary-100 dark:border-2" />
  )
}

