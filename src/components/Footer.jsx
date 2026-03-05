import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-white py-10 ">
      <div className="w-11/12 mx-auto px-5 flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <nav className="flex flex-col gap-3 w-full lg:w-1/5">
            <h6 className="text-lg font-medium">
              CS <i className="fa-solid fa-minus"></i> Ticket System
            </h6>
            <p className="opacity-80">
              This is a modern customer support platform designed to streamline
              issue tracking and enhance customer communication. We help teams
              manage tickets efficiently, prioritize tasks effectively, and
              deliver faster resolutions with a simple and intuitive workflow.
            </p>
          </nav>

          <nav className="flex flex-col gap-3">
            <h6 className="text-lg font-medium">Company</h6>
            <a className="link link-hover opacity-80">About us</a>
            <a className="link link-hover opacity-80">Our Mission</a>
            <a className="link link-hover opacity-80">Contact Saled</a>
          </nav>

          <nav className="flex flex-col gap-3">
            <h6 className="text-lg font-medium">Services</h6>
            <a className="link link-hover opacity-80">Products & Services</a>
            <a className="link link-hover opacity-80">Customer Stories</a>
            <a className="link link-hover opacity-80">Download Apps</a>
          </nav>

          <nav className="flex flex-col gap-3">
            <h6 className="text-lg font-medium">Information</h6>
            <a className="link link-hover opacity-80">Privacy policy</a>
            <a className="link link-hover opacity-80">Terms & Conditions</a>
            <a className="link link-hover opacity-80">Join Us</a>
          </nav>

          <nav className="flex flex-col gap-3 ">
            <h6 className="text-lg font-medium">Social Links</h6>
            <a className="link link-hover opacity-80">
              <span className="bg-white mr-2 rounded-full">
                <i className="fa-brands fa-x-twitter  text-black"></i>
              </span>
              @CS <i className="fa-solid fa-minus"></i> Ticket System
            </a>
            <a className="link link-hover opacity-80">
              <span className="bg-white mr-2 rounded-full">
                <i className="fa-brands fa-linkedin-in text-black"></i>
              </span>
              @CS <i className="fa-solid fa-minus"></i> Ticket System
            </a>
            <a className="link link-hover opacity-80">
              <span className="bg-white mr-2 rounded-full">
                <i className="fa-brands fa-facebook-f text-black"></i>
              </span>
              @CS <i className="fa-solid fa-minus"></i> Ticket System
            </a>
            <a className="link link-hover opacity-80">
              <span className="bg-white mr-2 rounded-full">
                <i className="fa-regular fa-envelope text-black"></i>
              </span>
              support@cst.com
            </a>
          </nav>
        </div>

        <div className="h-px bg-white opacity-50 my-8 w-full"></div>

        <p className="opacity-60">
          &copy; 2025 CS <i className="fa-solid fa-minus"></i>{" "}
        Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
