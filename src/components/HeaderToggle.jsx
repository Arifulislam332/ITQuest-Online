import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navItems = [
  { label: "হোম", url: "/#" },
  { label: "কোর্সসমূহ", url: "/#cources" },
  { label: "যোগাযোগ", url: "/#contact" },
];

const HeaderToggle = () => {
  return (
    <div className="flex items-center gap-5 font-semibold">
      {navItems.map((items) => (
        <HashLink
          className="text-gray-700 hover:text-gray-500"
          key={items.url}
          to={items.url}
        >
          {items.label}
        </HashLink>
      ))}
      <Link to="/training" className="login__btn flex items-center gap-1">
        <LogIn size={22} />
        <p>লগইন</p>
      </Link>
    </div>
  );
};

export default HeaderToggle;
