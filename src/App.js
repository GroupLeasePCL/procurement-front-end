import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import { useAppContext } from "./context/appContext";
import { tokens } from "./theme";
import PrivateRoutes from "./service/PrivateRoutes";
import Topbar from "./pages/global/topbar/Topbar";
import Dashboard from "./pages/dashboard";
import PurchaseRequest from "./pages/purchase-request";
import Profile from "./pages/profile";
import Error from "./pages/error";

function App() {
  const [theme, colorMode] = useMode();
  const { isAuthenticated } = useAppContext();
  const colors = tokens(theme.palette.mode);

  // Show the loading spinner while the user is not authenticated
  if (!isAuthenticated) {
    return (
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          margin: 0,
          height: "100%",
          width: "100%",
          backgroundColor: colors.primary[400],
        }}
      >
        <Box textAlign="left">
          <Typography
            variant="h2"
            color={colors.grey[400]}
            fontWeight="bold"
            sx={{ mx: "25px", my: "20px" }}
          >
            Loading Please Wait .........!
          </Typography>
        </Box>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MyProSidebarProvider>
            <div style={{ height: "100%", width: "100%" }}>
              <main>
                <Topbar />
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                      path="/purchase-request"
                      element={<PurchaseRequest />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                  </Route>
                </Routes>
              </main>
            </div>
          </MyProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
