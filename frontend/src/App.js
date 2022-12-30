import Header from "./header.js"
import Footer from "./footer.js"


function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <h1>JavaScript library for building <span className="font-style">error</span> logs and user interaction data. </h1>

          <div className="section_01">
            <h2>Subscribe to our bi-weekly newsletter</h2>
            <div className="form_grp">
                <form>
                    <input />
                </form>
                <button>Subscribe</button>
            </div>

          </div>

      </main>
     
      <Footer />
    </div>
  );
}

export default App;
