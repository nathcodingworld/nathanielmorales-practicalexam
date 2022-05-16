import { SpeedDial, SpeedDialAction, SxProps, Theme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";

// ---------------------------------STYLE SECTIONS
const style: SxProps<Theme> = {
  "& .MuiSpeedDial-fab": {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "none",
    animation: "pulsea 1s infinite",
    "&:hover": {
      backgroundColor: grey[200],
    },
  },
  position: "absolute",
  right: "0",
  top: "0",
};

// ---------------------------------TYPE SECTIONS
type MoreType = {
  onDeleting: (state: boolean) => void;
  onEditing: (state: boolean) => void;
};

const More: React.FC<MoreType> = ({ onDeleting, onEditing }) => {
  function onDeleteHandler(e: any) {
    e.stopPropagation();
    onDeleting(true);
  }
  function onEditingHandler(e: any) {
    onEditing(true);
    e.stopPropagation();
  }

  return (
    <SpeedDial ariaLabel="More" icon={<MoreVertIcon />} direction="left" sx={style}>
      <SpeedDialAction key="Edit" icon={<EditIcon />} tooltipTitle="Edit Listing" onClick={onEditingHandler} />
      <SpeedDialAction key="Delete" icon={<DeleteIcon />} tooltipTitle="Delete Listing" onClick={onDeleteHandler} />
    </SpeedDial>
  );
};

export default More;
