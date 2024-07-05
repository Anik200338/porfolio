import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiLogoGmail } from 'react-icons/bi';
import { MdOutlinePhone } from 'react-icons/md';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mci755y',
        'template_5e0llj5',
        form.current,
        '0zHlCk1s6oBjVCqg7'
      )
      .then(
        result => {
          console.log(result.text);
          toast.success('Message Sent Successfully');
        },
        error => {
          console.log(error.text);
          toast.error('Failed to Send Message');
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:gap-16 lg:w-4/5 mx-auto items-center">
      <div className="rounded-2xl shadow-2xl w-full lg:w-3/4 m-10 p-16">
        <h2 className="text-2xl font-bold mb-4">Email Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="border-2 border-gray-300 p-2 w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="border-2 border-gray-300 p-2 w-full"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border-2 border-gray-300 p-2 w-full"
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border-2 border-gray-300 p-2 w-full"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary w-full">
            Send
          </button>
        </form>
      </div>

      <div className="w-3/4 m-10">
        <h2 className="flex items-center gap-5 mb-5">
          <BiLogoGmail className="text-5xl" />
          <a href="mailto:sarkaranik200338@gmail.com" className="font-bold">
            sarkaranik200338@gmail.com
          </a>
        </h2>
        <h2 className="flex items-center gap-5 mb-5">
          <MdOutlinePhone className="text-5xl" />
          <a href="tel:01233453454" className="font-bold">
            01233453454
          </a>
        </h2>
        <h2 className="flex items-center gap-5 mb-5">
          <FaGithub className="text-5xl" />
          <a
            href="https://github.com/Anik200338"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </h2>
        <h2 className="flex items-center gap-5 mb-5">
          <FaFacebook className="text-5xl" />
          <a
            href="https://www.facebook.com/yourfacebookusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Facebook
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
