import React from "react";

import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";

import dayjs from "dayjs";
import {
  mockDataPurchaseOrder,
  columnsOrder,
  columnsFile,
} from "../../data/mock-data-pr/mockData";
import ListAttachFiles from "./ListAttachFiles";
import ListOrders from "./ListOrders";
import { useAppContext } from "../../context/appContext";

const PurchaseRequest = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { profile } = useAppContext();

  const initialFValues = {
    purchaseRequest: "PR-230900001",
    purchaseRequestDate: dayjs(new Date()),
    purchaseOrder: "",
    purchaseOrderDate: "",
    requestName: profile.fullName,
    prType: "",
    department: profile.department,
    section: "",
    position: profile.position,
    telephone: "",
    dealDate: dayjs(new Date()),
    reference: "",
    requestor: profile.fullName,
    requestorDate: dayjs(new Date()),
    approve: profile.manager,
    approveDate: dayjs(new Date()),
    orderItems: [],
    orderFileItems: [],
  };

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

  const addItem = (item) => {
    // console.log(item);
    const type = item.type;
    if (type === "editItem") {
      let recordIndex = values.orderItems.findIndex((i) => i.id === item.id);

      const orderItemsTemp = [
        ...values.orderItems.slice(0, recordIndex),
        item,
        ...values.orderItems.slice(recordIndex + 1),
      ];

      setValues({ ...values, orderItems: orderItemsTemp });
    } else if (type === "addItem") {
      setValues({ ...values, orderItems: [...values.orderItems, item] });
    }
  };

  const addItemAttachFile = (item) => {
    // console.log(item);
    const type = item.type;
    if (type === "editItem") {
      let recordIndex = values.orderFileItems.findIndex(
        (i) => i.id === item.id
      );

      const orderFileItemsTemp = [
        ...values.orderFileItems.slice(0, recordIndex),
        item,
        ...values.orderFileItems.slice(recordIndex + 1),
      ];
      // console.log(orderFileItems);

      setValues({ ...values, orderFileItems: orderFileItemsTemp });
    } else if (type === "addItem") {
      setValues({
        ...values,
        orderFileItems: [...values.orderFileItems, item],
      });
    }
  };

  const mockDataList = (e) => {
    setValues({
      ...values,
      orderItems: mockDataPurchaseOrder.orderItems,
    });
  };

  const mockDataFile = (e) => {
    setValues({
      ...values,
      orderFileItems: mockDataPurchaseOrder.orderFileItems,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Purchase Request" subtitle="Purchase Request items" />
      <Form>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="20px"
          gap="20px"
          sx={{
            marginTop: 0.75,
          }}
        >
          <Box
            gridColumn="span 3"
            borderRadius="4px"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              px: 1.25,
            }}
          >
            <Typography color={colors.greenAccent[400]} variant="h6">
              User Request
            </Typography>
          </Box>
        </Box>
        <Box
          gap="10px"
          p="12px 15px"
          display="grid"
          backgroundColor={colors.primary[400]}
          sx={{
            "& > div": "span 4",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))!important",
            // "repeat(auto-fill, [col-start] minmax(420px, 1fr) [col-end])",
          }}
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <Controls.Input
            name="purchaseRequest"
            label="เลขที่ / Pr No."
            onChange={handleInputChange}
            value={values.purchaseRequest}
            disabled
          />
          <Controls.DatetimePicker
            name="purchaseRequestDate"
            label="วันที่ / Pr Date."
            value={values.purchaseRequestDate}
            onChange={(e) =>
              setValues({
                ...values,
                purchaseRequestDate: dayjs(e, "YYYY-MM-DD", true),
              })
            }
          />
          <Controls.Input
            name="purchaseOrder"
            label="เลขที่ / Po No."
            onChange={handleInputChange}
            value={values.purchaseOrder}
            disabled
          />
          <Controls.Input
            name="purchaseOrderDate"
            label="วันที่ / Po Date."
            onChange={handleInputChange}
            value={values.purchaseOrderDate}
            disabled
          />
          <Controls.Input
            name="requestName"
            label="ผู้ขอซื้อ"
            onChange={handleInputChange}
            value={values.requestName}
            disabled
          />
          <Controls.Input
            name="prType"
            label="ประเภทร้องขอ"
            onChange={handleInputChange}
            value={values.prType}
          />
          <Controls.Input
            name="department"
            label="ฝ่าย"
            onChange={handleInputChange}
            value={values.department}
            disabled
          />
          <Controls.Input
            name="section"
            label="ส่วน"
            onChange={handleInputChange}
            value={values.section}
          />
          <Controls.Input
            name="position"
            label="ตำแหน่ง"
            onChange={handleInputChange}
            value={values.position}
            disabled
          />
          <Controls.Input
            name="telephone"
            label="เบอร์โทรศัพท์"
            onChange={handleInputChange}
            value={values.telephone}
          />
          <Controls.DatetimePicker
            name="dealDate"
            label="ต้องการสินค้าวันที่"
            value={values.dealDate}
            onChange={(e) =>
              setValues({
                ...values,
                dealDate: dayjs(e, "YYYY-MM-DD", true),
              })
            }
          />
          <Controls.Input
            name="reference"
            label="เลขที่อ้างอิง"
            onChange={handleInputChange}
            value={values.reference}
          />
        </Box>
        <ListOrders
          columnsOrder={columnsOrder}
          data={values.orderItems || undefined}
          dataLength={values === undefined ? 0 : values.orderItems.length + 1}
          addItem={addItem}
          mockDataList={mockDataList}
        />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="20px"
          gap="20px"
        >
          <Box
            gridColumn="span 3"
            borderRadius="4px"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{ px: 1.25 }}
          >
            <Typography color={colors.greenAccent[400]} variant="h6">
              Requestor / Approver Department
            </Typography>
          </Box>
        </Box>
        <Box
          display="grid"
          gap="8px"
          p="10px 15px"
          backgroundColor={colors.primary[400]}
          sx={{
            "& > div": "span 4",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(320px, 1fr))!important",
          }}
          border={`1px solid ${colors.grey[300]}`}
          borderRadius="4px"
        >
          <Controls.Input
            name="requestor"
            label="requestor"
            onChange={handleInputChange}
            value={values.requestor}
            disabled
          />
          <Controls.DatetimePicker
            name="requestorDate"
            label="วันที่ อนุมัติ"
            value={values.requestorDate}
            onChange={(e) =>
              setValues({
                ...values,
                requestorDate: dayjs(e, "YYYY-MM-DD", true),
              })
            }
          />
          <Controls.Input
            name="approve"
            label="approve"
            onChange={handleInputChange}
            value={values.approve}
            disabled
          />
          <Controls.DatetimePicker
            name="approveDate"
            label="วันที่ อนุมัติ"
            value={values.approveDate}
            onChange={(e) =>
              setValues({
                ...values,
                approveDate: dayjs(e, "YYYY-MM-DD", true),
              })
            }
          />
        </Box>
        <ListAttachFiles
          columnsFile={columnsFile}
          data={values.orderFileItems || undefined}
          dataLength={
            values === undefined ? 0 : values.orderFileItems.length + 1
          }
          addItemAttachFile={addItemAttachFile}
          mockDataFile={mockDataFile}
        />
        <Box
          display="flex"
          justifyContent="start"
          mt="20px"
          sx={{ my: 0.75, "& > div": "span 4" }}
        >
          <Controls.Button
            type="submit"
            onClick={handleSubmit}
            color="secondary"
            variant="contained"
            text=" Create Purchase Request"
            size="small"
            // style={{ fontSize: "18px", FontFace: 200 }}
          />
        </Box>
      </Form>
    </Box>
  );
};

export default PurchaseRequest;
