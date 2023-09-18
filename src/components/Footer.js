import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex flex-col md:items-start items-center">
              <span className="mb-2 text-2xl whitespace-nowrap text-white font-extrabold">
                Indoplanet<span className="text-green-400">X</span>
              </span>
            </a>
            <div>Contact: +91 8882054894</div>
            <br />
            <div>
              <b>Head Office: </b>Asaf nagar road, khasra no-166, Delhi Highway,
              Roorkee Uttarakhand -247667
            </div>
            <br />
            <div>
              <b>Ghaziabad Office: </b>Office No. 12A01/A Tower S3 Cloud 9
              Sector -1, Ghaziabad Uttar Pradesh - 201010
            </div>
            <div>
              <b>Lab: </b>ISVR Lab, RCE,5-KM Ganga Canal Road, Roorkee,
              Uttarakhand 247667
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-extrabold  uppercase text-white">
                Resources
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Lab Setup
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Internship
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Workshops
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extrabold  uppercase text-white">
                Follow us
              </h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/indian-space-vault-and-research/?original_referer=https%3A%2F%2Fisvr.org.in%2F"
                    className="hover:underline ">
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/i_s_v_r_/"
                    className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/isvr01/"
                    className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extrabold  uppercase text-white">
                Legal
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link to={"/PrivacyPolicy"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/TnC"} className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to={"/disclaimer"} className="hover:underline">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center ">
            &copy; 2023{" "}
            <a href="#" className="hover:underline text-gray-300">
              IndoplanetX Space Pvt. Ltd.
            </a>{" "}
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
