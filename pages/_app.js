import 'tailwindcss/tailwind.css'
import React, { useEffect } from "react";
import { StoreProvider } from '../utils/Store';
import Router from "next/router";
import { useState } from "react";
import {
  PointSpreadLoading,
  DiamonLoading,
  SemipolarLoading,
  TransverseLoading,
  CircleToBlockLoading,
} from "react-loadingg";

function MyApp({ Component, pageProps }) {

 const [loading, setLoading] = useState(false);
 Router.events.on("routeChangeStart", () => {
   setLoading(true);
 });
 Router.events.on("routeChangeComplete", () => {
   setLoading(false);
 });



  useEffect(() =>{
    const jssStyles = document.querySelector('#jss-styles')
    if( jssStyles ) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      {loading && (
        <div>
          <DiamonLoading color='red' size='large' />
<CircleToBlockLoading/>
          {/* <TransverseLoading />
          <MeteorRainLoading /> */}
        </div>
      )}

      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  ); 
}

export default MyApp
