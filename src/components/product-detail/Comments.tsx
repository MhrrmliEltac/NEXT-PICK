import { TfiArrowCircleRight } from "react-icons/tfi";
import Heading from "../general/Heading";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { Progress } from "../ui/progress";
import { ShadButton } from "../ui/button";
import { Comment, ProductDataType } from "@/types/types";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { BsStarFill } from "react-icons/bs";

const Comments = ({
  PRODUCT_DATA,
}: {
  PRODUCT_DATA: ProductDataType | null;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const getPercentToRating = (rating: number): number => {
    const count = PRODUCT_DATA?.comment
      ? PRODUCT_DATA.comment.filter(
          (comment: Comment) => comment.rating === rating
        ).length
      : 0;
    const total = PRODUCT_DATA?.comment ? PRODUCT_DATA.comment.length : 0;
    if (!total) return 0;
    return Number(((count / total) * 100).toFixed(1));
  };
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const lastComment = PRODUCT_DATA?.comment.slice(0, 5) || [];

  return (
    <section>
      {/* Header */}
      <Heading
        title="User ratings and reviews"
        btnTitle="View all"
        Icon={TfiArrowCircleRight}
        onClick={handleOpen}
      />

      {/* Divider */}
      <Divider
        sx={{
          width: "100%",
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(147,147,147,0.2), rgba(147,147,147,0.2))",
          mb: 4,
        }}
      />

      {/* Comments */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Card
            sx={{
              border: "1px solid",
              borderColor: "#CBCBCB",
              borderRadius: "8px",
              boxShadow: "none",
            }}
            className="shadow-none"
          >
            <CardContent>
              <div className="flex flex-col justify-center items-center gap-5 mb-12">
                <Typography
                  variant="h4"
                  fontSize={24}
                  fontWeight={600}
                  color={NEUTRAL_COLOR.neutral800}
                >
                  Customer reviews
                </Typography>
                <Rating
                  value={5}
                  readOnly
                  defaultValue={5}
                  sx={{ color: NEUTRAL_COLOR.neutral800 }}
                />
              </div>
              {/* Star rating progress & percent */}
              <div className="flex flex-col gap-8 mb-6">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div
                    key={star}
                    className="flex gap-2 items-center justify-between"
                  >
                    <span className="font-roboto text-[12px] text-[#4B4B4B]">
                      {star} star
                    </span>
                    <Progress
                      value={getPercentToRating(star)}
                      style={{ color: "#1FC16B" }}
                      className="w-[70%]"
                    />
                    <span className="font-roboto text-[12px] text-[#4B4B4B]">
                      {getPercentToRating(star)}%
                    </span>
                  </div>
                ))}
              </div>
              <Typography
                component="span"
                fontSize={16}
                fontWeight={500}
                color={NEUTRAL_COLOR.neutral800}
              >
                Share your feedback and create a better shopping experience for
                everyone. Thank you for taking the time to share your opinion.
              </Typography>
              <ShadButton className="w-full mt-6 bg-[#1A4DE1] text-white hover:bg-[#1A4DE1]">
                Write a review
              </ShadButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          {lastComment && lastComment.length > 0 ? (
            lastComment.map((comment: Comment, index: number) => (
              <Card
                sx={{
                  border: "1px solid",
                  borderColor: "#CBCBCB",
                  borderRadius: "8px",
                  boxShadow: "none",
                }}
                className="shadow-none mb-[24px]"
                key={index}
              >
                <CardContent className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <Rating
                        value={comment.rating}
                        defaultValue={comment.rating}
                        readOnly
                        sx={{ color: NEUTRAL_COLOR.neutral800 }}
                      />
                      <span>{comment.rating.toFixed(1)}</span>
                    </div>
                    <Typography
                      component="span"
                      fontSize={14}
                      color={NEUTRAL_COLOR.neutral500}
                    >
                      {comment.user}
                    </Typography>
                  </div>
                  <span className="mt-[15px]">{comment.message}</span>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography component="span">No reviews yet</Typography>
          )}
        </Grid>
      </Grid>

      {/* All review */}
      <Sheet open={open} onOpenChange={handleOpen}>
        <SheetContent className="p-0 m-0 !max-w-[45rem]">
          <SheetHeader className="bg-[#1A4DE1] text-white flex justify-center items-center py-4 h-[57px]">
            <SheetTitle className="text-white font-roboto text-[18px]">
              All review ({PRODUCT_DATA?.comment.length})
            </SheetTitle>
          </SheetHeader>
          <section>
            <div className="h-[82px] w-full py-4 px-2 flex items-center  border-b-2 border-[#939393]">
              <div className="w-[78px] h-[66px] flex items-center justify-center">
                <img
                  src={PRODUCT_DATA?.image}
                  alt="product_image"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1 justify-start w-[80%]">
                <Typography
                  variant="caption"
                  component="span"
                  color={NEUTRAL_COLOR.neutral600}
                  fontSize={12}
                  fontWeight={500}
                  pt="5px"
                >
                  {PRODUCT_DATA?.productName}
                </Typography>
                <div className="flex gap-1 items-center">
                  <BsStarFill className="w-3 h-3 text-[#2B2B2B]" />
                  <span className="text-[#2B2B2B]">{PRODUCT_DATA?.rating}</span>
                  <span className="text-[#2B2B2B]">
                    ({PRODUCT_DATA?.comment.length})
                  </span>
                </div>
                <div className="flex gap-1 justify-end">
                  <Typography
                    component="span"
                    variant="caption"
                    fontSize={14}
                    fontWeight={600}
                    color={
                      PRODUCT_DATA?.discount
                        ? NEUTRAL_COLOR.neutral400
                        : NEUTRAL_COLOR.neutral650
                    }
                    sx={{
                      textDecoration: PRODUCT_DATA?.discount
                        ? "line-through"
                        : "none",
                    }}
                  >
                    €{PRODUCT_DATA?.price}
                  </Typography>
                  {PRODUCT_DATA?.discount && (
                    <Typography
                      component="span"
                      variant="caption"
                      fontSize={14}
                      color="#C33104"
                      fontWeight={600}
                    >
                      €{PRODUCT_DATA?.discountPrice}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
            {lastComment && lastComment.length > 0 ? (
              lastComment.map((comment: Comment, index: number) => (
                <div
                  className="flex flex-col gap-1 p-4 border-b-2 border-[#939393] overflow-y-scroll"
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <Rating
                        value={comment.rating}
                        defaultValue={comment.rating}
                        readOnly
                        sx={{ color: NEUTRAL_COLOR.neutral800 }}
                      />
                      <span>{comment.rating.toFixed(1)}</span>
                    </div>
                    <Typography
                      component="span"
                      fontSize={14}
                      color={NEUTRAL_COLOR.neutral500}
                    >
                      {comment.user}
                    </Typography>
                  </div>
                  <span className="mt-[15px]">{comment.message}</span>
                </div>
              ))
            ) : (
              <Typography component="span">No reviews yet</Typography>
            )}
          </section>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Comments;
