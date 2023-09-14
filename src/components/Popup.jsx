import React from "react";
import {
  Typography,
  // Box,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { tokens } from "../theme";
import Controls from "./controls/Controls";
import CloseIcon from "@mui/icons-material/Close";
// import makeStyles from "@mui/styles/makeStyles";

// const useStyles = makeStyles((theme) => ({
//   dialogWrapper: {
//     padding: theme.spacing(1),
//     position: "absolute",
//     top: theme.spacing(-15),
//   },
// }));

function Popup(props) {
  const { title, children, openPopup, setOpenPopup, maxWidth } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      fullWidth
      maxWidth={maxWidth || "md"}
      // classes={{ paper: classes.dialogWrapper }}
      PaperProps={{
        style: {
          backgroundColor: colors.popupBackgroundColor[300],
          paddingInline: 0,
          padding: theme.spacing(1),
          position: "absolute",
          top: theme.spacing(15),
        },
      }}
    >
      <DialogTitle sx={{ my: -1.5, mx: 0 }}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            colors={colors.closeBtn}
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
