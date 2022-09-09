import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Chakra from '../components/chakra';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='idm1try' />
        <title>idm1try</title>
      </Head>

      <motion.div
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        <Component {...pageProps} key={router.route} />
      </motion.div>
    </Chakra>
  );
}

export default Website;
