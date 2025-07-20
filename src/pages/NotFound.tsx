import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h1"
          className="text-[80px] font-bold text-[#4A73EA]"
        >
          404
        </Typography>
        <Typography variant="h5" className="mt-2 text-gray-700 font-semibold">
          Oops! Səhifə tapılmadı
        </Typography>
        <Typography variant="body1" className="mt-1 text-gray-500">
          Axtardığınız səhifə mövcud deyil və ya silinib.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#4A73EA",
            "&:hover": { backgroundColor: "#3a5ed7" },
            borderRadius: "8px",
          }}
          onClick={() => navigate("/")}
        >
          Ana Səhifəyə Qayıt
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
