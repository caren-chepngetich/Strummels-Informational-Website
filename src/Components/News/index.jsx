// src/Components/News/index.js
import React from 'react';
import './index.css';

const News = () => {
  return (
    <div className="news-container">
      <div className="news-hero">
        <h1>NEWS AND UPDATES</h1>
        <h2>Stay Informed with Strummels</h2>
      </div>

      <div className="news-content">
        <section className="news-grid">
          <article className="news-item">
            <div className="news-date">Feb 15, 2025</div>
            <h3>New Financial Support Programs for Dairy Farmers</h3>
            <p>Strummels launches innovative financial solutions to support dairy farmers in expanding their operations...</p>
            <button className="read-more">Read More</button>
          </article>

          <article className="news-item">
            <div className="news-date">Feb 10, 2025</div>
            <h3>Expanding Our Delivery Network</h3>
            <p>We're excited to announce the expansion of our delivery services to new regions...</p>
            <button className="read-more">Read More</button>
          </article>

          <article className="news-item">
            <div className="news-date">Feb 5, 2025</div>
            <h3>Community Support Initiative Launch</h3>
            <p>Introducing our new community support program designed to strengthen dairy farming communities...</p>
            <button className="read-more">Read More</button>
          </article>
        </section>

        <section className="newsletter-signup">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest news and updates</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default News;