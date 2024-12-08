import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" bg-gray-100 py-8">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-thin pl-6">Bandage</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 text-2xl md:text-4xl">
            <FaFacebook />
            </a>
            <a href="#" className="text-blue-500 text-2xl md:text-4xl">
             <TiSocialInstagram/>
            </a>
            <a href="#" className="text-blue-500 text-2xl md:text-4xl pr-12">
              <FaTwitter/>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white m-6">
          <div className="m-5" >
            <h2 className="font-semibold mb-4">Company Info</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="m-5">
            <h2 className="font-semibold mb-4">Legal</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="m-5">
            <h2 className="font-semibold mb-4">Features</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-600  px-1"
                >
                  Business Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  User Analytic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>
          <div className="m-5">
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600">
                  IOS & Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div className="  p-4">
            <h2 className="font-semibold mb-4">Get In Touch</h2>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button className="w-full bg-blue-500 text-white p-2 rounded">
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 mt-4">Lorem imp sum dolor Amit</p>
          </div>
        </div>
        <div className="text-center md:text-left md:ml-8 mt-8 text-gray-600">
          Made With Love By Pakistan All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
