import { NEUTRAL_COLOR } from "@/constant/colors";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialMedia = [
  {
    id: 1,
    link: "https://github.com/MhrrmliEltac",
    Icon: FaGithubSquare,
  },
  {
    id: 2,
    link: "https://www.instagram.com/eltac.mhrrmli1",
    Icon: FaInstagramSquare,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/eltac-meherremli",
    Icon: FaLinkedin,
  },
];
const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      {socialMedia.map((social) => (
        <div className="flex gap-0.5" key={social.id}>
          <Link to={social.link} target="_blank">
            <social.Icon size={30} color={NEUTRAL_COLOR.neutral600} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
