import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <img src="/error404.png" alt="" />
        </div>

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
