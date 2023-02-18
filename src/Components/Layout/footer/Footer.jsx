import React from "react";
import "./Footer.css";

function Footer() {
  const currentyear = new Date().getFullYear();

	return (
		

<footer className="footer  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
               <span>  © {currentyear} Providus bank</span>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank" rel="noreferrer">App Dev</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank" rel="noreferrer">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://creative-tim.com/blog" className="nav-link text-muted" target="_blank" rel="noreferrer">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank" rel="noreferrer">License</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>


);
}

export default Footer;