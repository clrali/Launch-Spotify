import React, { createContext, useState } from "react";

const SecondaryTokenContext = createContext("");

function AccessTokenProvider({ children }) {
  const [accessToken, setAccessToken] = useState("");
  const obj = { accessToken: accessToken, setAccessToken: setAccessToken };
  console.log(obj)
  
  return (
    <SecondaryTokenContext.Provider value={obj}>
      {children}
    </SecondaryTokenContext.Provider>
  );
}

export default AccessTokenProvider;
export { SecondaryTokenContext };
