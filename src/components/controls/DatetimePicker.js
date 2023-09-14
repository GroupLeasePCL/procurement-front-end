import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { common } from "@mui/material/colors";
export default function DatetimePicker(props) {
  const { name, label, value, onChange } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        format="DD/MM/YYYY"
        views={["day"]}
        showDaysOutsideCurrentMonth
        slots={{ openPickerIcon: CalendarMonthIcon }}
        slotProps={{
          popper: {
            sx: {
              "& .MuiPaper-root": {
                border: "1px solid black",
                backgroundColor: colors.popupBackgroundColor[300],
              },

              "& .Mui-selected": {
                backgroundColor: colors.popupBackgroundColor[100],
              },

              "& .MuiPickersLayout-contentWrapper": {
                marginBottom: "-45px",
              },
              "&  .MuiPickersDay-dayWithMargin": {
                ":hover": {
                  color: `${colors.textMenu[500]}`,
                  backgroundColor: `${colors.textMenu[900]}`,
                },
              },

              "& .MuiButton-root": {
                backgroundColor: colors.greenAccent[500],
                color: common.black,
              },
            },
          },
          tabs: {
            hidden: false,
          },
          actionBar: {
            actions: ["today"],
          },

          textField: {
            color: "third",
            InputProps: {
              sx: {
                fontSize: "1.3vh",
                height: "3.0vh",
              },
            },
            InputLabelProps: {
              sx: {
                fontSize: "1.3vh",
                top: "-0.25vh",
                "&.MuiInputLabel-shrink": { top: 1 },
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
