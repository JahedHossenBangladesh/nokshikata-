import 'tailwindcss/tailwind.css'
import React, { useEffect } from "react";
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() =>{
    const jssStyles = document.querySelector('#jss-styles')
    if( jssStyles ) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  ); 
}

export default MyApp
