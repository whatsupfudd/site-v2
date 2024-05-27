import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';


export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <meta name="description" content="Fear, Uncertainty, Doubt: Debunked! (FUDD)" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" async></script>
        <script src="/js/modeSwitcher.js" async></script>
        <Analytics />
      </body>
    </Html>
  )
}
