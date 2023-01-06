import Home from "./home/home.js"
import Blog from "./blog/blog.js"
import BlogPost from "./blog/blogPost.js"

import Header from "./header.js"
import Footer from "./footer.js"
import GettingStarted from "./docs/gettingStarted.js"
// import Toc from "./docs/tableOfContent"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            
            <Route index path="/" element={<Home />} />
            <Route  exact path="/blog" element={<Blog />} />
            <Route  path="/blog/:postId" element={<BlogPost />} />
            <Route  exact path="/docs/getting-started" element={<GettingStarted />} />
           
            
          </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
