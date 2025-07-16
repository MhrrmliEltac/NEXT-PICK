import { Divider, Typography } from "@mui/material";
import { useFetch } from "../api/useFetch";
import { NEUTRAL_COLOR } from "../constant/colors";

import MobileFooter from "../components/footer/MobileFooter";
import WebFooter from "../components/footer/WebFooter";

const Footer = () => {
  const { data: INFO_DATA } = useFetch<any>("/info/list");

  return (
    <footer style={{ background: NEUTRAL_COLOR.neutral130 }} className={``}>
      <WebFooter INFO_DATA={INFO_DATA} />

      <MobileFooter INFO_DATA={INFO_DATA} />

      <Divider
        sx={{
          width: "100%",
          height: "2px",
          background:
            "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
        }}
      />

      <section className="md:px-[109px] px-5 py-[22px] flex justify-between items-center flex-wrap mx-auto transition-all duration-300 gap-5 max-w-[1830px]">
        <Typography
          variant="body2"
          color={NEUTRAL_COLOR.neutral400}
          fontSize={12}
          fontWeight="400"
        >
          © 2024 NEXTPICK. All Rights Reserved.
        </Typography>

        <ul className="flex justify-between items-center gap-5 flex-wrap">
          <li>
            <Typography
              variant="body2"
              color={NEUTRAL_COLOR.neutral400}
              fontSize={12}
              fontWeight="400"
            >
              Privacy policy
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={NEUTRAL_COLOR.neutral400}
              fontSize={12}
              fontWeight="400"
            >
              Cookie settings
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={NEUTRAL_COLOR.neutral400}
              fontSize={12}
              fontWeight="400"
            >
              Terms and conditions
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={NEUTRAL_COLOR.neutral400}
              fontSize={12}
              fontWeight="400"
            >
              Imprint
            </Typography>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
