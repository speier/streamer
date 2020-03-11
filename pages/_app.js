import Head from 'next/head'
import 'video.js/dist/video-js.css'
import '@videojs/themes/dist/forest/index.css'
import '../styles/index.css'

function StreamerApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default StreamerApp
