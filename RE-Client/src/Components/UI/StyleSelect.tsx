import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

// ---------------------------------TYPE SECTIONS
interface StyleSelectType {
  type: string;
  value: string;
  setVal: (state: string) => void;
}

const StyleSelect: React.FC<StyleSelectType> = ({ type, value, setVal }) => {
  const handleChange = (event: any) => {
    setVal(event.target.value as string);
  };

  const valone = type === "Price" ? "Less than $500K" : `${type} one`;
  const valtwo = type === "Price" ? "$500K to $1000K" : `${type} two`;
  const valthree = type === "Price" ? "Greater than $1000K" : `${type} three`;

  return (
    <FormControl fullWidth variant="standard" sx={{ p: "0 12px", width: { sm: "max-content", xs: "100%" } }}>
      <InputLabel id={type + "label"} sx={{ p: "0 12px" }}>
        {type}
      </InputLabel>
      <Select labelId={type + "label"} id={type + "select"} value={value} label={type} onChange={handleChange}>
        <MenuItem value={valone}>{valone}</MenuItem>
        <MenuItem value={valtwo}>{valtwo}</MenuItem>
        <MenuItem value={valthree}>{valthree}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StyleSelect;
