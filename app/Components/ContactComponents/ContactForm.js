// "use client";
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     company: "",
//     phone: "",
//     email: "",
//     title: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800 transition-all duration-300"
//     >
//       <div className="grid gap-6 mb-6 md:grid-cols-2">
//         <div>
//           <label
//             htmlFor="first_name"
//             className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//           >
//             First name
//           </label>
//           <input
//             type="text"
//             id="first_name"
//             className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//             placeholder="John"
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, first_name: e.target.value })
//             }
//             value={formData.first_name}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="last_name"
//             className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//           >
//             Last name
//           </label>
//           <input
//             type="text"
//             id="last_name"
//             className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//             placeholder="Doe"
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, last_name: e.target.value })
//             }
//             value={formData.last_name}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="company"
//             className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//           >
//             Company
//           </label>
//           <input
//             type="text"
//             id="company"
//             className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//             placeholder="Company Name"
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, company: e.target.value })
//             }
//             value={formData.company}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="phone"
//             className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//           >
//             Phone number
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//             placeholder="1234567890"
//             pattern="[0-9]{10}"
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//             value={formData.phone}
//           />
//         </div>
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="email"
//           className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//         >
//           Email address
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//           placeholder="john.doe@company.com"
//           required
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           value={formData.email}
//         />
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="title"
//           className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//         >
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//           placeholder="Enter Your Title"
//           required
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           value={formData.title}
//         />
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="message"
//           className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
//         >
//           Your message
//         </label>
//         <textarea
//           id="message"
//           rows="4"
//           className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
//           placeholder="Write your thoughts here..."
//           required
//           onChange={(e) =>
//             setFormData({ ...formData, message: e.target.value })
//           }
//           value={formData.message}
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    phone: "",
    email: "",
    title: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 transition-all">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Have questions? Want to work together? Fill out the form below and
            we'll get back to you soon!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
                placeholder="John"
                required
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
                value={formData.first_name}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
                placeholder="Doe"
                required
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
                value={formData.last_name}
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
                placeholder="Your Company Name"
                required
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                value={formData.company}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
                placeholder="1234567890"
                pattern="[0-9]{10}"
                required
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
              placeholder="your@email.com"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
              placeholder="Reason for Contacting"
              required
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all"
              placeholder="Write your message here..."
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-3 text-center transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
