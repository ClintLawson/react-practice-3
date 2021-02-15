import React from 'react'
import AuthToDoApp from './AuthToDoApp' 
import * as msal from "@azure/msal-browser";
import { MsalProvider } from '@azure/msal-react';


const configuration = {
  auth: {
      clientId: "1877b32e-fba5-4a06-a0fd-6f867ba4ea01",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    // storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  // system:{
    // windowHashTimeout: 60000,
    // iframeHashTimeout: 6000,
    // loadFrameTimeout: 0,
    // asyncPopups: true
  // }
};

const pca = new msal.PublicClientApplication(configuration);

const Index = () => {
    return(
        <MsalProvider instance={pca}>
            <AuthToDoApp />
        </MsalProvider>

    )
}
export default Index