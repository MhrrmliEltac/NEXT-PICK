import {
  Box,
  Checkbox,
  Divider,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import Wrapper from "./Wrapper";
import { useCallback, useMemo, useState } from "react";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { orderHistory } from "@/_mock/orderHistory";
import { formatTime } from "@/helpers/formatTime";
import { OrderHistoryType, OrderStatus } from "@/types/types";

const Orders = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  const changeOrderByStatus = useCallback(
    (status: OrderStatus) => {
      return orderHistory.filter(
        (order: OrderHistoryType) => order.status.toUpperCase() === status
      );
    },
    [value]
  );

  const filteredOrder = useMemo(() => {
    switch (value) {
      case 0:
        return orderHistory;
      case 1:
        return changeOrderByStatus(OrderStatus.PENDING);
      case 2:
        return changeOrderByStatus(OrderStatus.PROCESSING);
      case 3:
        return changeOrderByStatus(OrderStatus.COMPLETED);
      case 4:
        return changeOrderByStatus(OrderStatus.CANCELLED);
    }
  }, [value, orderHistory]);

  return (
    <Wrapper title="Order History">
      <TableContainer component={Paper}>
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          variant="scrollable"
        >
          {["All", "Pending", "Processing", "Completed", "Cancelled"].map(
            (label, index) => (
              <Tab key={index} label={label} />
            )
          )}
        </Tabs>

        <Divider sx={{ my: "16px" }} />

        <Table>
          <TableHead sx={{ mb: "16px" }}>
            <TableRow
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "end",
              }}
            >
              {[
                "Order Number",
                "Product",
                "Total Payment",
                "Order Date",
                "Status",
              ].map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    backgroundColor: NEUTRAL_COLOR.neutral180,
                    px: "8px",
                    py: "2px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: NEUTRAL_COLOR.neutral600,
                    fontWeight: 600,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrder &&
              filteredOrder.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    mb: "16px",
                  }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "200px",
                      width: "100px",
                    }}
                  >
                    <Checkbox disableRipple />
                    <Typography
                      variant="button"
                      sx={{
                        color: NEUTRAL_COLOR.neutral600,
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      {order.orderNumber}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      maxWidth: "200px",
                      width: "200px",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: NEUTRAL_COLOR.neutral200,
                        borderRadius: "8px",
                        color: "white",
                        maxWidth: "249px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={order.product.image}
                        alt={order.product.name}
                        className="w-12 h-12 object-contain"
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            fontSize: "14px",
                            color: NEUTRAL_COLOR.neutral600,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            maxWidth: "100px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {order.product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "12px",
                            color: NEUTRAL_COLOR.neutral500,
                          }}
                        >
                          x{order.product.quantity}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "12px",
                            color: NEUTRAL_COLOR.neutral500,
                          }}
                        >
                          {order.product.color}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      maxWidth: "200px",
                      width: "100px",
                    }}
                  >
                    €{order.totalPayment}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      maxWidth: "200px",
                      width: "100px",
                    }}
                  >
                    {formatTime(order.orderDate)}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      maxWidth: "200px",
                      width: "150px",
                    }}
                  >
                    {order.status}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default Orders;
