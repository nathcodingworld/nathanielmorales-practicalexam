import { Card, CardContent, CardMedia, Divider, Grid, Modal, Stack, SxProps, Theme, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { motion, Variants } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../Providers/StateProvider";

import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";

import More from "../UI/More";
import EditCard from "./EditCard";
import DeleteCard from "./DeleteCard";

// ---------------------------------ANIMATION SECTIONS
const viewMotion: Variants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  leave: {
    opacity: 0,
    y: "-50px",
    transition: {
      duration: 1,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const cardSx: SxProps<Theme> = {
  boxShadow: " 0px 32px 34px rgba(0, 0, 0, 0.133714)",
  borderRadius: "25px",
  "&:hover": {
    cursor: "pointer",
  },
};
const headerSx: SxProps<Theme> = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "-0.6",
  fontWeight: 700,
};
const mediaSx: SxProps<Theme> = {
  "&:hover": {
    transform: "scale(1.2)",
    transition: "all 500ms",
  },
};

// ---------------------------------TYPE SECTIONS
interface ViewCardType {
  id: string;
  url: string;
  bed: number;
  bath: number;
  park: number;
  garden: number;
  date: number;
  type: string;
  location: string;
  title: string;
  pricetag: string;
  housename: string;
  price: number;
  description: string;
  imgref: string;
}

// ---------------------------------JSX FUNTIONAL COMPONENT
const ViewCard: React.FC<ViewCardType> = ({ id, price, housename, url, bed, bath, park, garden, date, type, location, title, pricetag, description, imgref }) => {
  const navigate = useNavigate();
  const auth = useContext(AdminContext).admin.auth;
  const [edit, setEdit] = useState(false);
  const [delt, setDelt] = useState(false);

  function onNavigateHandler() {
    navigate("/Detail", { state: { id: id, url: url, Loc: location, Type: type, pricetag: pricetag, hos: title, date, garden, price, description, housename, bed, bath, park } });
  }

  return (
    <Grid item md={3} sm={4} xs={12} component={motion.div} variants={viewMotion} initial="initial" animate="final" exit="leave">
      <Card sx={cardSx} onClick={onNavigateHandler}>
        <CardMedia component="img" image={url} sx={mediaSx} />
        <CardContent sx={{ position: "relative" }}>
          <Typography children={housename} sx={headerSx} />
          {auth && <More onDeleting={() => setDelt(true)} onEditing={() => setEdit(true)} />}
        </CardContent>
        <Divider sx={{ width: "100%" }} />
        <CardContent sx={{ display: "flex", flexDirection: "row", p: "0" }}>
          <Stack direction="row" spacing={1} p="16px 0" margin="auto">
            <HotelIcon />
            <Typography children={bed} />
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack direction="row" spacing={1} p="16px 0" margin="auto">
            <BathtubIcon />
            <Typography children={bath} />
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack direction="row" spacing={1} p="16px 0" margin="auto">
            <GarageIcon />
            <Typography children={park} />
          </Stack>
        </CardContent>
      </Card>

      <Modal open={edit} onClose={() => setEdit(false)} sx={{ overflowY: "scroll", "&::-webkit-scrollbar": { display: "none" } }}>
        <EditCard
          onClose={() => setEdit(false)}
          id={id}
          url={url}
          title={title}
          location={location}
          type={type}
          beds={bed}
          baths={bath}
          parks={park}
          gardens={garden}
          dates={date}
          housename={housename}
          descriptions={description}
          price={price}
        />
      </Modal>

      <Modal open={delt} onClose={() => setDelt(false)} sx={{ overflowY: "scroll", "&::-webkit-scrollbar": { display: "none" } }}>
        <DeleteCard onClose={() => setDelt(false)} id={id} url={url} imgref={imgref} housename={housename} bed={bed} bath={bath} park={park} />
      </Modal>
    </Grid>
  );
};

export default ViewCard;
