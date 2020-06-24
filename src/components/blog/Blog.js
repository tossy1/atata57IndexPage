import React from "react";
import { Link } from "react-router-dom";
// import "./css/owl.carousel.min.css"
// import "./css/owl.theme.default.min.css"
import "./style.css";
import Img1 from "./images/big_img_1.jpg";
import Img2 from "./images/img_h_1.jpg";
import Img3 from "./images/img_h_2.jpg";
import Img4 from "./images/img_h_3.jpg";
import Img5 from "./images/img_h_4.jpg";
import Img6 from "./images/img_v_1.jpg";
import Img7 from "./images/img_v_2.jpg";
import Img8 from "./images/img_v_3.jpg";
import Img9 from "./images/img_v_4.jpg";
import Img10 from "./images/person_1.jpg";
import Logo from "../logoComponents/headerLogo.png";

function Blog() {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 d-flex">
              <Link href="index.html" className="site-logo">
                <img src={Logo} />
              </Link>

              <Link
                href="#"
                className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </Link>
            </div>
            <div className="col-12 col-lg-6 ml-auto d-flex">
              <div className="ml-md-auto top-social d-none d-lg-inline-block">
                <Link href="#" className="d-inline-block p-3">
                  <span className="fab fa-facebook"></span>
                </Link>
                <Link href="#" className="d-inline-block p-3">
                  <span className="fab fa-twitter"></span>
                </Link>
                <Link href="#" className="d-inline-block p-3">
                  <span className="fab fa-instagram"></span>
                </Link>
              </div>
              <form action="#" className="search-form d-inline-block">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button type="submit" className="btn btn-secondary">
                    <span className="icon-search"></span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6 d-block d-lg-none text-right"></div>
          </div>
        </div>

        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li className="active">
                      <Link href="index.html" className="nav-link text-left">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="categories.html"
                        className="nav-link text-left"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="categories.html"
                        className="nav-link text-left"
                      >
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="categories.html"
                        className="nav-link text-left"
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="categories.html"
                        className="nav-link text-left"
                      >
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="categories.html"
                        className="nav-link text-left"
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="categories.html"
                        className="nav-link text-left"
                      >
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link href="contact.html" className="nav-link text-left">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section py-0">
        <div className="owl-carousel hero-slide owl-style">
          <div className="site-section">
            <div className="container">
              <div className="half-post-entry d-block d-lg-flex bg-light">
                <div className="img-bg"></div>
                <div className="contents">
                  <span className="caption">Editor's Pick</span>
                  <h2>
                    <a href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </a>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate vero obcaecati natus adipisci necessitatibus eius,
                    enim vel sit ad reiciendis. Enim praesentium magni delectus
                    cum, tempore deserunt aliquid quaerat culpa nemo veritatis,
                    iste adipisci excepturi consectetur doloribus aliquam
                    accusantium beatae?
                  </p>

                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">Food</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="half-post-entry d-block d-lg-flex bg-light">
                <div className="img-bg"></div>
                <div className="contents">
                  <span className="caption">Editor's Pick</span>
                  <h2>
                    <a href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </a>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate vero obcaecati natus adipisci necessitatibus eius,
                    enim vel sit ad reiciendis. Enim praesentium magni delectus
                    cum, tempore deserunt aliquid quaerat culpa nemo veritatis,
                    iste adipisci excepturi consectetur doloribus aliquam
                    accusantium beatae?
                  </p>

                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">Food</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h2>Editor's Pick</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="post-entry-1">
                    <Link href="post-single.html">
                      <img src={Img1} alt="Image" className="img-fluid" />
                    </Link>
                    <h2>
                      <a href="blog-single.html">
                        News Needs to Meet Its Audiences Where They Are
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi temporibus praesentium neque, voluptatum quam
                      quibusdam.
                    </p>
                    <div className="post-meta">
                      <span className="d-block">
                        <Link href="#">Dave Rogers</Link> in{" "}
                        <Link href="#">News</Link>
                      </span>
                      <span className="date-read">
                        Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                        <span className="icon-star2"></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-entry-2 d-flex bg-light">
                    <div className="thumbnail"></div>
                    <div className="contents">
                      <h2>
                        <Link href="blog-single.html">
                          News Needs to Meet Its Audiences Where They Are
                        </Link>
                      </h2>
                      <div className="post-meta">
                        <span className="d-block">
                          <Link href="#">Dave Rogers</Link> in{" "}
                          <Link href="#">News</Link>
                        </span>
                        <span className="date-read">
                          Jun 14 <span className="mx-1">&bullet;</span> 3 min
                          read <span className="icon-star2"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail"></div>
                    <div className="contents">
                      <h2>
                        <Link href="blog-single.html">
                          News Needs to Meet Its Audiences Where They Are
                        </Link>
                      </h2>
                      <div className="post-meta">
                        <span className="d-block">
                          <Link href="#">Dave Rogers</Link> in{" "}
                          <Link href="#">News</Link>
                        </span>
                        <span className="date-read">
                          Jun 14 <span className="mx-1">&bullet;</span> 3 min
                          read <span className="icon-star2"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail"></div>
                    <div className="contents">
                      <h2>
                        <Link href="blog-single.html">
                          News Needs to Meet Its Audiences Where They Are
                        </Link>
                      </h2>
                      <div className="post-meta">
                        <span className="d-block">
                          <Link href="#">Dave Rogers</Link> in{" "}
                          <Link href="#">News</Link>
                        </span>
                        <span className="date-read">
                          Jun 14 <span className="mx-1">&bullet;</span> 3 min
                          read <span className="icon-star2"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-title">
                <h2>Trending</h2>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">01</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">02</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">03</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">04</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <p>
                <Link href="#" className="more">
                  See All Trends{" "}
                  <span className="icon-keyboard_arrow_right"></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-0">
        <div className="container">
          <div className="half-post-entry d-block d-lg-flex bg-light">
            <div className="img-bg"></div>
            <div className="contents">
              <span className="caption">Editor's Pick</span>
              <h2>
                <Link href="blog-single.html">
                  News Needs to Meet Its Audiences Where They Are
                </Link>
              </h2>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate vero obcaecati natus adipisci necessitatibus eius,
                enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
                tempore deserunt aliquid quaerat culpa nemo veritatis, iste
                adipisci excepturi consectetur doloribus aliquam accusantium
                beatae?
              </p>

              <div className="post-meta">
                <span className="d-block">
                  <Link href="#">Dave Rogers</Link> in{" "}
                  <Link href="#">Food</Link>
                </span>
                <span className="date-read">
                  Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                  <span className="icon-star2"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Politics</h2>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail"></div>
                <div className="contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail"></div>
                <div className="contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail"></div>
                <div className="contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Business</h2>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail"></div>
                <div className="contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail"></div>
                <div className="contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail"></div>
                <div className="contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="section-title">
                <h2>Recent News</h2>
              </div>
              <div className="post-entry-2 d-flex">
                <div className="thumbnail order-md-2"></div>
                <div className="contents order-md-1 pl-0">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="post-entry-2 d-flex">
                <div className="thumbnail order-md-2"></div>
                <div className="contents order-md-1 pl-0">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="post-entry-2 d-flex">
                <div className="thumbnail order-md-2"></div>
                <div className="contents order-md-1 pl-0">
                  <span className="caption mb-4 d-block">Editor's Pick</span>
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="section-title">
                <h2>Popular Posts</h2>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">01</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">02</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="trend-entry d-flex">
                <div className="number align-self-start">03</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="trend-entry d-flex pl-0">
                <div className="number align-self-start">04</div>
                <div className="trend-contents">
                  <h2>
                    <Link href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <Link href="#">Dave Rogers</Link> in{" "}
                      <Link href="#">News</Link>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">&bullet;</span> 3 min read{" "}
                      <span className="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>

              <p>
                <Link href="#" className="more">
                  See All Popular{" "}
                  <span className="icon-keyboard_arrow_right"></span>
                </Link>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <ul className="custom-pagination list-unstyled">
                <li>
                  <Link href="#">1</Link>
                </li>
                <li className="active">2</li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section subscribe bg-light">
        <div className="container">
          <form action="#" className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <h2>Newsletter Subcribe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis aspernatur ut at quae omnis pariatur obcaecati
                possimus nisi ea iste!
              </p>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-secondary">
                  <span className="icon-paper-plane"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Blog;
