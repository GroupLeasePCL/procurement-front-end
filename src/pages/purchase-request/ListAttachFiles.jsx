import React, { useState } from "react";
import {
  useTheme,
  Box,
  Typography,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { AddBox, ModeEditRounded, Delete } from "@mui/icons-material";
import { useAppContext } from "../../context/appContext";
import { tokens } from "../../theme";
import { AlertText, Popup } from "../../components/";
import Controls from "../../components/controls/Controls";
import GridTable from "./components/GridTable";

const initialValues = {
  fileName: "",
  fileAddress: "C:/TestFolder",
  description: "",
  createBy: "Soraritt Chawapee",
  createDate: "30/08/2023",
  type: "add",
};
function ListAttachFiles(props) {
  const { columnsFile, data, dataLength, addItemAttachFile, mockDataFile } =
    props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openPopup, setOpenPopup] = useState(false);
  const [dataRows, setDataRows] = useState([]);
  const { showAlert2, displayAlert2 } = useAppContext();

  const [item, setItem] = useState({
    id: dataLength,
    fileName: "",
    fileAddress: "C:/TestFolder",
    description: "",
    createBy: "Soraritt Chawapee",
    createDate: "30/08/2023",
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
        displayAlert2({
          alertType: "warning",
          alertText: "please choose  1 item",
        });
      }
    }
  };

  const handleConfirm = (e) => {
    addItemAttachFile(item);
    setDataRows([]);
    setOpenPopup(false);
  };

  return (
    <>
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
            Attach File
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
                displayAlert2({
                  alertType: "error",
                  alertText: "please choose items",
                });
              } else {
                displayAlert2({
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
            onClick={mockDataFile}
          />

          {showAlert2 && <AlertText />}
        </Stack>
        <Box sx={{ mx: 1.25, paddingBottom: 0.25 }}>
          <GridTable
            columns={columnsFile}
            data={data}
            colors={colors}
            height="10vh"
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
                name="fileName"
                label="file-Name"
                value={item.fileName}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="fileAddress"
                label="file-Address"
                value={item.fileAddress}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="description"
                label="description"
                value={item.description}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="createBy"
                label="createBy"
                value={item.createBy}
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
                text="Add / Edit "
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

export default ListAttachFiles;
