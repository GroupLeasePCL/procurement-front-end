import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Typography } from "@mui/material";

import {
  ReceiptRounded,
  PersonRounded,
  GridViewRounded,
  BubbleChartRounded,
  SummarizeRounded,
  RecentActorsRounded,
  ViewListRounded,
} from "@mui/icons-material";

export const listMenu = [
  {
    id: 1,
    title: "Dashboard",
    menu: [
      {
        name: "Dashboard",
        icon: <GridViewRounded />,
        subMenu: [
          { name: "Dashboard", to: "/", icon: <SummarizeRounded /> },
          {
            name: "Buble Chart",
            to: "/bubbles",
            icon: <BubbleChartRounded />,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Purchase",
    menu: [
      {
        name: "PR",
        icon: <ReceiptRounded />,
        subMenu: [
          {
            name: "Purchase-Request",
            to: "/purchase-request",
            icon: <RecentActorsRounded />,
          },
          {
            name: "PR-list",
            to: "/purchase-request-list",
            icon: <ViewListRounded />,
          },
        ],
      },
      {
        name: "PO",
        icon: <ReceiptRounded />,
        subMenu: [
          {
            name: "Purchase-Order",
            to: "/purchase-order",
            icon: <RecentActorsRounded />,
          },
          {
            name: "PO-list",
            to: "/purchase-order-list",
            icon: <ViewListRounded />,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "User",
    menu: [
      {
        name: "Profile",
        icon: <PersonRounded />,
        subMenu: [
          {
            name: "Profile",
            to: "/profile",
            icon: <PersonRounded />,
          },
        ],
      },
    ],
  },
];

export const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
      mart
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export const SubItem = ({
  title,
  icon,
  selected,
  setSelected,
  subColection,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <SubMenu
      active={selected === title}
      style={{ color: colors.grey[100], backgroundColor: colors.primary[300] }}
      onClick={() => setSelected(title)}
      icon={icon}
      label={title}
      rootStyles={{
        color: colors.grey[100],
        backgroundColor: colors.primary[300],
      }}
    >
      {subColection.map(({ name, to, icon }) => (
        <MenuItem
          key={name}
          routerLink={<Link to={to} />}
          icon={icon || undefined}
          styles={{
            color: colors.grey[100],
            backgroundColor: colors.primary[300],
          }}
        >
          {name}
        </MenuItem>
      ))}
    </SubMenu>
  );
};
