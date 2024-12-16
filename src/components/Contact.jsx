import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    Email: "",
    tel: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [isLoading, setIsLoading] = useState(false); // Track submission loading

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(true);

    // Send form data to the Getform endpoint
    const response = await fetch("https://getform.io/f/byvvjqva", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ Email: "", tel: "", description: "" }); // Reset form
    } else {
      alert("Something went wrong. Please try again!");
    }
    setIsLoading(false);
  };

  return (
    <div
      name="Contact"
      className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-6"
    >
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Me
        </h1>

        {/* Success Popup */}
        {isSubmitted && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center rounded-lg shadow-lg animate__animated animate__fadeIn">
            <p className="text-green-600 text-lg font-semibold mb-4">
              Your message has been sent successfully!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="Enter your mobile number"
              value={formData.tel}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gradient-to-r from-green-200 to-green-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter your message"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-200 to-purple-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-transform transform hover:scale-105"
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
