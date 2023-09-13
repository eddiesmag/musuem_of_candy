import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import '../styles/App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNavbar');

      if (nav)
        nav.classList.toggle('scrolled', window.scrollY > nav.clientHeight);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav
        id="mainNavbar"
        className="navbar navbar-dark navbar-expand-md py-0 fixed-top fs-3 fw-lighter ps-3"
      >
        <a href="/" className="navbar-brand text-uppercase">
          Candy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navlinks"
          aria-controls="navlinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navlinks">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                TICKETS
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="container-fluid px-0">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              id="headingGroup"
              className="text-white text-center d-none d-lg-block mt-5"
            >
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
              <h1>
                MUSEUM <span>/</span>OF<span>/</span> CANDY
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src="media/hand2.png" alt="" />
          </div>
        </div>
      </section>
      <section className="container-fluid px-0">
        <div className="row align-items-center content">
          <div className="col-md-6 order-2 order-md-1">
            <img className="img-fluid" src="media/milk.png" alt="" />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-9 conte mb-5 mb-md-0">
                <h2>MUSEUM OF CANDY</h2>
                <img
                  src="media/lolli_icon.png"
                  alt=""
                  className="d-none d-lg-inline"
                />
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid, labore. Ab fugiat, corporis quisquam esse odit illo
                  dolor, consequuntur adipisci optio alias voluptatibus repellat
                  ad quas! Sit nam sequi voluptatibus?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center content">
          <div className="col-md-6 text-center">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-9 conte mb-5 mb-md-0">
                <h2>MUSEUM OF CANDY</h2>
                <img
                  src="media/lolli_icon.png"
                  alt=""
                  className="d-none d-lg-inline"
                />
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid, labore. Ab fugiat, corporis quisquam esse odit illo
                  dolor, consequuntur adipisci optio alias voluptatibus repellat
                  ad quas! Sit nam sequi voluptatibus?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="media/gumball.png" alt="" />
          </div>
        </div>
        <div className="row align-items-center content">
          <div className="col-md-6 order-2 order-md-1">
            <img className="img-fluid" src="media/sprinkles.png" alt="" />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-9 conte mb-5 mb-md-0">
                <h2>MUSEUM OF CANDY</h2>
                <img
                  src="media/lolli_icon.png"
                  alt=""
                  className="d-none d-lg-inline"
                />
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid, labore. Ab fugiat, corporis quisquam esse odit illo
                  dolor, consequuntur adipisci optio alias voluptatibus repellat
                  ad quas! Sit nam sequi voluptatibus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
