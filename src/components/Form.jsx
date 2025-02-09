import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rishabhdidwania22@gmail.com?subject=Enquiry&body=Full Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20 ">
      {/* Header */}
      <div className="border-b border-[#01193D] pb-4 p-6">
        <h1 className="text-[20px] sm:text-[24px] font-bold">
          It’s Important to remember that we are just one click away,
        </h1>
        <h1 className="text-[30px] sm:text-[36px] font-bold uppercase">
          So Let’s Get In Touch
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block font-bold text-sm mb-1">
              YOUR FULL NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border bg-[#DFDFF1] border-[#01193D] p-3"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold text-sm mb-1">
              YOUR MAIL ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#DFDFF1] border border-[#01193D] p-3"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block font-bold text-sm mb-1">
              YOUR COMPANY/BRAND NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#DFDFF1] border border-[#01193D] p-3"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block font-bold text-sm mb-1">
              SERVICE YOU ARE LOOKING FOR <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#DFDFF1] border border-[#01193D] p-3"
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
        </div>

        {/* Message Box */}
        <div className="mt-6">
          <label className="block font-bold text-sm mb-1">
            TELL US WHAT'S IN YOUR MIND
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#DFDFF1] border border-[#01193D] p-3 h-32"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-[#01193D] text-[#DFDFF1] px-6 py-3 font-bold"
          >
            SUBMIT YOUR ENQUIRY
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
