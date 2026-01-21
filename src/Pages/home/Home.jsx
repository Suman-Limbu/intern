import React from "react";
import image from "../../assets/resumeai.png";
import Button from "../../components/Ui/Button";
import { Link } from "react-router-dom";
import { Check, CreditCard, Mail, RotateCcw, UserRound, Van } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto bg-slate-300">
          <div className="h-118 bg-gradient-to-r from-green-600 to-blue-400  px-14 ">
            <div className="flex justify-between items-center pt-15">
              <div>
                <h1 className="text-5xl font-extrabold text-blue-300 ">
                  Looking For Online Electronic Products
                </h1>
                <p className="text-3xl font-bold text-white pt-4">
                  Find best electronic products with best prices
                </p>
              </div>
              <div className="mr-25">
                <img src={image} className="cover w-110 ml-10 " />
              </div>
            </div>
            <Link to="/products">
              {" "}
              <Button text="ShopNow" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-15">
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <p className="text-2xl pt-5 text-gray-500">
            We provide the best shopping experience with our premium quality
            products.
          </p>
        </div>
        <div className="container mx-auto px-5 pt-2">
          <div className="grid grid-cols-4 gap-4 pt-8 ">
            <div className="bg-gray-300 rounded-md  hover:shadow-lg  flex flex-col justify-center items-center">
              <p className="pb-3 pt-3">
                <Check />
              </p>
              <h1 className="text-2xl font-semibold pb-3">Quality Products</h1>
              <p className="pl-6">
                We provide only the best quality products from the trusted
                suppliers.
              </p>
            </div>
            <div className="bg-gray-300 rounded-md hover:shadow-lg flex flex-col justify-center items-center">
              <p className="pb-3">
                <Van />
              </p>
              <h1 className="text-2xl font-semibold pb-3">Fast Delivery</h1>
              <p className="pl-6">
                Get your orders delivered in your record time.
              </p>
            </div>
            <div className="bg-gray-300 rounded-md hover:shadow-lg  flex flex-col justify-center items-center">
              <p className="pb-3">
                <RotateCcw />
              </p>
              <h1 className="text-2xl font-semibold pb-3">Easy Return</h1>
              <p className="pl-6">
                No need to hustle for returning your products if not upto your
                expectations.
              </p>
            </div>
            <div className="bg-gray-300 rounded-md hover:shadow-lg flex flex-col justify-center items-center">
              <p className="pb-3">
                <CreditCard />
              </p>
              <h1 className="text-2xl font-semibold pb-3">Secure Payment</h1>
              <p className="pl-6">
                Shop with confidence using your secure payment methods and also
                with multiple payment options.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 mt-15 bg-gradient-to-l from-green-300 to-blue-300">
        <div className="bg-white rounded-lg mx-120">
          <form className="flex flex-col items-center text-sm text-slate-800 py-6 ">
            <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold py-4 text-center">
              Let's Get In Touch.
            </h1>
            <p className="max-md:text-sm text-gray-500 pb-10 text-center">
              Lets talk on something great together.
            </p>

            <div className="max-w-96 w-full px-4">
              <label htmlFor="name" className="font-medium">
                Full Name
              </label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <UserRound />
                <input
                  type="text"
                  className="h-full px-2 w-full outline-none bg-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <label htmlFor="email-address" className="font-medium mt-4">
                Email Address
              </label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <Mail />
                <input
                  type="email"
                  className="h-full px-2 w-full outline-none bg-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <label htmlFor="message" className="font-medium mt-4">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
                placeholder="Enter your message"
                required
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition"
              >
                Submit Form
                <svg
                  className="mt-0.5"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
