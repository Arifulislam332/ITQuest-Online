import { ChevronDown } from "lucide-react";
import { courceInfo } from "../data/courceInfo";
import { Link } from "react-router-dom";
import { useState } from "react";

const DigitalMarketing = () => {
  const [shouldTextAppear, setShouldTextAppear] = useState();
  return (
    <div className="reusable__margin mt-1 bg-purple-50 p-3">
      <div className="hover:ring-1 rounded-b-xl">
        <div className="flex items-center justify-center gap-10 py-5 bg-violet-400 drop-shadow-md">
          <h1 className="text-3xl font-semibold text-white">
          ডিজিটাল মার্কেটিং
          </h1>
          <Link className="btn__single" to="/training">
            নিবন্ধন করুন
          </Link>
        </div>

        {/* left */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-5">
          <div className="w-full h-96 flex justify-center my-auto">
            <img
              src="/images/section-digital-marketing.png"
              alt="women call center"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* right */}
          <div className="flex flex-col w-full h-full justify-center bg-red-100 rounded-xl">
            <div className="flex flex-col gap-3 py-5">
              {courceInfo.map((info, index) => (
                <div
                  onClick={() => setShouldTextAppear(index)}
                  key={info.id}
                  className="px-5 py-3 mx-5 rounded-md ring-1"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-400">{info.title}</p>
                    <span className="font-medium text-gray-400">
                      <ChevronDown size={20} />
                    </span>
                  </div>
                  <p
                    className={`${
                      shouldTextAppear === index ? "block" : "hidden"
                    } text-gray-400 tracking-wider pt-3`}
                  >
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;