import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer.jsx/Footer";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            {/* Home page section start */}
              <Route path="/" element={<Home />}/>
            {/* Home page section end */}

            {/* About page start */}
              <Route path="/about" element={<About />} />
            {/* About page end */}


            {/* About page start */}
              <Route path="/Contact" element={<Contact />} />
            {/* About page end */}


          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
