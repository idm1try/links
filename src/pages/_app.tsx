import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const Website = ({ Component, pageProps, router }: AppProps) => (
  <div>
    <Head>
      <title>idm1try</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='idm1try' />
      <meta name='author' content='idm1try' />
      <meta name='twitter:title' content='idm1try' />
      <meta name='twitter:site' content='@idm1try' />
      <meta name='twitter:creator' content='@idm1try' />
      <meta property='og:site_name' content='idm1try' />
      <meta name='og:title' content='idm1try' />
      <meta property='og:type' content='website' />
    </Head>
    <Component {...pageProps} key={router.route} />
  </div>
)

export default Website
