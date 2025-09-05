import { CardContent, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FavoriteSummary = ({
  length,
  total,
  discountTotal,
}: {
  length: number;
  total: number;
  discountTotal: number;
}) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: "#CBCBCB",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          borderColor: "#1A4DE1",
        },
      }}
      component="div"
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2, color: "#1A1A1A" }}
        >
          🛒 Wishlist Summary
        </Typography>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">Total Products:</span>
          <span className="font-semibold text-sm">{length}</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">Original Price:</span>
          <span className="font-semibold text-sm text-gray-500 line-through">
            €{total}
          </span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">Discounted Price:</span>
          <span className="font-semibold text-sm text-red-500">
            €{discountTotal}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-sm">You Save:</span>
          <span className="font-semibold text-sm text-green-600">
            €{(total - discountTotal).toFixed(2)}
          </span>
        </div>

        <div className="w-full flex justify-end">
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#1A4DE1] hover:bg-[#163dc2] text-white py-2 px-4 rounded-md text-sm transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FavoriteSummary;
