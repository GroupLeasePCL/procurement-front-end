export const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const mockDataPurchaseOrder = {
  purchaseRequest: "PR-0001",
  purchaseRequestDate: "28/08/2023",
  purchaseOrder: "PO-0001",
  purchaseOrderDate: "30/08/2023",
  requestName: "Soraritt Chawapee",
  prType: "อุปกรณ์  IT",
  department: "IT 5th floor",
  section: "ส่วนงานที่ 2",
  position: "Programmer",
  telephone: "0918622926",
  dealDate: "30/08/2023",
  reference: "",
  requestor: "IT Floor 5",
  requestorDate: "30/08/2023",
  approve: "IT Purchase",
  approveDate: "",
  orderItems: [
    {
      id: 1,
      itemName: "battery Notbook Dell",
      quantity: 1,
      unit: "ชิ้น",
      price: 3500,
      totalPrice: 3500,
      filePicture: "C:/unknow",
      remark: "desc 1",
    },
    {
      id: 2,
      itemName: "SSD",
      quantity: 2,
      unit: "ชิ้น",
      price: 2000,
      totalPrice: 4500,
      filePicture: "C:/unknow",
      remark: "desc 22",
    },
    {
      id: 3,
      itemName: "Mouse",
      quantity: 3,
      unit: "ชิ้น",
      price: 500,
      totalPrice: 3500,
      filePicture: "C:/unknow",
      remark: "Mouse Dell blutooth",
    },
    {
      id: 4,
      itemName: "monitor",
      quantity: 1,
      unit: "ชิ้น",
      price: 6000,
      totalPrice: 6000,
      filePicture: "C:/unknow",
      remark: "monitor 24 inc",
    },
    {
      id: 5,
      itemName: "เก้าอี้",
      quantity: 1,
      unit: "ชิ้น",
      price: 1500,
      totalPrice: 1500,
      filePicture: "C:/unknow",
      remark: "เก้าอี้ สำนักงาน",
    },
    {
      id: 6,
      itemName: "Usb",
      quantity: 10,
      unit: "ชิ้น",
      price: 200,
      totalPrice: 2000,
      filePicture: "C:/unknow",
      remark: "usb 64gb",
    },
  ],
  orderFileItems: [
    {
      id: 1,
      fileName: "battery.jpg",
      fileAddress: "C:/Asset/battery.jpg",
      description: "",
      createBy: "Soraritt Chawapee",
      createDate: "30/08/2023",
    },
    {
      id: 2,
      fileName: "usb_dell.jpg",
      fileAddress: "C:/Asset/usb_dell.jpg",
      description: "",
      createBy: "Soraritt Chawapee",
      createDate: "30/08/2023",
    },
  ],
};

export const columnsOrder = [
  { field: "id", headerName: "ID" },
  {
    field: "itemName",
    headerName: "itemName",
    minWidth: 100,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "quantity",
    headerName: "quantity",
    type: "number",
    headerAlign: "left",
    align: "left",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "unit",
    headerName: "unit",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "price",
    headerName: "price",
    type: "number",
    headerAlign: "left",
    align: "left",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "totalPrice",
    headerName: "totalPrice",
    type: "number",
    headerAlign: "left",
    align: "left",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "filePicture",
    headerName: "filePicture",
    minWidth: 100,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "remark",
    headerName: "remark",
    minWidth: 100,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  // {
  //   field: "accessLevel",
  //   headerName: "Access Level",
  //   minWidth: 100,
  //   flex: 1,
  //   renderCell: ({ row: { access } }) => {
  //     return (
  //       <Box
  //         width="60%"
  //         // m="0 auto"
  //         // p="5px"
  //         // display="flex"
  //         justifyContent="start"
  //         borderRadius="2px"
  //         sx={{ "& button": { mx: 0.25 } }}
  //       >
  //         <Controls.Button
  //           text="Edit"
  //           size="small"
  //           color="secondary"
  //           borderRadius={50}
  //         />
  //         <Controls.Button
  //           text="Delete"
  //           size="small"
  //           color="secondary"
  //           borderRadius={50}
  //         />
  //       </Box>
  //     );
  //   },
  // },
];

export const columnsFile = [
  { field: "id", headerName: "ID" },
  {
    field: "fileName",
    headerName: "fileName",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "fileAddress",
    headerName: "fileAddress",
    flex: 1,
  },
  {
    field: "description",
    headerName: "description",
    flex: 1,
  },
  {
    field: "createBy",
    headerName: "createBy",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "createDate",
    headerName: "createDate",
    flex: 1,
  },

  // {
  //   field: "accessLevel",
  //   headerName: "Access Level",
  //   flex: 1,
  //   renderCell: ({ row: { access } }) => {
  //     return (
  //       <Box
  //         width="60%"
  //         justifyContent="start"
  //         borderRadius="2px"
  //         sx={{ "& button": { mx: 0.25 } }}
  //       >
  //         <Controls.Button
  //           text="Edit"
  //           size="small"
  //           color="secondary"
  //           borderRadius={50}
  //         />
  //         <Controls.Button
  //           text="Delete"
  //           size="small"
  //           color="secondary"
  //           borderRadius={50}
  //         />
  //       </Box>
  //     );
  //   },
  // },
];
