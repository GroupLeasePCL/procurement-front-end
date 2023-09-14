import { useState } from "react";
import { Menu, Sidebar, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useSidebarContext } from "./sidebarContext";
import { useAppContext } from "../../../context/appContext";
import { tokens } from "../../../theme";
import {
  useTheme,
  Box,
  Typography,
  IconButton,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import {
  MenuRounded,
  CloseRounded,
  CircleRounded,
  LogoutRounded,
} from "@mui/icons-material";
import { listMenu, Item, SubItem } from "./";
// import userImage from "../../../images/user.jpg";

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, sidebarImage } = useSidebarContext();
  const { profile, logoutUser } = useAppContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
          ":hover": {
            color: `${colors.textMenu[500]} !important`,
            backgroundColor: `${colors.textMenu[900]}  !important`,
          },
        },
        "& .menu-item:not(.sub-menu):hover": {
          // color: `${colors.blueAccent[500]} !important`,
          // backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },

        "& .sub-menu-content": {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .sub-menu-content .menu-item": {
          padding: "0 0 0 8px !important",
          backgroundColor: "transparent !important",
        },
        "& .sub-menu-content .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .sub-menu-content .menu-item:hover": {
          color: `${colors.textMenu[500]} !important`,
          backgroundColor: `${colors.textMenu[900]}  !important`,
          paddingLeft: "6px",
          transition: "0.3s ease-in-out all",
        },
        "& .sub-menu-content .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuRounded onClick={() => collapseSidebar()} />
              ) : undefined
            }
            style={{
              margin: "15px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}></Typography>
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <CloseRounded />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="20px">
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  borderBlock: `1px solid ${colors.textMenu[1000]}`,
                  p: "15px",
                }}
              >
                <Box
                  sx={{ width: "60px", padding: "2px", marginRight: "15px" }}
                >
                  <Avatar
                    alt="profile-user"
                    // src={userImage}
                    sx={{
                      bgcolor: colors.image[600],
                      border: `3px solid ${colors.image[100]}`,
                      width: 60,
                      height: 60,
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {profile.avatar}
                  </Avatar>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    // sx={{ m: "10px 0 10px 0" }}
                  >
                    {profile.id}
                  </Typography>
                  <Typography variant="h5" color={colors.text[500]}>
                    {profile.fullName}
                  </Typography>

                  <Stack direction="row" gap={1} sx={{ marginTop: "5px" }}>
                    <CircleRounded fontSize="small" color="success" />
                    <Typography variant="h6" color={colors.grey[100]}>
                      Online
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : ""}>
            {listMenu.map((item) => (
              <div key={item.id}>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "5px 0 0 20px" }}
                >
                  {item.title}
                </Typography>
                {item.menu.map((menu, index) => {
                  return (
                    <div key={index}>
                      {menu.subMenu.length === 1 ? (
                        <Item
                          title={menu.subMenu[index].name}
                          to={menu.subMenu[index].to}
                          icon={menu.subMenu[index].icon}
                          selected={selected}
                          setSelected={setSelected}
                        />
                      ) : (
                        <SubItem
                          title={menu.name}
                          icon={menu.icon}
                          selected={selected}
                          setSelected={setSelected}
                          subColection={menu.subMenu}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </Box>
          {!collapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ width: "80%" }}
                  onClick={logoutUser}
                  startIcon={<LogoutRounded />}
                  style={{ marginTop: "20px" }}
                >
                  Log Out
                </Button>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
