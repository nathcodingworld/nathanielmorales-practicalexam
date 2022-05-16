import { Card, CardContent, CardMedia, Stack, SxProps, TextField, Theme, Box, CardActions, Button, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

import { gql, useMutation } from "@apollo/client";

import StyleSelect from "../UI/StyleSelect";
import StyleTextInput from "../UI/StyleTextInput";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GrassIcon from "@mui/icons-material/Grass";

// ---------------------------------STYLE SECTIONS
const cardSx: SxProps<Theme> = {
  position: "absolute",
  top: "100px",
  left: "50%",
  width: "100%",
  maxWidth: "700px",
  transform: "translateX(-50%)",
};
const iconSx: SxProps<Theme> = { color: "action.active", mr: 1, my: 0.5 };
const boxSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-end",
};

// ---------------------------------QUERY SECTIONS
const editHouseListing = gql`
  mutation EditHouse(
    $id: String!
    $housename: String
    $title: String
    $type: String
    $location: String
    $description: String
    $bed: Int
    $bath: Int
    $park: Int
    $garden: Int
    $price: Int
    $date: Int
  ) {
    updatelisting(
      id: $id
      housename: $housename
      title: $title
      type: $type
      location: $location
      description: $description
      bed: $bed
      bath: $bath
      park: $park
      garden: $garden
      price: $price
      date: $date
    ) {
      message
    }
  }
`;

// ---------------------------------TYPE SECTIONS
interface EditCardType {
  onClose: () => void;
  id: string;
  url: string;
  title: string;
  location: string;
  type: string;
  beds: number;
  baths: number;
  parks: number;
  gardens: number;
  dates: number;
  housename: string;
  descriptions: string;
  price: number;
}

// ---------------------------------REACT FUNTIONAL COMPONENT
const EditCard: React.FC<EditCardType> = ({ onClose, url, id, title, location, type, beds, baths, parks, gardens, dates, housename, descriptions, price }) => {
  const [hos, setHos] = useState("House one");
  const [Loc, setLoc] = useState("Location one");
  const [Type, setType] = useState("Type one");
  const [bed, setBed] = useState<any>(0);
  const [bath, setBath] = useState<any>(0);
  const [park, setPark] = useState<any>(0);
  const [garden, setGarden] = useState<any>(0);
  const [date, setDate] = useState<any>(0);
  const [titleData, setTitleData] = useState<any>({ accepted: false, Msg: "Must not empty", value: "" });
  const [priceData, setPriceData] = useState<any>({ accepted: false, Msg: "Must greater than 5 digits", value: 0 });
  const [description, setDescription] = useState<any>({ accepted: false, Msg: "must not empty", value: "" });
  const [editHouse, { loading }] = useMutation(editHouseListing, { refetchQueries: ["GETDATA"] });
  const { enqueueSnackbar } = useSnackbar();

  // ---------------------------------UPDATING LIST IN DATABASE
  // ---------------------------------its update listing handler
  async function addListingHandler() {
    if (!titleData.accepted) enqueueSnackbar("House: " + titleData.Msg, { variant: "error" });
    if (!priceData.accepted) enqueueSnackbar("amount: " + priceData.Msg, { variant: "error" });
    if (!description.accepted) enqueueSnackbar("description: " + description.Msg, { variant: "error" });
    if (titleData.accepted && priceData.accepted && description.accepted) {
      try {
        const variables = {
          id: id,
          housename: titleData.value,
          title: hos,
          type: Type,
          location: Loc,
          description: description.value,
          bed: +bed,
          bath: +bath,
          park: +park,
          garden: +garden,
          price: +priceData.value,
          date: +date,
        };
        const success = await editHouse({ variables });
        if (success) {
          enqueueSnackbar(success.data.updatelisting.message, { variant: "success" });
          onClose();
        }
      } catch (error) {
        enqueueSnackbar("an error occured", { variant: "error" });
      }
    }
  }

  // ---------------------------------setting old data to state to edit
  useEffect(() => {
    setHos(title);
    setLoc(location);
    setType(type);
    setBed(beds);
    setBath(baths);
    setGarden(gardens);
    setPark(parks);
    setDate(dates);
    setTitleData({ accepted: true, Msg: "", value: housename });
    setDescription({ accepted: true, Msg: "", value: descriptions });
    setPriceData({ accepted: true, Msg: "", value: price });
  }, []);

  // ---------------------------------JSX SECTIONS
  return (
    <Card sx={cardSx}>
      <CardMedia component="img" src={url} height="400" />
      <CardContent>
        <Stack spacing={2}>
          <StyleTextInput setData={setTitleData} variant="standard" label="House name" type="text" accepted={titleData.accepted} value={titleData.value} />
          <StyleTextInput setData={setPriceData} variant="standard" label="Amount" type="number" accepted={priceData.accepted} value={priceData.value} />
          <StyleTextInput setData={setDescription} label="Description" type="text" accepted={description.accepted} multiline={true} value={description.value} />
          <Stack direction="row" justifyContent="space-between">
            <StyleSelect type="House" value={hos} setVal={setHos} />
            <StyleSelect type="Location" value={Loc} setVal={setLoc} />
            <StyleSelect type="Type" value={Type} setVal={setType} />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={boxSx}>
              <HotelIcon sx={iconSx} />
              <TextField label="bed" variant="standard" type="number" value={bed} onChange={(e) => setBed(e.target.value)} />
            </Box>
            <Box sx={boxSx}>
              <BathtubIcon sx={iconSx} />
              <TextField label="bath" variant="standard" type="number" value={bath} onChange={(e) => setBath(e.target.value)} />
            </Box>
            <Box sx={boxSx}>
              <GarageIcon sx={iconSx} />
              <TextField label="parking" variant="standard" type="number" value={park} onChange={(e) => setPark(e.target.value)} />
            </Box>
            <Box sx={boxSx}>
              <GrassIcon sx={iconSx} />
              <TextField label="garden" variant="standard" type="number" value={garden} onChange={(e) => setGarden(e.target.value)} />
            </Box>
            <Box sx={boxSx}>
              <CalendarTodayIcon sx={iconSx} />
              <TextField label="Year" variant="standard" type="number" value={date} onChange={(e) => setDate(e.target.value)} />
            </Box>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions children={loading ? <CircularProgress sx={{ margin: "auto" }} /> : <Button children="update House" fullWidth variant="contained" onClick={addListingHandler} />} />
    </Card>
  );
};

export default EditCard;
