import { Facebook, Mail, PhoneOutgoing } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [shouldNumberOpen, setShouldNumberOpen] = useState(false);
  return (
    <div
      id="contact"
      className="reusable__margin mt-1 bg-violet-50  scroll-mt-24"
    >
      <div className="flex items-center justify-center py-5 bg-violet-400 drop-shadow-md">
        <h1 className="text-3xl font-semibold text-white">যোগাযোগ</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center py-5 px-2 gap-5 w-full h-full">

        <div className="flex h-full md:flex-col items-center justify-center gap-10">
          {/* call */}
          <div>
            <div
              onClick={() => setShouldNumberOpen(!shouldNumberOpen)}
              className="relative py-2.5 px-5 shadow-md shadow-gray-300 rounded-b-md hover:scale-125 transition duration-500 ease-in-out hover:ring-1 ring-gray-200"
            >
              <PhoneOutgoing className="text-orange-400" size={30} />
            </div>

            {/* hidden part */}
            <div
              className={`${
                shouldNumberOpen === true ? "block" : "hidden"
              } absolute left-1/2 -translate-x-1/2 py-6 w-80 rounded-3xl  bg-black flex flex-col items-center justify-center gap-5 z-[200]`}
            >
              <p className="text-2xl font-bold text-gray-400">
                +880&nbsp;017000000
              </p>
              <button
                onClick={() => setShouldNumberOpen(false)}
                className="btn__single"
              >
                Close
              </button>
            </div>
          </div>

          {/* email */}
          <Link
            target="_blank"
            className="py-2.5 px-5 shadow-md shadow-gray-300 rounded-b-md hover:scale-125 transition duration-500 ease-in-out hover:ring-1 ring-gray-200"
            to="mailto:women@creativeit.com"
          >
            <Mail className="text-orange-400" size={30} />
          </Link>

          {/* facebook */}
          <Link
            to="https://www.facebook.com/herpowerproject"
            target="_blank"
            className="py-2.5 px-5 shadow-md shadow-gray-300 flex justify-center items-center rounded-b-md hover:scale-125 transition duration-500 ease-in-out hover:ring-1 ring-gray-200"
          >
            <Facebook className="text-blue-600" size={30} />
          </Link>
        </div>

        {/* map */}
        <div className="col-span-3 shadow-md h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1183480052023!2d90.37007222589764!3d23.77879963768444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1465ed89915%3A0x4e7ec920e7b783ea!2z4Kac4Ka-4Kak4KeA4KefIOCmrOCmv-CmnOCnjeCmnuCmvuCmqCDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmleCmruCmquCnjeCmsuCnh-CmleCnjeCmuCAtIE5hdGlvbmFsIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ29tcGxleA!5e0!3m2!1sen!2sbd!4v1710848877174!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
