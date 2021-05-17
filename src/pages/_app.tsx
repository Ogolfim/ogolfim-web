import { AppProps } from 'next/app'
import '../styles/fonts/HurmeGeometricSans1/styles.css'
import DataProvider from '../contexts'
import GlobalStyles from '../styles/global'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
      <GlobalStyles />
    </>
  )
}

export default MyApp
