import React from "react"
// import {Link} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

export default () => (
  <div>
    <Header />
    <div className="container">
      <div className="row justify-content-md">
        <div className="col-xs-6">
          <Post />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
