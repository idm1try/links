import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='mx-auto max-w-3xl break-words p-8 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-gray-900 dark:text-zinc-300'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
