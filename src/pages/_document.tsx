import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='dark:bg-gray-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500 p-8 mx-auto max-w-3xl'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
