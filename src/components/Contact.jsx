import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="p-2">
      <h2 className="text-center pb-3 text-2xl">Contact Us</h2>
      <div className=" w-mobile md:w-container mx-auto bg-gray-100 grid md:grid-cols-5  items-center rounded-md  gap-3">
        <div className="md:col-span-2 p-4">
          <form className="space-y-6">
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="John Doe"
                className="p-2 w-full outline-none focus:border focus:border-mainBlue"
              />
            </div>
            <div>
              <p>
                Email <span className="text-red-500">*</span>{" "}
              </p>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="p-2 w-full outline-none focus:border focus:border-mainBlue"
              />
            </div>
            <div>
              <p>
                Message <span className="text-red-500">*</span>{" "}
              </p>
              <textarea
                className="p-2 w-full outline-none focus:border focus:border-mainBlue"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div>
              <button className="bg-darkBlue px-12 py-3 text-gray-200">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
          }}
          className=" flex md:rounded-tr-md md:rounded-br-md  flex-col  md:items-end space-y-6 p-4 md:col-span-3 bg-cover  bg-no-repeat  bg-center md:h-[500px]"
        >
          <div className="bg-white p-5 w-mobile md:w-1/2 mx-auto md:mx-0">
            <h2 className="flex space-x-1 font-bold">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-mainBlue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>{" "}
              <span>Telephone</span>
            </h2>
            <p>+254-7-123-456</p>
          </div>
          <div className="bg-white p-5 w-mobile md:w-1/2 mx-auto md:mx-0">
            <h2 className="flex space-x-1 font-bold">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-mainBlue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>{" "}
              <span>Email</span>
            </h2>
            <p>info@placidsystems.com</p>
          </div>
          <div className="bg-white p-5 w-mobile md:w-1/2 mx-auto md:mx-0">
            <h2 className="flex space-x-1 font-bold">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-mainBlue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>{" "}
              <span>Address</span>
            </h2>
            <p>Example street,umoja house</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
