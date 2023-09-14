import React, { useState } from "react";
import {
  useTheme,
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { AddBox, Delete, ModeEditRounded } from "@mui/icons-material";
import { useAppContext } from "../../context/appContext";
import { tokens } from "../../theme";
import { AlertText, Popup } from "../../components";
import Controls from "../../components/controls/Controls";
import GridTable from "./components/GridTable";

const initialValues = {
  itemName: "",
  quantity: "",
  unit: "ชิ้น",
  price: "",
  totalPrice: "",
  filePicture: "C:/",
  remark: "",
  type: "add",
};

function ListOrders(props) {
  const { columnsOrder, data, dataLength, addItem, mockDataList } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openPopup, setOpenPopup] = useState(false);
  const [dataRows, setDataRows] = useState([]);
  const { showAlert, displayAlert } = useAppContext();

  const [item, setItem] = useState({
    id: dataLength,
    itemName: "",
    quantity: "",
    unit: "ชิ้น",
    price: "",
    totalPrice: "",
    filePicture: "C:/",
    remark: "",
    type: "add",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleItem = (event, child) => {
    // console.log(event);
    // console.log(child);
    if (child === "addItem") {
      setItem({ id: dataLength, ...initialValues, type: "addItem" });
      setOpenPopup(true);
    } else if (child === "editItem") {
      const counts = dataRows.length;
      const tempData = data[dataRows[0] - 1];

      if (counts === 1) {
        setItem({ ...tempData, type: "editItem" });
        setOpenPopup(true);
      } else {
        displayAlert({
          alertType: "warning",
          alertText: "please choose  1 item",
        });
      }
    }
  };

  const handleConfirm = (e) => {
    addItem(item);
    setDataRows([]);
    setOpenPopup(false);
  };

  return (
    <>
      {/* {JSON.stringify(dataRows)} */}
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
          sx={{
            px: 1.25,
          }}
        >
          <Typography color={colors.greenAccent[400]} variant="h6">
            List
          </Typography>
        </Box>
      </Box>

      <Box
        backgroundColor={colors.primary[400]}
        sx={{ my: 0.25 }}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Stack
          direction="row"
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <IconButton
            color="third"
            size="small"
            onClick={(event) => handleItem(event, "addItem")}
          >
            <AddBox />
          </IconButton>
          <IconButton
            color="third"
            size="small"
            onClick={(event) => handleItem(event, "editItem")}
          >
            <ModeEditRounded />
          </IconButton>
          <IconButton
            color="third"
            size="small"
            onClick={(e) => {
              const counts = dataRows.length;
              if (counts === 0) {
                displayAlert({
                  alertType: "error",
                  alertText: "please choose  items",
                });
              } else {
                displayAlert({
                  alertType: "success",
                  alertText: "Delete Complease",
                });
              }
            }}
          >
            <Delete />
          </IconButton>
          <Controls.Button
            variant="text"
            color="secondary"
            text="Mock data"
            size="small"
            onClick={mockDataList}
          />
          {showAlert && <AlertText />}
        </Stack>
        <Box sx={{ mx: 1.25, paddingBottom: 0.25 }}>
          <GridTable
            columns={columnsOrder}
            data={data}
            colors={colors}
            height="20vh"
            dataRows={dataRows}
            setDataRows={setDataRows}
          />
        </Box>
      </Box>
      <Popup
        title="Add / Edit"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <div>
          <Box
            backgroundColor={colors.primary[400]}
            sx={{ py: 1 }}
            borderRadius="4px"
          >
            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ mx: 1.25 }}
            >
              <Typography color={colors.greenAccent[400]} variant="h6">
                ID : {item.id}
              </Typography>
            </Stack>
            <Box
              display="grid"
              gap="8px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              backgroundColor={colors.primary[400]}
              sx={{
                py: "15px",
                px: "8px",
                "& > div": "span 4",
              }}
            >
              <Controls.Input
                name="itemName"
                label="item-Name"
                value={item.itemName}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="quantity"
                label="quantity"
                value={item.quantity}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="unit"
                label="unit"
                value={item.unit}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="price"
                label="price"
                value={item.price}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="totalPrice"
                label="total-Price"
                value={item.totalPrice}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="filePicture"
                label="file-Picture"
                value={item.filePicture}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="remark"
                label="remark"
                value={item.remark}
                onChange={handleInputChange}
              />
            </Box>
            <Stack
              direction="row"
              sx={{ px: "8px", marginBottom: 1, marginTop: -1 }}
            >
              <Controls.Button
                color="secondary"
                variant="contained"
                text="Add / Edit"
                size="small"
                onClick={handleConfirm}
              />
            </Stack>
          </Box>
        </div>
      </Popup>
    </>
  );
}

export default ListOrders;
