import React from "react";

const CheckoutForm = () => {
  const submiting = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full">
      <form onSubmit={submiting}>
        <div>
          <br />
          <label className="p-1 block" htmlFor="fName">
            First Name
          </label>
          <input
            required
            className=" bg-[#eee] w-full px-4 focus:outline-gray-500 py-2 rounded-md"
            type="text"
            id="fName"
            placeholder="First Name"
          />
        </div>
        <div>
          <br />
          <label className="p-1 block" htmlFor="lName">
            Last Name
          </label>
          <input
            required
            className=" bg-[#eee] w-full px-4 focus:outline-gray-500 py-2 rounded-md"
            type="text"
            id="lName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <br />
          <label className="p-1 block" htmlFor="email">
            Email Address
          </label>
          <input
            required
            className=" bg-[#eee] w-full px-4 focus:outline-gray-500 py-2 rounded-md"
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <br />
          <label className="p-1 block" htmlFor="card">
            Card Number
          </label>
          <input
            required
            minLength="16"
            maxLength="16"
            className=" bg-[#eee] w-full px-4 focus:outline-gray-500 py-2 rounded-md"
            type="number"
            id="card"
            placeholder="Enter 16 digits"
          />
        </div>
        <div>
          <br />
          <label className="p-1 block" htmlFor="ccv">
            CVV or VCC
          </label>
          <input
            required
            minLength="3"
            maxLength="3"
            className=" overflow-hidden bg-[#eee] w-full sm:w-1/4 px-4 focus:outline-gray-500 py-2 rounded-md"
            type="number"
            id="ccv"
            placeholder="3 Digit"
          />
        </div>
        <div className="w-full pt-2">
          <button
            type="submit"
            className="bg-cyan-400 w-full hover:bg-cyan-600 transition-all text-white p-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
