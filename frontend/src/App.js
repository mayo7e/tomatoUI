import Home from "./home/home.js"
import Blog from "./blog/blog.js"
import BlogPost from "./blog/blogPost.js"

import Header from "./header.js"
import Footer from "./footer.js"

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
            
          </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
