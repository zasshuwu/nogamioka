import Main from "../components/main"

function MyApp({ Component, pageProps }) {
  return <>
    <Main></Main>
    <Component {...pageProps} />
  </>
  
}

export default MyApp
