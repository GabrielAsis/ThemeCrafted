import React from "react";
import "./Gig.scss";

import { sampleTheme, sampleProfile, sampleThemePhone } from "../../assets";

import { Star, Download, Layers, MessageSquareMore } from "lucide-react";

import { themes } from "../../data";
import { Link } from "react-router-dom";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="preview">
              <img className="desktop" src={sampleTheme} alt="" />
              <img className="phone" src={sampleThemePhone} alt="" />
            </div>

            {/* Right side content will be positioned here on mobile */}
            <div className="mobile-right-side">
              <div className="details">
                <h1>Minimalist Portfolio</h1>
                <h3>$20.00</h3>
                <p>
                  Clean, modern design tailored for creatives and freelancers.
                </p>
              </div>

              <div className="stats">
                <div className="reviews stat-card">
                  <h3>
                    4.2 <Star className="star" />
                  </h3>
                  <p>15 reviews</p>
                </div>

                <div className="vl"></div>

                <div className="purchases stat-card">
                  <h3>
                    100+ <Download />
                  </h3>
                  <p>Purchases</p>
                </div>

                <div className="vl"></div>

                <div className="version stat-card">
                  <h3>
                    1.2.1 <Layers />
                  </h3>
                  <p>Version</p>
                </div>
              </div>

              <div className="buttons">
                <button className="primary-btn">Add to Cart</button>
                <p>Uploaded on April 3, 2025</p>
              </div>
            </div>

            <div className="about section">
              <h2>About the Theme</h2>
              <p>
                Minimalist Portfolio is the epitome of elegant simplicity,
                designed specifically for creatives who want their work to speak
                volumes without distractions. This theme employs a careful
                balance of whitespace, typography, and understated transitions
                that guide visitors' attention directly to your portfolio
                pieces. With optimized image loading and a responsive grid
                system, your projects will shine on any device while maintaining
                exceptional page speed scores.
                <br />
                <br />
                Beyond aesthetics, Minimalist Portfolio incorporates thoughtful
                UX patterns including subtle hover states, intuitive navigation,
                and accessibility-focused design choices. The theme includes
                specialized project detail templates, case study layouts, and
                customizable filtering options to organize your work by medium,
                client, or technique. For photographers, designers,
                illustrators, and other visual professionals, this theme
                provides the perfect backdrop to showcase your creative vision
                with sophistication and clarity.
              </p>
            </div>
            <div className="features section">
              <h2>Features</h2>
              <div className="badge-container">
                <div className="badge">Easy to use</div>
                <div className="badge">Fast Installation</div>
                <div className="badge">Responsive Layout</div>
                <div className="badge">SEO Friendly</div>
                <div className="badge">Great for Beginners</div>
                <div className="badge">Easily Customizable</div>
              </div>
            </div>
            <div className="seller-info section">
              <h2>About the Seller </h2>
              <div className="profile">
                <img src={sampleProfile} alt="" />
                <div className="details">
                  <div className="rating">
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="half-star" />
                  </div>
                  <h3>John Doe</h3>
                  <p>Joined 12 months ago</p>
                  <button className="outline-btn">
                    <MessageSquareMore /> Contact Me
                  </button>
                </div>
              </div>
            </div>
            <div className="reviews section">
              <h2>Reviews</h2>
              <div className="item-container">
                <div className="item">
                  <div className="profile">
                    <img src={sampleProfile} alt="" />
                    <div className="details">
                      <h3>John Doe</h3>
                      <p>12 reviews • 2 months ago</p>
                    </div>
                  </div>

                  <div className="rating">
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="half-star" />4
                  </div>

                  <div className="review">
                    <p>
                      I've tried dozens of themes over the years, but Awesome
                      Theme is by far the easiest and fastest to work with. My
                      site looks professional, loads incredibly fast, and I
                      didn't need to touch a single minor ...More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="details">
              <h1>Minimalist Portfolio</h1>
              <h3>$20.00</h3>
              <p>
                Clean, modern design tailored for creatives and freelancers.
              </p>
            </div>

            <div className="stats">
              <div className="reviews stat-card">
                <h3>
                  4.2 <Star className="star" />
                </h3>
                <p>15 reviews</p>
              </div>

              <div className="vl"></div>

              <div className="purchases stat-card">
                <h3>
                  100+ <Download />
                </h3>
                <p>Purchases</p>
              </div>

              <div className="vl"></div>

              <div className="version stat-card">
                <h3>
                  1.2.1 <Layers />
                </h3>
                <p>Version</p>
              </div>
            </div>

            <div className="buttons">
              <button className="primary-btn">Add to Cart</button>
              <p>Uploaded on April 3, 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-themes">
        <h2>Similar Themes</h2>
        <div className="grid">
          {themes.slice(0, 4).map((theme) => (
            <Link className="theme-card" key={theme.id} to="/">
              <div className="preview">
                <img className="desktop" src={theme.img} alt="" />
                <img className="phone" src={theme.phoneImg} alt="" />
              </div>
              <div className="details">
                <h4 className="title">{theme.title}</h4>
                <p className="excerpt">{theme.excerpt}</p>
                <p className="price">
                  {theme.discount ? (
                    <>
                      <span className="original">${theme.price}</span>{" "}
                      <span className="discount">${theme.discount}</span>
                    </>
                  ) : (
                    <>${theme.price}</>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gig;
