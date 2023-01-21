import React from "react"
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./home/home.js"
import Blog from "./blog/blog.js"
import BlogPost from "./blog/blogPost.js"

import Header from "./header.js"
import CallbackPage from "./callback-page.js"
import Footer from "./footer.js"
import GettingStarted from "./docs/gettingStarted.js"

import PageLoader from "./components/navigation/page-loader"


import {Route, Routes} from "react-router-dom"




function App() {

  const {isLoading} = useAuth0()
  
  if(isLoading){
    return(
      <div>
        <PageLoader />
      </div>
    )
  }
  
  return (
    <div className="App">
     
        <Header />
          <Routes>
            
            <Route index path="/" element={<Home />} />
            <Route  exact path="/blog" element={<Blog />} />
            <Route  exact path="/callback" element={<CallbackPage />} />
            <Route  path="/blog/:postId" element={<BlogPost />} />
            <Route  exact path="/docs/getting-started" element={<GettingStarted />} />
           
            
          </Routes>
        <Footer />
        
    
    </div>
  );
}

export default App;
