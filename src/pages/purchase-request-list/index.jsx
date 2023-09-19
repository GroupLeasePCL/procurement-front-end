import React from "react";
import { Box, useTheme } from "@mui/material";
import clsx from "clsx";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint from "react-to-print";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Controls from "../../components/controls/Controls";
import { mockDataPurchaseRequests } from "../../data/mock-data-pr-list/mockData";

const PurchaseRequestList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Id", width: 20 },
    { field: "requestNo", headerName: "Request No.", width: 120 },
    { field: "requestDate", headerName: "Request Date.", width: 100 },
    {
      field: "requestName",
      headerName: "Request Name",
      cellClassName: "name-column--cell",
      width: 150,
    },
    {
      field: "department",
      headerName: "Department",
      width: 100,
    },
    { field: "phone", headerName: "Phone Number", width: 100 },
    {
      field: "NumberItems",
      headerName: "Number items",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 100,
    },
    {
      field: "approveName",
      headerName: "Approve Name",
      cellClassName: "name-column--cell",
      width: 150,
    },
    { field: "approveDate", headerName: "Approve Date", width: 100 },
    {
      field: "status",
      headerName: "status",
      width: 100,

      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }
        return clsx("status-app", {
          approve: params.value === "approve",
          reject: params.value === "reject",
          waiting: params.value === "waiting",
        });
      },
    },

    {
      field: "accessLevel",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            justifyContent="start"
            borderRadius="2px"
            sx={{ "& button": { mx: 0.25 } }}
          >
            <Controls.Button
              text="Edit"
              size="small"
              color="secondary"
              borderRadius={50}
            />
            <Controls.Button
              text="Delete"
              size="small"
              color="secondary"
              borderRadius={50}
            />
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="List" subtitle="Purchase Request List" />
      </Box>
      <Box
        m="0 0 0 0"
        width="95%"
        height="70vh"
        backgroundColor={colors.primary[400]}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .status-app": {
            color: "#000",
            justifyContent: "center",
            ":hover": {
              color: "#000",
            },
          },
          "& .status-app.approve": {
            backgroundColor: "hsl(120, 73.4%, 74.9%);",
            fontWeight: "600",
            ":hover": {
              cursor: "pointer",
              color: "#000",
              backgroundColor: "hsl(125, 67%, 44%)",
            },
          },
          "& .status-app.reject": {
            backgroundColor: "hsl(0, 78.9%, 72.2%)",
            fontWeight: "600",
            ":hover": {
              cursor: "pointer",
              color: "#000",
              backgroundColor: "hsl(0, 68%, 58%)",
            },
          },
          "& .status-app.waiting": {
            backgroundColor: "hsl(59, 92.2%, 74.9%)",
            fontWeight: "600",
            ":hover": {
              cursor: "pointer",
              color: "#000",
              backgroundColor: "hsl(54, 92%, 60%)",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-rowCount": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataPurchaseRequests}
          columns={columns}
          columnHeaderHeight={28}
          rowHeight={26}
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            fontFamily: "DM Sans",
            fontSize: 12,
            "& .MuiDataGrid-cell:hover": {
              color: "primary.light",
            },
          }}
          pageSize={5}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </Box>
    </Box>
  );
};

export default PurchaseRequestList;
