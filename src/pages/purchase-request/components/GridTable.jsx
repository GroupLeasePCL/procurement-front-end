import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
function GridTable(props) {
  const { columns, data, colors, height, dataRows, setDataRows } = props;

  return (
    <>
      <Box
        m="5px 0 0 0"
        height={height}
        sx={{
          marginBottom: 1,
          "& .MuiDataGrid-root": {
            border: "none",
            // borderColor: "black",
          },
          "& .MuiDataGrid-row": {
            // borderRadius: "2px",
            marginTop: "2px",
            // marginBottom: "6px",
          },
          "& .MuiDataGrid-cell": {
            // borderBottom: "none",
            py: "-1px",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            // borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={24}
          rowHeight={22}
          rows={data}
          columns={columns}
          hideFooter
          checkboxSelection
          rowSelectionModel={dataRows}
          onRowSelectionModelChange={setDataRows}
          sx={{
            width: "80vw",
            fontFamily: "DM Sans",
            fontSize: 12,

            "& .MuiDataGrid-cell:hover": {
              color: "primary.light",
            },
          }}
          // autoHeight
          // pageSize={5}
          // initialState={{
          //   pagination: {
          //     paginationModel: { pageSize: 5 },
          //   },
          // }}
          // pageSizeOptions={[5, 10, 25]}
        />
      </Box>
    </>
  );
}

export default GridTable;
