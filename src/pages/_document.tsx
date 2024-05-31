import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <meta name="description" content="Fear, Uncertainty, Doubt: Debunked! (FUDD)" />
        <link rel="icon" href="/img/favicon.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/css/prism.css" />
      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" async></script>
        <script src="/js/modeSwitcher.js" async></script>
        <script src="/js/prism.js" async></script>
      </body>
    </Html>
  )
}
