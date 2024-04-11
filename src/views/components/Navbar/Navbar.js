import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isShowModalSearch, setIsShowModalSearch] = useState(false);

  const toggleShowModal = () => {
    setIsShowModalSearch(!isShowModalSearch);
  };

  return (
    <div className="container-fluid fixed-top">
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
              <a
                href="#"
                className="text-white link-underline link-underline-opacity-0"
              >
                My Dinh, Ha Noi
              </a>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <a href="#" className="text-white">
                ndt13102003@Example.com
              </a>
            </small>
          </div>
          <div className="top-link pe-2">
            <a href="#" className="text-white">
              <small className="text-white mx-2">Privacy Policy</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white mx-2">Terms of Use</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white ms-2">Sales and Refunds</small>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary display-6">Fruitables</h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/shop" className="nav-item nav-link">
                Shop
              </Link>
              <Link to="/shopdetail" className="nav-item nav-link">
                Shop Detail
              </Link>
              <div className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a href="cart.html" className="dropdown-item">
                    Cart
                  </a>
                  <a href="chackout.html" className="dropdown-item">
                    Chackout
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                onClick={toggleShowModal}
              >
                <i className="fas fa-search text-primary"></i>
              </button>
              <a href="#" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-bag fa-2x"></i>
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: "-5px",
                    left: "15px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  3
                </span>
              </a>
              <a href="./src/html/login.html" className="my-auto">
                <i className="fas fa-user fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;