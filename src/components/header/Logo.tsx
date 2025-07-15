import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="pl-5">
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
