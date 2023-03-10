// type imports
import type { AppProps } from 'next/app'

// named imports
import { domAnimation, LazyMotion } from 'framer-motion'

// style imports
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp
