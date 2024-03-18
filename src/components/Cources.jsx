import { Link } from "react-router-dom";
import { cources } from "../data/cources";
import { HashLink } from "react-router-hash-link";

const Cources = () => {
  return (
    <div
      id="cources"
      className="reusable__margin mt-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-hidden p-3 bg-purple-50 rounded-b-xl hover:ring-1"
    >
      {cources.map((cource) => (
        <div
          key={cource.id}
          className="hover:scale-105 transition duration-500 ease-in-out hover:ring-1 ring-green-400 shadow-lg rounded-b-xl bg-white"
        >
          <div>
            <h2 className="text-center text-xl py-3 font-semibold text-white bg-violet-400">
              {cource.title}
            </h2>
            <div className="w-40 h-40 mx-auto overflow-hidden mt-3 mb-4">
              <img
                className="w-full h-full object-cover"
                src={cource.image}
                alt="Cources image"
              />
            </div>
            <div className="flex gap-3 items-center justify-center text-center mb-8 mx-5">
              <p className="qualification">ন্যূনতম এস.এস.সি. পাশ</p>
              <p className="qualification">বয়স ১৮-৪০ বছর</p>
              <button className="qualification">
                কোর্সটির আওতাভুক্ত এলাকা
              </button>
            </div>
            <div className="flex justify-between items-center mb-5 mx-5">
              <HashLink to={`/#${cource.id}`} className="btn__card">
                বিস্তারিত
              </HashLink>
              <Link className="btn__card__login" to="/training">
                নিবন্ধন
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cources;
