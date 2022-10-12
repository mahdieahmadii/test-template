import "./App.css";
import myImg from "./images/logo.png";
import iphoneImg from "./images/iphone.png";
import demoImg from "./images/demo-image.png";
import { createElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

function App() {
  return (
    // <div>
    //   <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="icon ion-md-menu"></span>
    //     </button>
    //     <img
    //       src={myImg}
    //       className="img-fluid nav-logo-mobile"
    //       alt="Company Logo"
    //     />
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <div className="container">
    //         <img
    //           src={myImg}
    //           className="img-fluid nav-logo-desktop"
    //           alt="Company Logo"
    //         />
    //         <ul
    //           className="navbar-nav ml-auto nav-right"
    //           data-easing="easeInOutExpo"
    //           data-speed="1250"
    //           data-offset="65"
    //         >
    //           <li className="nav-item nav-custom-link">
    //             <a className="nav-link" href="index.html">
    //               Home{" "}
    //               <i className="icon ion-ios-arrow-forward icon-mobile"></i>
    //             </a>
    //           </li>
    //           <li className="nav-item nav-custom-link">
    //             <a className="nav-link" href="#marketing">
    //               Features{" "}
    //               <i className="icon ion-ios-arrow-forward icon-mobile"></i>
    //             </a>
    //           </li>
    //           <li className="nav-item nav-custom-link">
    //             <a className="nav-link" href="#testimonials">
    //               Testimonials{" "}
    //               <i className="icon ion-ios-arrow-forward icon-mobile"></i>
    //             </a>
    //           </li>
    //           <li className="nav-item nav-custom-link">
    //             <a className="nav-link" href="#pricing">
    //               Pricing <i class="icon ion-ios-arrow-forward icon-mobile"></i>
    //             </a>
    //           </li>
    //           <li className="nav-item nav-custom-link btn btn-demo-small">
    //             <a className="nav-link" href="#">
    //               Try for Free{" "}
    //               <i className="icon ion-ios-arrow-forward icon-mobile"></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //   <section id="hero">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
    //           <img src={iphoneImg} className="img-fluid" alt="Demo image"></img>
    //         </div>
    //         <div className="col-md-7 content-box hero-content">
    //           <span>Unlimited Data</span>
    //           <h1>
    //             Digital Innovation and the <b>Future of Digital Marketing</b>
    //           </h1>
    //           <p>
    //             Boost your digital marketing campaigns and increase your
    //             conversion rates
    //           </p>
    //           <a href="#" class="btn btn-regular">
    //             Learn more
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="marketing">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-md-5">
    //           <div class="content-box">
    //             <span>Organic Search Report</span>
    //             <h2>Search Insights</h2>
    //             <p>
    //               Grow your search traffic, research your competitors keywords
    //               and monitor your ranking in real time.
    //             </p>
    //             <a href="#" class="btn btn-regular">
    //               Start Free Trial
    //             </a>
    //           </div>
    //         </div>
    //         <div class="col-md-7">
    //           <img src={demoImg} class="img-fluid" alt="Demo image"></img>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="testimonials">
    //     <div class="container">
    //       <div class="title-block">
    //         <h2>The Best Digital Agencies Recommend Our Software</h2>
    //         <p>
    //           Industry experts mention their experience using our software and
    //           the excellent results they have achieved
    //         </p>
    //       </div>
    //       <div class="row">
    //         <div class="col-md-6">
    //           <div class="testimonial-box">
    //             <div class="row personal-info">
    //               <div class="col-md-2 col-xs-2">
    //                 <div class="profile-picture review-one"></div>
    //               </div>
    //               <div class="col-md-10 col-xs-10">
    //                 <h6>
    //                   Joshua M. Salas{" "}
    //                   <span class="rating">
    //                     5 <i class="icon ion-md-star"></i>
    //                   </span>
    //                 </h6>
    //                 <small>
    //                   Marketing Intelligence | Author & Content Creator
    //                 </small>
    //               </div>
    //             </div>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               Curabitur scelerisque, tortor nec mattis feugiat, velit purus
    //               euismod odio, quis vulputate velit urna sit amet enim.
    //               Maecenas vulputate auctor ligula sed sollicitudin.
    //             </p>
    //           </div>
    //         </div>
    //         <div class="col-md-6">
    //           <div class="testimonial-box">
    //             <div class="row personal-info">
    //               <div class="col-md-2 col-xs-2">
    //                 <div class="profile-picture review-one"></div>
    //               </div>
    //               <div class="col-md-10 col-xs-10">
    //                 <h6>
    //                   Michael Edwards{" "}
    //                   <span class="rating">
    //                     5 <i class="icon ion-md-star"></i>
    //                   </span>
    //                 </h6>
    //                 <small>Seo Consultant | Author & Content Creator</small>
    //               </div>
    //             </div>
    //             <p>
    //               In euismod, metus ac elementum tincidunt, dui eros ullamcorper
    //               lorem, at euismod augue augue quis leo. Fusce non dui augue.
    //               In hac habitasse platea dictumst. Mauris quis lacinia mauris.
    //               Proin ut pretium quam. Nam at ex finibus.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="pricing">
    //     <div class="container">
    //       <div class="title-block">
    //         <h2>Plans and Pricing</h2>
    //         <p>
    //           The best software to develop perfect content and advertising
    //           strategies to increase leads and sales.
    //         </p>
    //       </div>
    //       <div class="row">
    //         <div class="col-md-4">
    //           <div class="pricing-box">
    //             <h3 class="demo">Demo Version</h3>
    //             <h6>Free</h6>
    //             <small>forever</small>
    //             <p>Demo gives you full access to all features for 7 days</p>
    //             <div class="divider-light"></div>
    //             <ul>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline demo"></i>
    //                 Marketing plan
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline demo"></i>Seo
    //                 reporting tool
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline demo"></i>
    //                 Keywords explorer
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline demo"></i>
    //                 Competitive analysis
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline demo"></i>
    //                 Five projects - <span class="demo">¡New!</span>
    //               </li>
    //             </ul>
    //             <div class="text-center">
    //               <a href="#" class="btn btn-demo">
    //                 Demo version
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-md-4">
    //           <div class="pricing-box">
    //             <h3>Standard Version</h3>
    //             <h6>$9</h6>
    //             <small>per month</small>
    //             <p>Outrank your competitors with this amazing software</p>
    //             <div class="divider-light"></div>
    //             <ul>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>
    //                 Marketing plan
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>Seo
    //                 reporting tool
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>Keywords
    //                 explorer
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>
    //                 Competitive analysis
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>
    //                 Unlimited projects - <span>¡New!</span>
    //               </li>
    //             </ul>
    //             <div class="text-center">
    //               <a href="#" class="btn btn-buy">
    //                 Buy now
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-md-4">
    //           <div class="pricing-box">
    //             <h3>Agency Version</h3>
    //             <h6>$29</h6>
    //             <small>per month</small>
    //             <p>For agencies and businesses with extensive web presence</p>
    //             <div class="divider-light"></div>
    //             <ul>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>
    //                 Marketing plan
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>Seo
    //                 reporting tool
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>Keywords
    //                 explorer
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>
    //                 Competitive analysis
    //               </li>
    //               <li>
    //                 <i class="icon ion-md-checkmark-circle-outline"></i>
    //                 Unlimited projects - <span>¡New!</span>
    //               </li>
    //             </ul>
    //             <div class="text-center">
    //               <a href="#" class="btn btn-buy">
    //                 Buy now
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="call-to-action">
    //     <div class="container text-center">
    //       <h2>Increase your conversion rates now</h2>
    //       <div class="title-block">
    //         <p>
    //           Learn how to increase both your online and offline conversion
    //           rates and boost your sales and profits.
    //         </p>
    //         <a href="#" class="btn btn-regular">
    //           Get Started
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    //   <footer>
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-md-3">
    //           <h5>Seo Ranking</h5>
    //           <ul>
    //             <li>
    //               <a href="#">Pricing</a>
    //             </li>
    //             <li>
    //               <a href="#">Affiliate Program</a>
    //             </li>
    //             <li>
    //               <a href="#">Developer API</a>
    //             </li>
    //             <li>
    //               <a href="#">Support</a>
    //             </li>
    //             <li>
    //               <a href="#">Video Tutorials</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="col-md-3">
    //           <h5>Main Tools</h5>
    //           <ul>
    //             <li>
    //               <a href="#">Rank Tracker</a>
    //             </li>
    //             <li>
    //               <a href="#">Backlink Checker</a>
    //             </li>
    //             <li>
    //               <a href="#">Keyword Generator</a>
    //             </li>
    //             <li>
    //               <a href="#">Serp Checker</a>
    //             </li>
    //             <li>
    //               <a href="#">Site Audit</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="col-md-3">
    //           <h5>Blog</h5>
    //           <ul>
    //             <li>
    //               <a href="#">Get High Quality Backlinks</a>
    //             </li>
    //             <li>
    //               <a href="#">Top Google Searches</a>
    //             </li>
    //             <li>
    //               <a href="#">Avoid Google Penalties</a>
    //             </li>
    //             <li>
    //               <a href="#">White Hat SEO Tips</a>
    //             </li>
    //             <li>
    //               <a href="#">Google Trends</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="col-md-3">
    //           <h5>Company</h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //             Curabitur scelerisque, tortor nec mattis feugiat, velit purus
    //             euismod odio, quis vulputate velit urna.
    //           </p>
    //           <p>
    //             <a href="mailto:sales@theseocompany.com" class="external-links">
    //               sales@theseocompany.com
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //       <div class="divider"></div>
    //       <div class="row">
    //         <div class="col-md-6 col-xs-12">
    //           <a href="#">
    //             <i class="icon ion-logo-facebook"></i>
    //           </a>
    //           <a href="#">
    //             <i class="icon ion-logo-instagram"></i>
    //           </a>
    //           <a href="#">
    //             <i class="icon ion-logo-twitter"></i>
    //           </a>
    //           <a href="#">
    //             <i class="icon ion-logo-youtube"></i>
    //           </a>
    //         </div>
    //         <div class="col-md-6 col-xs-12">
    //           <small>
    //             2018 &copy; All rights reserved. Made by{" "}
    //             <a
    //               href="http://templune.com/"
    //               target="blank"
    //               class="external-links"
    //             >
    //               Templune
    //             </a>
    //           </small>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    createElement("div", { className: "main" }, [
      createElement(
        "nav",
        {
          className:
            "navbar navbar-default navbar-expand-lg fixed-top custom-navbar",
        },
        [
          createElement("button", { className: "navbar-toggler" }, [
            createElement("span", { className: "icon ion-md-menu" }, []),
          ]),
          createElement("img", {
            className: "img-fluid nav-logo-mobile",
            src: myImg,
            alt: "Company Logo",
          }),
          createElement(
            "div",
            { className: "collapse navbar-collapse", id: "navbarNavDropdown" },
            [
              createElement("div", { className: "container" }, [
                createElement("img", {
                  src: myImg,
                  className: "img-fluid nav-logo-desktop",
                  alt: "Company Logo",
                }),
                createElement(
                  "ul",
                  { className: "navbar-nav ml-auto nav-right" },
                  [
                    createElement(
                      "li",
                      { className: "nav-item nav-custom-link" },
                      [
                        createElement(
                          "a",
                          { className: "nav-link", href: "index.html" },
                          [
                            "Home",
                            createElement("i", {
                              className:
                                "icon ion-ios-arrow-forward icon-mobile",
                            }),
                          ]
                        ),
                      ]
                    ),
                    createElement(
                      "li",
                      { className: "nav-item nav-custom-link" },
                      [
                        createElement(
                          "a",
                          { className: "nav-link", href: "index.html" },
                          [
                            "Features",
                            createElement("i", {
                              className:
                                "icon ion-ios-arrow-forward icon-mobile",
                            }),
                          ]
                        ),
                      ]
                    ),
                    createElement(
                      "li",
                      { className: "nav-item nav-custom-link" },
                      [
                        createElement(
                          "a",
                          { className: "nav-link", href: "index.html" },
                          [
                            "Testimonials",
                            createElement("i", {
                              className:
                                "icon ion-ios-arrow-forward icon-mobile",
                            }),
                          ]
                        ),
                      ]
                    ),
                    createElement(
                      "li",
                      { className: "nav-item nav-custom-link" },
                      [
                        createElement(
                          "a",
                          { className: "nav-link", href: "index.html" },
                          [
                            "Pricing",
                            createElement("i", {
                              className:
                                "icon ion-ios-arrow-forward icon-mobile",
                            }),
                          ]
                        ),
                      ]
                    ),
                    createElement(
                      "li",
                      {
                        className:
                          "nav-item nav-custom-link btn btn-demo-small",
                      },
                      [
                        createElement(
                          "a",
                          {
                            className: "nav-link",
                            href: "index.html",
                          },
                          [
                            "Try for Free",
                            createElement("i", {
                              className:
                                "icon ion-ios-arrow-forward icon-mobile",
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]
      ),
      createElement("section", { id: "hero" }, [
        createElement("div", { className: "container" }, [
          createElement("div", { className: "row" }, [
            createElement(
              "div",
              { className: "col-lg-5 col-md-5 col-sm-5 col-xs-5" },
              [
                createElement("img", {
                  className: "img-fluid",
                  alt: "Demo image",
                  src: iphoneImg,
                }),
              ]
            ),
            createElement(
              "div",
              { className: "col-md-7 content-box hero-content" },
              [
                createElement("span", {}, ["Unlimited Data"]),
                createElement("h1", {}, [
                  "Digital Innovation and the ",
                  createElement("b", {}, ["Future of Digital Marketing"]),
                ]),
                createElement("p", {}, [
                  "Boost your digital marketing campaigns and increase your conversion rates",
                ]),
                createElement(
                  "a",
                  { href: "#", className: "btn btn-regular" },
                  ["Learn more"]
                ),
              ]
            ),
          ]),
        ]),
      ]),
      createElement("section", { id: "marketing" }, [
        createElement("div", { className: "container" }, [
          createElement("div", { className: "row" }, [
            createElement("div", { className: "col-md-5" }, [
              createElement("div", { className: "content-box" }, [
                createElement("span", {}, ["Organic Search Report"]),
                createElement("h2", {}, ["Search Insights"]),
                createElement("p", {}, [
                  "Grow your search traffic, research your competitors keywords and monitor your ranking in real time.",
                ]),
                createElement(
                  "a",
                  { href: "#", className: "btn btn-regular" },
                  ["Start Free Trial"]
                ),
              ]),
            ]),
            createElement("div", { className: "col-md-7" }, [
              createElement("img", {
                className: "img-fluid",
                alt: "Demo image",
                src: demoImg,
              }),
            ]),
          ]),
        ]),
      ]),
      createElement("section", { id: "testimonials" }, [
        createElement("div", { className: "container" }, [
          createElement("div", { className: "title-block" }, [
            createElement("h2", {}, [
              "The Best Digital Agencies Recommend Our Software",
            ]),
            createElement("p", {}, [
              "Industry experts mention their experience using our software and the excellent results they have achieved",
            ]),
          ]),
          createElement("div", { className: "row" }, [
            createElement("div", { className: "col-md-6" }, [
              createElement("div", { className: "testimonial-box" }, [
                createElement("div", { className: "row personal-info" }, [
                  createElement("div", { className: "col-md-2 col-xs-2" }, [
                    createElement(
                      "div",
                      { className: "profile-picture review-one" },
                      []
                    ),
                  ]),
                  createElement("div", { className: "col-md-10 col-xs-10" }, [
                    createElement(
                      "h6",
                      {},
                      ["Joshua M. Salas "],
                      createElement("span", { className: "rating" }, [
                        "5",
                        createElement(
                          "i",
                          { className: "icon ion-md-star" },
                          []
                        ),
                      ])
                    ),
                    createElement("small", {}, [
                      "Marketing Intelligence | Author & Content Creator",
                    ]),
                  ]),
                ]),
                createElement("p", {}, [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna sit amet enim. Maecenas vulputate auctor ligula sed sollicitudin.",
                ]),
              ]),
            ]),
            createElement("div", { className: "col-md-6" }, [
              createElement("div", { className: "testimonial-box" }, [
                createElement("div", { className: "row personal-info" }, [
                  createElement("div", { className: "col-md-2 col-xs-2" }, [
                    createElement(
                      "div",
                      { className: "profile-picture review-one" },
                      []
                    ),
                  ]),
                  createElement("div", { className: "col-md-10 col-xs-10" }, [
                    createElement(
                      "h6",
                      {},
                      ["Michael Edwards "],
                      createElement("span", { className: "rating" }, [
                        "5",
                        createElement(
                          "i",
                          { className: "icon ion-md-star" },
                          []
                        ),
                      ])
                    ),
                    createElement("small", {}, [
                      "Seo Consultant | Author & Content Creator",
                    ]),
                  ]),
                ]),
                createElement("p", {}, [
                  "In euismod, metus ac elementum tincidunt, dui eros ullamcorper lorem, at euismod augue augue quis leo. Fusce non dui augue. In hac habitasse platea dictumst. Mauris quis lacinia mauris. Proin ut pretium quam. Nam at ex finibus.",
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      createElement("section", { id: "pricing" }, [
        createElement("div", { className: "container" }, [
          createElement("div", { className: "title-block" }, [
            createElement("h2", {}, ["Plans and Pricing"]),
            createElement("p", {}, [
              "The best software to develop perfect content and advertising strategies to increase leads and sales.",
            ]),
          ]),
          createElement("div", { className: "row" }, [
            createElement("div", { className: "col-md-4" }, [
              createElement("div", { className: "pricing-box" }, [
                createElement("h3", { className: "demo" }, ["Demo Version"]),
                createElement("h6", {}, ["Free"]),
                createElement("small", {}, ["forever"]),
                createElement("p", {}, [
                  "Demo gives you full access to all features for 7 days",
                ]),
                createElement("div", { className: "divider-light" }, []),
                createElement("ul", {}, [
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Marketing plan",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "reporting tool",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Keywords explorer",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Competitive analysis",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Five projects - ",
                    createElement("span", { className: "demo" }, ["¡New!"]),
                  ]),
                ]),
                createElement("div", { className: "text-center" }, [
                  createElement("a", { className: "btn btn-demo", href: "#" }, [
                    "Demo version",
                  ]),
                ]),
              ]),
            ]),
            createElement("div", { className: "col-md-4" }, [
              createElement("div", { className: "pricing-box" }, [
                createElement("h3", {}, ["Standard Version"]),
                createElement("h6", {}, ["$9"]),
                createElement("small", {}, ["per month"]),
                createElement("p", {}, [
                  "Outrank your competitors with this amazing software",
                ]),
                createElement("div", { className: "divider-light" }, []),
                createElement("ul", {}, [
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Marketing plan",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "reporting tool",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Keywords explorer",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Competitive analysis",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Unlimited projects - ",
                    createElement("span", { className: "demo" }, ["¡New!"]),
                  ]),
                ]),
                createElement("div", { className: "text-center" }, [
                  createElement("a", { className: "btn btn-demo", href: "#" }, [
                    "Buy now",
                  ]),
                ]),
              ]),
            ]),
            createElement("div", { className: "col-md-4" }, [
              createElement("div", { className: "pricing-box" }, [
                createElement("h3", {}, ["Agency Version"]),
                createElement("h6", {}, ["$29"]),
                createElement("small", {}, ["per month"]),
                createElement("p", {}, [
                  "For agencies and businesses with extensive web presence",
                ]),
                createElement("div", { className: "divider-light" }, []),
                createElement("ul", {}, [
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Marketing plan",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "reporting tool",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Keywords explorer",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Competitive analysis",
                  ]),
                  createElement("li", {}, [
                    createElement(
                      "i",
                      {
                        className: "icon ion-md-checkmark-circle-outline demo",
                      },
                      []
                    ),
                    "Unlimited projects - ",
                    createElement("span", { className: "demo" }, ["¡New!"]),
                  ]),
                ]),
                createElement("div", { className: "text-center" }, [
                  createElement("a", { className: "btn btn-demo", href: "#" }, [
                    "Buy now",
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      createElement("section", { id: "call-to-action" }, [
        createElement("div", { className: "container text-center" }, [
          createElement("h2", {}, ["Increase your conversion rates now"]),
          createElement("div", { className: "title-block" }, [
            createElement("p", {}, [
              "Learn how to increase both your online and offline conversion rates and boost your sales and profits.",
            ]),
            createElement("a", { className: "btn btn-regular", href: "#" }, [
              "Get Started",
            ]),
          ]),
        ]),
      ]),
      createElement("footer", {}, [
        createElement("div", { className: "container" }, [
          createElement("div", { className: "row" }, [
            createElement("div", { className: "col-md-3" }, [
              createElement("h5", {}, ["Seo Ranking"]),
              createElement("ul", {}, [
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Pricing"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Affiliate Program"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Developer API"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Support"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Video Tutorials"]),
                ]),
              ]),
            ]),
            createElement("div", { className: "col-md-3" }, [
              createElement("h5", {}, ["Main Tools"]),
              createElement("ul", {}, [
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Rank Tracker"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Backlink Checker"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Keyword Generator"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Serp Checker"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Site Audit"]),
                ]),
              ]),
            ]),
            createElement("div", { className: "col-md-3" }, [
              createElement("h5", {}, ["Blog"]),
              createElement("ul", {}, [
                createElement("li", {}, [
                  createElement("a", { href: "#" }, [
                    "Get High Quality Backlinks",
                  ]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Top Google Searches"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Avoid Google Penalties"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["White Hat SEO Tips"]),
                ]),
                createElement("li", {}, [
                  createElement("a", { href: "#" }, ["Google Trends"]),
                ]),
              ]),
            ]),
            createElement("div", { className: "col-md-3" }, [
              createElement("h5", {}, ["Company"]),
              createElement("p", {}, [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna.",
              ]),
              createElement("p", {}, [
                createElement(
                  "a",
                  {
                    className: "external-links",
                    href: "mailto:sales@theseocompany.com",
                  },
                  ["sales@theseocompany.com"]
                ),
              ]),
            ]),
          ]),
          createElement("div", { className: "divider" }, []),
          createElement("div", { className: "row" }, [
            createElement("div", { className: "col-md-6 col-xs-12" }, [
              createElement("a", { href: "#" }, [
                createElement("i", { className: "icon ion-logo-facebook" }, []),
              ]),
              createElement("a", { href: "#" }, [
                createElement("i", { className: "icon ion-logo-facebook" }, []),
              ]),
              createElement("a", { href: "#" }, [
                createElement("i", { className: "icon ion-logo-facebook" }, []),
              ]),
              createElement("a", { href: "#" }, [
                createElement("i", { className: "icon ion-logo-facebook" }, []),
              ]),
            ]),
            createElement("div", { className: "col-md-6 col-xs-12" }, [
              createElement("small", {}, [
                "2018 &copy; All rights reserved. Made by ",
                createElement(
                  "a",
                  {
                    href: "http://templune.com/",
                    target: "blank",
                    className: "external-links",
                  },
                  ["Templune"]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  );
}

export default App;
