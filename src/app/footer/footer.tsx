import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-100 ">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div >
            <h3 className="text-lg font-semibold mb-4">Hekto</h3>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-gray-600 mb-1">Contact Info</p>
            <address className="text-sm text-gray-600">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </address>
          </div>
  
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
  
          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-gray-500">
          ©Webecy - All Rights Reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;

