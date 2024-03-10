import { ChevronDown } from "lucide-react";
import { courceInfo } from "../data/courceInfo";
import { Link } from "react-router-dom";
import { useState } from "react";

const WomenCallCenter = () => {
  const [shouldAllTextAppear,setShouldAllTextAppear] = useState(false);
  return (
    <div className="reusable__margin mt-1 bg-purple-50 p-3">
      <div className="hover:ring-1 rounded-b-xl">
        <div className="flex items-center justify-center gap-10 py-5 bg-violet-400 drop-shadow-md">
          <h1 className="text-3xl font-semibold text-white">
            ওমেন কল সেন্টার এজেন্ট
          </h1>
          <Link className="btn__single" to="/training">
            নিবন্ধন করুন
          </Link>
        </div>

        {/* left */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-8">
          <div className="w-full h-96 flex justify-center">
            <img
              src="/images/section-call-center.png"
              alt="women call center"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* right */}
          <div className="flex flex-col w-full h-full justify-center gap-5 bg-red-100">
            <div className="ring-2">
              {courceInfo.map((info) => (
                <div className="px-5 py-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-400">{info.title}</p>
                    <span className="font-medium text-gray-400">
                      <ChevronDown size={20} />
                    </span>
                  </div>
                  <p className="text-gray-400">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCallCenter;
