import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { NEUTRAL_COLOR } from "../../constant/colors";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { InfoDataType } from "@/types/types";

const MobileFooter = ({ INFO_DATA }: { INFO_DATA: InfoDataType[] }) => {
  return (
    <section className="flex flex-col justify-between md:hidden items-center flex-wrap gap-4 max-w-[1680px] md:px-[61px] px-5 py-[55px] mx-auto transition-all duration-300">
      {/* E-commerce support */}
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          width: "100%",
          "&:before": {
            display: "none",
          },
          "&:after": {
            content: '""',
            display: "block",
            height: "2px", // border qalınlığı
            width: "100%",
            background:
              "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
            mt: 1, // accordion ilə xətt arasında məsafə
          },
        }}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore size={30} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <Typography
            component="span"
            variant="body2"
            fontSize={18}
            fontWeight={300}
            color={NEUTRAL_COLOR.neutral800}
          >
            E-commerce support
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: 0,
          }}
        >
          {INFO_DATA &&
            INFO_DATA.length > 0 &&
            INFO_DATA.map((info: InfoDataType, index: number) => (
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
        </AccordionDetails>
      </Accordion>

      {/* Working hours */}
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          width: "100%",
          "&:before": {
            display: "none",
          },
          "&:after": {
            content: '""',
            display: "block",
            height: "2px", // border qalınlığı
            width: "100%",
            background:
              "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
            mt: 1, // accordion ilə xətt arasında məsafə
          },
        }}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore size={30} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <Typography
            component="span"
            variant="body2"
            fontSize={18}
            fontWeight={300}
            color={NEUTRAL_COLOR.neutral800}
          >
            Working hours
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: 0,
          }}
        >
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
        </AccordionDetails>
      </Accordion>

      {/* About us  */}
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          width: "100%",
          "&:before": {
            display: "none",
          },
          "&:after": {
            content: '""',
            display: "block",
            height: "2px", // border qalınlığı
            width: "100%",
            background:
              "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
            mt: 1, // accordion ilə xətt arasında məsafə
          },
        }}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore size={30} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <Typography
            component="span"
            variant="body2"
            fontSize={18}
            fontWeight={300}
            color={NEUTRAL_COLOR.neutral800}
          >
            About us
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: 0,
          }}
        >
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
        </AccordionDetails>
      </Accordion>

      {/* Help & Support */}
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          width: "100%",
          "&:before": {
            display: "none",
          },
          "&:after": {
            content: '""',
            display: "block",
            height: "2px",
            width: "100%",
            background:
              "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore size={30} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <Typography
            component="span"
            variant="body2"
            fontSize={18}
            fontWeight={300}
            color={NEUTRAL_COLOR.neutral800}
          >
            Help & Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: 0,
          }}
        >
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
        </AccordionDetails>
      </Accordion>

      {/* Subscribe */}
      <div className="flex flex-col gap-4 w-full">
        <Typography
          variant="h4"
          color={NEUTRAL_COLOR.neutral600}
          fontSize={16}
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

export default MobileFooter;
