import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div id="/" className="fixed z-[100] right-0 top-0 left-0 w-screen bg-white/80 shadow-xl backdrop-blur-2xl">
      <div className="reusable__margin flex justify-between items-center gap-x-1 p-2">
        <HashLink id="/#" className="flex items-center justify-center gap-2">
          <div className="h-20 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/images/logo-only.png"
              alt="logo"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-700">
              হার পাওয়ার প্রকল্প
            </h3>
            <p className="font-semibold text-gray-700">
              প্রযুক্তির সহায়তায় নারীর ক্ষমতায়ন
            </p>
          </div>
        </HashLink>

        <div className="flex items-center gap-5 font-semibold">
          <HashLink className="text-gray-700 hover:text-gray-500" to="/#">
            হোম
          </HashLink>
          <HashLink to="/#cources" className="text-gray-700 hover:text-gray-500">
            কোসসমূহ
          </HashLink>
          <HashLink className="text-gray-700 hover:text-gray-500" to="/#contact">
            যোগাযোগ
          </HashLink>
          <Link to="/training" className="login__btn flex items-center gap-1">
            <LogIn size={22} />
            <p>লগইন</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
