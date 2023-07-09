import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mb-28">
      <h1 className="sectionTitle">Get In Touch</h1>
      <form action="" className="flex flex-col items-center justify-center gap-4">
        <input
          className="w-3/5 border border-white bg-transparent text-white p-3 focus:outline-none rounded-md"
          type="text"
          required
          placeholder="Enter Your Name Here"
        />
        <input
          className="w-3/5 border border-white bg-transparent text-white p-3 focus:outline-none rounded-md"
          type="email"
          required
          placeholder="Enter Your Email Here"
        />
        <textarea
          className="w-3/5 border border-white bg-transparent text-white p-3 focus:outline-none rounded-md"
          placeholder="What's on your mind?"
        ></textarea>
        <input className="customBtn cursor-pointer" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
