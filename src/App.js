import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import htmlContent from 'views/page2.html';
function App() {
  return (
    <Router>
      <nav class="navbar bg-body-tertiary px-5">
        <div class="">
          <a class="navbar-brand">Logo</a>
          
        </div>
        <div class="d-flex" role="search">
           sdasd
          </div>
      </nav>
      <div class="row mt-5"></div>
      <div class="container ">
        <div class="row mt-5">
          <div class="col-4 mr-5" >
            <div class="d-grid gap-2 template">
            </div>
          </div>
         
          <div class="col-7 m-auto">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">Design</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/page2">Your Infomation</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/Media">Social Media</a>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>
            <div class="mt-5"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/Media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Page2() {
  return (
    <h1>page2</h1>
  );
}

function Home() {
  return (
    <div class="container border border-1 border-custom">
      <div class="mt-3"></div>
      <div class="container">
        <h1>Template</h1>
        <div class="mt-3"></div>
        <div class="d-flex justify-content-center flex-wrap">
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
       
        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
        </div>
        <h3>Color: </h3>
        <div class="mt-3"></div>
        <div class="d-flex justify-content-center flex-wrap">
          <div class="block col-12 m-2"> <h3>Color: </h3></div>
       
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
       
        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
          <div class="block col-4 m-2"></div>
        </div>
      </div>
      <div class="m-3"></div>
    </div>
  );
}

function Media() {
  return <h1>media</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
