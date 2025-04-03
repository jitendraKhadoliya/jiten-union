import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CounsellorForm = ({ id }) => {
  const [countries, setCountries] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Fetch country list
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryNames = response.data
          .map((country) => country.name.common)
          .sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    phone: Yup.string()
      .matches(/^\+?\d{10,15}$/, "Invalid phone number")
      .required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    institution: Yup.string().required("Institution name is required"),
    studentsCount: Yup.number()
      .positive("Must be a positive number")
      .required("Required"),
    country: Yup.string().required("Select a country"),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      institution: "",
      studentsCount: "",
      country: "",
      consent: false,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      setSubmitted(true);
      resetForm();
    },
  });

  return (
    <section id={id} className="bg-[#14210F] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Associate as a <span className="text-[#A3FF5F]">Counsellor</span>
          </h2>
          <p className="mb-6 text-lg">
            Register your details to stay updated on our initiatives,
            collaborate on events, and support students as they embark on
            transformative global learning journeys with us.
          </p>

          <h3 className="text-2xl font-bold text-[#A3FF5F] mb-3">
            Counsellor Resources
          </h3>
          <ul className="text-lg space-y-2">
            <li>📘 Program Brochure</li>
            <li>🎓 Scholarship Details</li>
            <li>📅 Application Deadlines</li>
            <li>📄 Admission Process Guide</li>
          </ul>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6">
          {!submitted ? (
            <form onSubmit={formik.handleSubmit}>
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                className="w-full p-3 text-black mb-2"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500">{formik.errors.fullName}</p>
              )}

              {/* Phone Number Section */}
              <div className="flex space-x-2 mb-2">
                {/* Country Code Dropdown */}
                <select
                  name="countryCode"
                  className="py-3 bg-white text-black  w-25"
                  {...formik.getFieldProps("countryCode")}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+33">+33</option>
                  <option value="+49">+49</option>
                  {/* Add more country codes as needed */}
                </select>

                {/* Phone Number Input */}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number*"
                  className="w-full p-3 text-black "
                  {...formik.getFieldProps("phone")}
                />
              </div>

              {/* Error Handling */}
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500">{formik.errors.phone}</p>
              )}

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                className="w-full p-3 text-black mb-2"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}

              {/* Institution */}
              <input
                type="text"
                name="institution"
                placeholder="Name of the Institution*"
                className="w-full p-3 text-black mb-2"
                {...formik.getFieldProps("institution")}
              />
              {formik.touched.institution && formik.errors.institution && (
                <p className="text-red-500">{formik.errors.institution}</p>
              )}

              {/* Number of Students */}
              <input
                type="number"
                name="studentsCount"
                placeholder="Number of Graduating Students 2024*"
                className="w-full p-3 text-black mb-2"
                {...formik.getFieldProps("studentsCount")}
              />
              {formik.touched.studentsCount && formik.errors.studentsCount && (
                <p className="text-red-500">{formik.errors.studentsCount}</p>
              )}

              {/* Country Selection */}
              <select
                name="country"
                className="w-full p-3  mb-2 bg-white text-black"
                {...formik.getFieldProps("country")}
              >
                <option value="">Select Country*</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500">{formik.errors.country}</p>
              )}

              {/* Checkbox */}
              <label className="flex items-center text-sm mt-2">
                <input
                  type="checkbox"
                  {...formik.getFieldProps("consent")}
                  className="mr-2"
                />
                I agree to receive information regarding my submitted
                application.
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#A3FF5F] text-black w-full p-3 mt-4  font-bold"
              >
                REGISTER
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#A3FF5F]">
                Thank You! 🎉
              </h2>
              <p className="mt-2 text-lg">
                We have received your details. Our team will reach out soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CounsellorForm;
