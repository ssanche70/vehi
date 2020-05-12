import React from "react";
import './footer.css';

const FooterComponent = () => (
  <footer>
    <section className="footer-contents">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <p className="copyright-text">
              Copyright © {new Date().getFullYear()}, All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default FooterComponent;
