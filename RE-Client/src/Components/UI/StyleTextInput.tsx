import { TextField } from "@mui/material";

// ---------------------------------TYPE SECTIONS
type TextInputType = {
  value: string | number;
  label: string;
  type: string;
  variant?: "standard";
  accepted: boolean;
  multiline?: boolean;
  setData: (args: { accepted: boolean; Msg: string; value: string | number }) => void;
};

// ---------------------------------CONST SECTIONS
const conntentStyle = {
  width: "100%",
};

const StyleTextInput: React.FC<TextInputType> = ({ value, label, type, variant, accepted, multiline = false, setData }) => {
  function onValidateTextHandler(e: any) {
    const value = e.target.value;
    let Msg = "Must not empty";
    let accepted = false;
    if (value === "") Msg = `${label}: must not Empty`;
    else if (value.length < 5) Msg = `${label}: must Greater than 5 letters`;
    else accepted = true;

    setData({
      accepted,
      Msg,
      value,
    });
  }

  if (multiline) {
    return <TextField label={label} multiline sx={{ ...conntentStyle, marginTop: "10px" }} onChange={onValidateTextHandler} value={value} />;
  }

  return <TextField label={label} variant={variant} type={type} fullWidth color={accepted ? "success" : "error"} onChange={onValidateTextHandler} value={value} />;
};

export default StyleTextInput;
