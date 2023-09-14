import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { Stack, CircularProgress } from "@mui/material";
import { useAppContext } from "../context/appContext";
const PrivateRoutes = () => {
  const { isLoading, isAuthenticated } = useAppContext();

  if (!isAuthenticated) {
    return (
      <div>
        <Stack sx={{ color: "grey.500", m: 5 }} spacing={5} direction="row">
          <CircularProgress size={"5rem"} color="secondary" />
        </Stack>
      </div>
    );
  }

  if (!isLoading) {
    return <Outlet />;
  } else {
    return <div>redirect login</div>;
  }
};
export default PrivateRoutes;
