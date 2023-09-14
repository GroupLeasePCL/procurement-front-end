import React from "react";
import moment from "moment/moment";
import {
  useTheme,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Link,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useAppContext } from "../../context/appContext";

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: "",
//   address1: "",
//   address2: "",
// };

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { profile } = useAppContext();

  return (
    <Box m="20px">
      <Header title="Profile" subtitle="User Profile" />
      {/* <div>{JSON.stringify(profile)}</div> */}

      <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
        <Card
          sx={{ borderRadius: 4, p: 3, backgroundColor: colors.primary[400] }}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: colors.image[600],
                  border: `3px solid ${colors.image[100]}`,
                  width: 60,
                  height: 60,
                  mr: 2,
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {profile.avatar}
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                >
                  {profile.id}
                </Link>
                <Link
                  href="#"
                  underline="always"
                  variant="body1"
                  color={green[500]}
                  sx={{ fontWeight: 500 }}
                >
                  {profile.firstName} {profile.lastName}
                </Link>
              </Box>
            </Box>
          </Box>
          <CardContent sx={{ p: 0, mb: 0 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              company : {profile.company}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              {moment(new Date()).locale("th").format("DD MMMM, YYYY hh:mm:ss")}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              position : {profile.position}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              department : {profile.department}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              email : {profile.email}
            </Typography>

            <Typography variant="body1" sx={{ mb: 1.5 }}>
              manager : {profile.manager}
            </Typography>

            <Box sx={{}}>
              <Button
                sx={{ mr: 1, mb: 1 }}
                variant="contained"
                size="small"
                disableElevation
                color="info"
              >
                Environment
              </Button>
              <Button
                sx={{ mr: 1, mb: 1 }}
                variant="contained"
                size="small"
                disableElevation
                color="info"
              >
                Delphi
              </Button>
              <Button
                sx={{ mr: 1, mb: 1 }}
                variant="contained"
                size="small"
                disableElevation
                color="info"
              >
                SQL Server
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Profile;
