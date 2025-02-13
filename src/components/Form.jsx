import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null });

    // Create a new form data object
    const form = new FormData();
    Object.keys(formData).forEach(key => {
      form.append(key, formData[key]);
    });
    // Log the form data correctly
    for (let pair of form.entries()) {
      console.log(pair[0] + ': ' + pair[1]); // This will show the actual form data
    }

    if (!formData.fullName.trim()) {
      toast.error("Full Name is required!");
      setStatus({ submitting: false, error: "Full Name is missing" });
      return;
    }
    if (!formData.company.trim()) {
      toast.error("Company/Brand Name is required!");
      setStatus({ submitting: false, error: "Company Name is missing" });
      return;
    }

    
    // Convert form data to URL-encoded string
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwxlLfyl9ary8cMpGQoL6yGdgaHG_o0AeOl_s9ycZ1_rqNuW4KwTw1MdcTuZHzoow0qQQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: urlEncodedData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Since we're using no-cors, we won't get a normal response
      // We'll assume success if we get here
      toast.success("Your enquiry has been submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        submitting: false,
        error: "Failed to submit. Please try again."
      });
      alert("Failed to submit. Please try again.");
    } finally {
      setStatus({ submitting: false, error: null });
    }
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
            disabled={status.submitting}
            className="bg-[#01193D] text-[#DFDFF1] px-6 py-3 font-bold disabled:opacity-50"
          >
            {status.submitting ? "SUBMITTING..." : "SUBMIT YOUR ENQUIRY"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
