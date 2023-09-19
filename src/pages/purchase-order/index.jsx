import React from "react";

import { useTheme, Box, Typography, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import { useAppContext } from "../../context/appContext";
import { mockTransactions } from "../../data/mockData";

const initialFValues = {
  purchaseOrder: "PR-230900001",
  purchaseOrderDate: dayjs(new Date()),
  purchaseRequest: [],
};

const PurchaseOrder = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { profile } = useAppContext();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // if ("firstname" in fieldValues)
    //   temp.firstname = fieldValues.firstname ? "" : "กรุณาใส่ ชื่อ";
    // if ("lastname" in fieldValues)
    //   temp.lastname = fieldValues.lastname ? "" : "กรุณาใส่ นามสกุล";
    // if ("telphone" in fieldValues) {
    //   // console.log(fieldValues.telphone.length)
    //};
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    validate,
    true
  ); //, resetForm
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Purchase Order" subtitle="Purchase Order items" />
      </Box>
      <Form>
        {/* GRID & CHARTS */}
        <Typography>{JSON.stringify(values)}</Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              gap="10px"
              p="12px 15px"
              display="grid"
              backgroundColor={colors.primary[400]}
              sx={{
                "& > div": "span 4",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(320px, 1fr))!important",
              }}
              borderRadius="4px"
            >
              <Controls.Input
                name="purchaseOrder"
                label="เลขที่ / Po No."
                //onChange={handleInputChange}
                value={values.purchaseOrder}
                disabled
              />
              <Controls.DatetimePicker
                name="purchaseOrderDate"
                label="วันที่ / Po Date."
                value={values.purchaseOrderDate}
                onChange={(e) =>
                  setValues({
                    ...values,
                    purchaseOrderDate: dayjs(e, "YYYY-MM-DD", true),
                  })
                }
              />
              <Controls.Input
                name="purchaseRquestList"
                label="เลขที่ / Pr No."
              />
            </Box>

            <Box height="250px" m="-20px 0 0 0">
              {/* <LineChart isDashboard={true} /> */}
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

export default PurchaseOrder;
