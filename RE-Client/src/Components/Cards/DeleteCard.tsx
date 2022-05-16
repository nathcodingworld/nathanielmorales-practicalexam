import { Card, CardContent, CardMedia, Stack, SxProps, Theme, CardActions, Button, CircularProgress, Typography, Divider } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";

import { storage } from "../../Providers/StorageProvider";
import { deleteObject, ref } from "firebase/storage";
import { gql, useMutation } from "@apollo/client";

import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";

// ---------------------------------STYLE SECTIONS
const cardSx: SxProps<Theme> = {
  position: "absolute",
  top: "100px",
  left: "50%",
  width: "100%",
  maxWidth: "700px",
  transform: "translateX(-50%)",
};
const headerSx: SxProps<Theme> = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "-0.6",
  fontWeight: 700,
};

// ---------------------------------QUERY SECTIONS
const DeleteListing = gql`
  mutation DelHouse($id: String) {
    deletelisting(id: $id) {
      message
    }
  }
`;

// ---------------------------------TYPE SECTIONS
interface AddCardType {
  onClose: () => void;
  id: string;
  url: string;
  imgref: string;
  housename: string;
  bed: number;
  bath: number;
  park: number;
}

// ---------------------------------REACT FUNTIONAL COMPONENTS
const DeleteCard: React.FC<AddCardType> = ({ onClose, id, url, imgref, housename, bed, bath, park }) => {
  const [loading, setLoading] = useState(false);
  const [delHouse] = useMutation(DeleteListing, { refetchQueries: ["GETDATA"] });
  const { enqueueSnackbar } = useSnackbar();

  // ---------------------------------DELETING LIST IN DATABASE AND STORAGE
  // ---------------------------------its deleteListingHandler
  async function addListingHandler() {
    try {
      setLoading(true);
      const success = await delHouse({ variables: { id } });
      if (success) {
        const imgRef = ref(storage, imgref);
        await deleteObject(imgRef);
        enqueueSnackbar(success.data.deletelisting.message, { variant: "success" });
        setLoading(false);
        onClose();
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("an error occured", { variant: "error" });
    }
  }

  // ---------------------------------JSX SECTIONS
  return (
    <Card sx={cardSx}>
      <CardMedia component="img" src={url} height="400" />
      <CardContent>
        <Typography children={housename} sx={headerSx} />
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
      <CardActions children={loading ? <CircularProgress sx={{ margin: "auto" }} /> : <Button children="Delete House" fullWidth variant="contained" onClick={addListingHandler} />} />
    </Card>
  );
};

export default DeleteCard;
