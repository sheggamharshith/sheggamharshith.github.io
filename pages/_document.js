import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const meta = {
    title: 'Harshith Sheggam',
    description: 'Harshith Sheggam Portfolio',
    image: '',
    author: 'Harshith Sheggam',
    date: ''
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="author" content={meta.author} />
        <meta name="date" content={meta.date} />
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@harshit675" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "3a6fa569eae44a0e9c878149c3e12a9c"}'
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
