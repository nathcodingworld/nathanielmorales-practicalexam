import { Button, Input, Stack } from "@mui/material";

// ---------------------------------TYPE SECTIONS
type StyleFileInputType = {
  accepted: boolean;
  imgName: string;
  name: string;
  fullWidth?: boolean;
  setData: (args: { accepted: boolean; Msg: string; file: string; url: string }) => void;
};

const StyleFileInput: React.FC<StyleFileInputType> = ({ accepted, imgName, name, fullWidth = false, setData }) => {
  function validateStoreViewImageHandler(e: any) {
    const [type, ext] = e.target.files[0].type.split("/");
    const acceptable = ["png", "jpeg", "jpg"];
    const accepted = type === "image" && acceptable.includes(ext);
    let file = "";
    let Msg = "Add File";
    if (accepted) {
      file = e.target.files[0];
      Msg = e.target.files[0].name;
    } else {
      Msg = "input image file only";
      file = "";
    }
    setData({
      accepted,
      file,
      Msg,
      url: URL.createObjectURL(e.target.files[0]),
    });
  }

  return (
    <label htmlFor="house-file">
      <Input type="file" sx={{ display: "none" }} id="house-file" onChange={validateStoreViewImageHandler} />
      <Stack direction="row" spacing={2} sx={{ width: "100%", pt: "10px", height: "45px", margin: "5px 0" }}>
        <Button variant="outlined" component="span" color={accepted ? "primary" : "error"} fullWidth={fullWidth}>
          {name}
        </Button>
        {!fullWidth && <Input disabled value={imgName} />}
      </Stack>
    </label>
  );
};

export default StyleFileInput;
