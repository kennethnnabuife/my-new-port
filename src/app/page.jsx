"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      closeMenu();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 20;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    reveal();
  }, []);

  return (
    <>
      <header className="header">
        <Link href="#home" className="logo-link">
          <div>
            <span className="logo-area">KEN</span>
            <span className="logo-part">NETH</span>
          </div>
        </Link>
        <div
          className={`bx ${isMenuOpen ? "bx-x" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            ></path>
          </svg>
        </div>
        <ul className={`navlist ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li>
            <Link href="#about">My Resume</Link>
          </li>
          <li>
            <Link href="#services">My Works</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
          <button className="hire">
            <Link href="#">Hire Me</Link>
          </button>
        </ul>
      </header>
      <section className="header2" style={{ position: "fixed" }}>
        <Link href="#home" className="logo-link2">
          <div>
            <span className="logo-area">KEN</span>
            <span className="logo-part">NETH</span>
          </div>
        </Link>
        <ul className="navlist2">
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li>
            <Link href="#about">My Resume</Link>
          </li>
          <li>
            <Link href="#services">My Works</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
          <li>
            <Link href="#contact">
              <img
                style={{ width: "25px", height: "25px" }}
                src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1715588576/github-mark-white_vlt9kl.png"
              />
            </Link>
          </li>
        </ul>
      </section>
      <section className="hero" id="hero">
        <div className="desktop-hero">
          <div className="hero-text">
            Fullstack web <span className="amazing">and</span> mobile developer
            <span className="amazing">!</span>👨‍💻
          </div>

          <div className="swiper-mobile" id="swiper-mobile">
            <div className="swiper-heading">Hear from my clients</div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{
                delay: 1700,
                disableOnInteraction: false,
              }}
              className="swiper"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="about-subsection-body">
                    <div className="testimony-content">
                      <div className="testimony">
                        "Guys I'm impressed with
                        <br />
                        my website, Great job"
                      </div>
                      <div className="testifier">CEO, Dietpage Foods.</div>
                    </div>
                    <img
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Best web design and web development company in Nigeria - Sabiweb"
                      className="test-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="about-subsection-body">
                    <div className="testimony-content">
                      <div className="testimony">
                        "I just went through the
                        <br />
                        website. very smooth"
                      </div>
                      <div className="testifier">Founder, Social Monkey.</div>
                    </div>
                    <img
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Sabiweb - Top web development company in Nigeria"
                      className="test-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="about-subsection-body">
                    <div className="testimony-content">
                      <div className="testimony">
                        "It's fast and i really love
                        <br />
                        the design"
                      </div>
                      <div className="testifier">CEO, Joel & Blaiks.</div>
                    </div>
                    <img
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      src="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Sabiweb (testimony) - Need a website for my business"
                      className="test-image"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>

          <div className="contact-div">
            <Link href="#about">
              <div className="learn-text">My Resume</div>
            </Link>
            <Link href="#contact" className="contact">
              <div className="contact-text">CONTACT ME</div>
            </Link>
          </div>
        </div>
        <div className="circle-part">
          <img
            src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1715582328/file_msrvrq.png"
            alt="Build website for my business"
            className="circleimg"
            id="aboutme"
          />
        </div>
      </section>
      <section className="about" id="about">
        <Link href="" className="about-contact-div">
          <div className="about-contact">Click to Download Resume</div>
          {/*<box-icon name="right-top-arrow-circle" className="arrow-about"></box-icon>*/}
        </Link>
        <div className="service-head">Core Skills</div>
        <h1 className="h1h1">
          <div className="skills">
            JavaScript | React.js | ReactNative | TypeScript | Express.js |
            Node.js | MongoDB | PHP | SQL
          </div>
        </h1>
      </section>
      <section className="services">
        <div className="service-right" id="services">
          Our Services
        </div>
        <div className="h1h1">
          <div className="sub-service-right">
            We offer full digital services including Web development, Search
            engine optimization and Digital marketing...
            <Link href="#cards" style={{ color: "#000", fontWeight: 500 }}>
              Explore
            </Link>
          </div>
        </div>
        <div className="cards" id="cards">
          <div className="icon-box">
            <img src="/Images/webdev-sabiweb.svg" alt="Sabiweb - Web design" />
            <div className="icon-box-head">Web development</div>
            <p>
              We have the best technical team you can find, specialized in areas
              such as: <br />
              Blogs and Personal websites, Business and Corporate websites, and
              E-commerce websites.
            </p>
            <div className="service-contact-div">
              <Link href="#contact" className="view-contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="icon-box">
            <img
              src="/Images/seo-sabiweb.svg"
              alt="search engine optimization - sabiweb"
            />
            <div className="icon-box-head">Search Engine Optimization</div>
            <p>
              To improve the appearance of your website in search results, we
              implement on-page SEO techniques. However, when you purchase any
              of our web development packages, you automatically get SEO
              implemented.
            </p>
            <div className="service-contact-div">
              <Link href="#contact" className="view-contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="icon-box">
            <img
              src="/Images/digital-sabiweb.svg"
              alt="digital-marketing-sabiweb"
            />
            <div className="icon-box-head">Digital marketing</div>
            <p>
              We've developed strategic methods to organically promote your
              products and services on various digital platforms including
              Social Media, E-mails and Search Engines through CPC, CPM, SEO,
              and SMM.
            </p>
            <div className="service-contact-div">
              <Link href="#contact" className="view-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="info-area">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0ece6"
            fillOpacity="1"
            d="M0,32L48,74.7C96,117,192,203,288,234.7C384,267,480,245,576,213.3C672,181,768,139,864,122.7C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="desktop-flex-2">
          <div className="info-img-div">
            <img
              src="/Images/web-development-nigeria.jpg"
              alt="Build a website in Nigeria"
              className="sabidev2"
            />
          </div>
          <div className="second-info-div">
            <div className="info-header">I'll give your site a modern look</div>
            <div className="info-content">
              <p className="info-p">
                At SabiWeb, we combine skilled and creative talents to produce
                jaw-dropping websites, with modern looks, from the user
                interface to a fantastic user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-desktop">
          <div className="mini-end" id="contact">
            Need help building your website?
          </div>
          <div className="mini-end-contact-div">
            <Link href="#contact" className="contact">
              <div className="contact-text">Contact Us</div>
            </Link>
          </div>
          <div className="small-contact-div">
            <div className="call-div">
              <i className="bx bx-phone-call contact-icons"></i>
              <Link href="tel:+2347030597812" className="call-space">
                07030597812
              </Link>
            </div>
            <div className="email-div">
              <i className="bx bx-envelope contact-icons"></i>
              <Link href="mailto:info@sabiweb.com" className="call-space">
                info@sabiweb.com
              </Link>
            </div>
          </div>
        </div>
        <div className="big-contact-div">
          <div className="form-header">Send us a message</div>
          <form action="https://formsubmit.co/info@sabiweb.com" method="POST">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              //required="required"
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              //required="required"
            />
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Phone"
              //required="required"
            />
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              //required="required"
            ></textarea>
            <button type="submit" className="submit-link">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section>
        <div className="credit-div">
          <Link href="" className="sabiweb-link">
            Developed by <span className="sabi">&nbsp;SABI</span>
            <span className="web">WEB</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
