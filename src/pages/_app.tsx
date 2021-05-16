import { AppProps } from 'next/app'
import '../styles/fonts/HurmeGeometricSans1/styles.css'
import GlobalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
