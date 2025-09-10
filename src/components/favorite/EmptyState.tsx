import { Typography } from "@mui/material";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animateVariants";

type EmptyStateProps = {
  image: string;
  message: string;
  buttonText: string;
  buttonLink: string;
};

const EmptyState = ({
  image,
  message,
  buttonText,
  buttonLink,
}: EmptyStateProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[50vh] text-center"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src={image}
        alt="Empty State"
        className="w-48 h-48 mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Typography
          variant="h6"
          color={NEUTRAL_COLOR.neutral800}
          sx={{ mb: 2 }}
        >
          {message}
        </Typography>
      </motion.div>
      <motion.button
        onClick={() => navigate(buttonLink)}
        className="bg-[#1A4DE1] hover:bg-[#163dc2] text-white py-2 px-4 rounded-md text-sm transition duration-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default EmptyState;
