import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { NEUTRAL_COLOR } from "../../constant/colors";
import { path } from "@/utils/paths";

const Info = () => {
  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[40px] h-full">
      <Grid container spacing={3} sx={{ height: "100%" }}>
        <Grid size={{ xs: 12, md: 8 }} sx={{ height: "100%" }}>
          <Card
            sx={{
              backgroundImage:
                "url('https://i.pcmag.com/imagery/articles/07cGgEGVmFwnVo9OehE3IZ8-1.fit_lim.size_1600x900.v1720040734.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "446px",
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                px: "48px",
                pb: "48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  color={NEUTRAL_COLOR.neutral200}
                  fontSize={20}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "20px",
                    },
                  }}
                >
                  MacBook Pro
                </Typography>
                <Typography
                  variant="h6"
                  color={NEUTRAL_COLOR.neutral650}
                  sx={{ fontSize: { xs: "14px", sm: "20px" } }}
                >
                  Now with the Apple M1 chip redefining <br /> speed,
                  efficiency, and performance.
                </Typography>
              </Box>
              <Button
                LinkComponent="a"
                href={path.urlPaths.auth.register}
                variant="contained"
                color="primary"
                sx={{
                  height: "min-content",
                  px: "32px",
                  py: "15px",
                  borderRadius: "8px",
                }}
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
              >
                Register now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: "100%" }}>
          <Card
            sx={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141337.jpg')",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "446px",
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                px: "48px",
                pb: "48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  color={NEUTRAL_COLOR.neutral500}
                  fontSize={20}
                >
                  Speakers
                </Typography>
                <Typography
                  variant="h6"
                  color={NEUTRAL_COLOR.neutral650}
                  fontSize={16}
                >
                  The ultimate listening <br /> experience.
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: "min-content",
                  px: "32px",
                  py: "15px",
                  borderRadius: "8px",
                }}
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
              >
                Buy now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Info;
