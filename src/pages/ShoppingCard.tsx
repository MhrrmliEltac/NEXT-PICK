import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import { NEUTRAL_COLOR } from "@/constant";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import NumberFlow from "@number-flow/react";

const ShoppingCard = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleClick = (operation: string) => {
    switch (operation) {
      case "increment":
        setQuantity((prev: number) => prev + 1);
        return;
      case "decrement":
        if (quantity > 0) setQuantity((prev: number) => prev - 1);
        return;
    }
  };

  return (
    <section>
      <CustomBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Shopping cart",
          },
        ]}
        title="Shopping cart"
      />

      <div className="max-w-[1524px] w-[90%] mx-auto mb-[80px] mt-[80px] transition-all duration-300">
        <Grid container spacing={7}>
          <Grid
            size={{
              xs: 12,
              md: 8,
              lg: 8,
            }}
            sx={{ transition: "all 0.3s ease" }}
          >
            <Card className="gap-4 !border border-[#E5E5E5] !shadow-sm transition-all duration-300">
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    gap: {
                      xs: "24px",
                      md: "40px",
                    },
                    justifyContent: "space-evenly",
                    flexWrap: {
                      xs: "wrap",
                      sm: "nowrap",
                    },
                  }}
                >
                  <img
                    src="/9cca1d209dc53dbb7e63ba1b557818275169ed87.png"
                    alt="product_img"
                    className="w-[350px] h-[200px] max-sm:w-full max-md:h-full transition-all duration-300"
                  />
                  <Box sx={{ transition: "0.3s all ease" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        gap: "5px",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="caption"
                          fontWeight={500}
                          color={NEUTRAL_COLOR.neutral600}
                          fontSize={{
                            xs: 12,
                            md: 16,
                          }}
                        >
                          HP Laptop with Intel Core i7
                        </Typography>
                        <Typography
                          variant="overline"
                          fontWeight={400}
                          color={NEUTRAL_COLOR.neutral600}
                          fontSize={{
                            xs: 10,
                            md: 14,
                          }}
                        >
                          Intel Core i7 | 16GB RAM | 1TB SSD | 14” WQXGA Display
                        </Typography>
                      </Box>
                      <MdDeleteOutline
                        size={25}
                        color={NEUTRAL_COLOR.neutral800}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "4px",
                      }}
                    >
                      <Typography
                        variant="overline"
                        fontWeight={400}
                        fontSize={{
                          xs: "10px",
                          md: "20px",
                        }}
                        color={NEUTRAL_COLOR.neutral400}
                      >
                        €1,299
                      </Typography>
                      <Typography
                        variant="overline"
                        fontWeight={400}
                        fontSize={{
                          xs: "10px",
                          md: "20px",
                        }}
                        color="#C33104"
                      >
                        €1,104
                      </Typography>
                    </Box>
                    <ListItem
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          backgroundColor: "#0C68F4",
                          borderRadius: "50%",
                          mr: "8px",
                        }}
                      ></Box>
                      <ListItemText
                        sx={{
                          m: 0,
                          "& .MuiTypography-root": {
                            fontSize: {
                              xs: "10px",
                              md: "14px",
                            },
                            color: NEUTRAL_COLOR.neutral800,
                            fontWeight: 500,
                          },
                        }}
                      >
                        Home delivery
                      </ListItemText>
                    </ListItem>
                    <Box
                      sx={{
                        border: "1px solid #272727",
                        borderRadius: "8px",
                        p: "8px",
                        width: {
                          xs: "",
                          md: "96px",
                        },
                        height: {
                          xs: "",
                          md: "36px",
                        },
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{
                          color: "#292D32",
                          p: 0,
                          m: 0,
                          minWidth: 10,
                          fontSize: "25px",
                        }}
                        onClick={() => handleClick("decrement")}
                      >
                        -
                      </Button>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ p: 0, m: 0 }}
                      >
                        <NumberFlow value={quantity} />
                      </Typography>
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{
                          color: "#292D32",
                          p: 0,
                          m: 0,
                          minWidth: 10,
                          fontSize: "20px",
                        }}
                        onClick={() => handleClick("increment")}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 3,
              lg: 4,
            }}
            sx={{ transition: "all 0.3s ease" }}
          >
            <Card className="gap-4 !border border-[#E5E5E5] !shadow-sm transition-all duration-300">
              <CardContent></CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ShoppingCard;
