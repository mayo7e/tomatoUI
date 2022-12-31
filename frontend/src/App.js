import Home from "./home/home.js"
import Blog from "./blog/blog.js"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>

            <Route index path="/" element={<Home />} />
            <Route  path="blog" element={<Blog />} />
            
          </Routes>
      </Router>
    
    </div>
  );
}

export default App;
