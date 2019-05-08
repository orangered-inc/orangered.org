import React from "react"
import logo from "./orangered.png"
import { Helmet } from "react-helmet"

export default () => (
  <div style={{ textAlign: "center" }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orangered, Inc</title>
      <link rel="canonical" href="https://www.orangered.org" />
    </Helmet>
    <a href="mailto:hello@orangered.org">
      <img style={{ width: "40%" }} src={logo} alt="Orangered" />
    </a>
  </div>
)
