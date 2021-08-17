import 'tailwindcss/tailwind.css'
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() =>{
    const jssStyles = document.querySelector('#jss-styles')
    if( jssStyles ) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
