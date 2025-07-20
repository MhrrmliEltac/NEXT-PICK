import { FormControl, TextField, Typography } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { NEUTRAL_COLOR } from "../../constant/colors";

const WebFooter = ({ INFO_DATA }: { INFO_DATA: any }) => {
  return (
    <section className="flex justify-between max-md:hidden items-start flex-wrap max-w-[1680px] md:px-[61px] px-5 py-[55px] mx-auto transition-all duration-300">
      {/* E-commerce support */}
      <div className="flex flex-col gap-2">
        <Typography
          variant="caption"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={14}
          fontWeight="600"
        >
          E-commerce support
        </Typography>

        {INFO_DATA &&
          INFO_DATA.length > 0 &&
          INFO_DATA.map((info: any, index: number) => (
            <ul key={index}>
              <li>
                <Typography
                  variant="body2"
                  fontSize={12}
                  color={NEUTRAL_COLOR.neutral500}
                >
                  {info.address}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  fontSize={12}
                  color={NEUTRAL_COLOR.neutral500}
                >
                  Phone: {info.phoneNumber}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  fontSize={12}
                  color={NEUTRAL_COLOR.neutral500}
                >
                  Email: {info.email}
                </Typography>
              </li>
            </ul>
          ))}
      </div>

      {/* Working hours */}
      <div className="flex flex-col gap-2">
        <Typography
          variant="caption"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={14}
          fontWeight="600"
        >
          Working hours
        </Typography>

        <ul>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Monday to Friday: 09:00 - 18:00
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Saturday: 10:00 - 16:00
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Sunday: Closed
            </Typography>
          </li>
        </ul>
      </div>

      {/* About us  */}
      <div className="flex flex-col gap-2">
        <Typography
          variant="caption"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={14}
          fontWeight="600"
        >
          About us
        </Typography>

        <ul>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Stores
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Corporate website
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Exclusive Offers
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Career
            </Typography>
          </li>
        </ul>
      </div>

      {/* Help & Support */}
      <div className="flex flex-col gap-2">
        <Typography
          variant="caption"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={14}
          fontWeight="600"
        >
          Help & Support
        </Typography>

        <ul>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Help center
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Payments
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              Product returns
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              FAQ
            </Typography>
          </li>
        </ul>
      </div>

      {/* Subscribe */}
      <div className="flex flex-col gap-4">
        <Typography
          variant="caption"
          color={NEUTRAL_COLOR.neutral600}
          fontSize={14}
          fontWeight="600"
        >
          Sign up for exclusive offers and the latest news!
        </Typography>
        <FormControl
          fullWidth
          sx={{
            borderRadius: "12px",
            border: "1px solid",
            borderColor: NEUTRAL_COLOR.neutral400,
            position: "relative",
            padding: "4px 8px", // iç boşluq əlavə et
          }}
        >
          <HiOutlineMail
            size={20}
            color={NEUTRAL_COLOR.neutral600}
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <TextField
            id="email"
            type="email"
            name="email"
            placeholder="Your email..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              border: "none",
              "& fieldset": { border: "none" },
              paddingLeft: "28px",
            }}
          />
        </FormControl>
        <div className="flex gap-0.5">
          <Link to="https://github.com/MhrrmliEltac" target="_blank">
            <FaGithubSquare size={30} color={NEUTRAL_COLOR.neutral600} />
          </Link>
          <Link to="https://www.instagram.com/eltac.mhrrmli1/" target="_blank">
            <FaInstagramSquare size={30} color={NEUTRAL_COLOR.neutral600} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/eltac-meherremli/"
            target="_blank"
          >
            <FaLinkedin size={30} color={NEUTRAL_COLOR.neutral600} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebFooter;
