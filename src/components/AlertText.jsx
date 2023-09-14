import { Alert } from "@mui/material";
import { customColors } from "../theme";
import { useAppContext } from "../context/appContext";

const AlertText = () => {
  const { alertType, alertText } = useAppContext();

  function renderSwitch(alertType) {
    switch (alertType) {
      case "warning":
        return customColors.warning;
      case "error":
        return customColors.error;
      case "success":
        return customColors.success;
      default:
        return undefined;
    }
  }
  const colors = renderSwitch(alertType);

  return (
    <Alert
      severity={`${alertType}`}
      sx={{
        backgroundColor: colors.light,
        color: "#000",
        borderColor: "transparent",
      }}
    >
      {alertText}
    </Alert>
  );
};

export default AlertText;
