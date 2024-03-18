import { Facebook, Mail, Map, PhoneOutgoing } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [shouldNumberOpen, setShouldNumberOpen] = useState(false);
  return (
    <div
      id="contact"
      className="reusable__margin mt-1 bg-violet-50  scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 items-center justify-center py-5 px-2 gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
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
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
