import { Avatar, Card, CardContent, CardHeader, CardMedia, CircularProgress, Divider, Grid, Stack, SxProps, TextField, Theme, Typography } from "@mui/material";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GrassIcon from "@mui/icons-material/Grass";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StyleTitle from "../Surface/StyleTitle";
import StyleDivider from "../Surface/StyleDivider";
import ViewCard from "../Cards/ViewCard";
import StyleButton from "../UI/StyleButton";

// ---------------------------------ANIMATION SECTIONS
const contentMotion: Variants = {
  initial: {
    opacity: 0,
    x: "50px",
  },
  initial1: {
    opacity: 0,
    x: "-50px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const boxSx: SxProps<Theme> = {
  maxWidth: "1440px",
  margin: "auto",
  p: "16px",
};
const imgListSx: SxProps<Theme> = {
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    borderRadius: "10px",
    height: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    bgcolor: "gray",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    bgcolor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    bgcolor: "#ccc",
    borderRadius: "10px",
  },
};
const cardSx: SxProps<Theme> = {
  boxShadow: " 0px 32px 34px rgba(0, 0, 0, 0.133714)",
  borderRadius: "25px",
};
const cardhSx: SxProps<Theme> = {
  pt: "30px",
  pl: "30px",
  backgroundColor: "#F5F5F5",
};

// ---------------------------------CONSTANT SECTIONS
const ulrs = [
  `${process.env.PUBLIC_URL}/img1.png`,
  `${process.env.PUBLIC_URL}/img2.png`,
  `${process.env.PUBLIC_URL}/img3.png`,
  `${process.env.PUBLIC_URL}/img4.png`,
  `${process.env.PUBLIC_URL}/img5.png`,
  `${process.env.PUBLIC_URL}/img6.png`,
  `${process.env.PUBLIC_URL}/img7.png`,
];
const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// ---------------------------------QUERY SECTIONS
const fetch = gql`
  query GETDATA($type: String, $title: String, $location: String, $pricetag: String) {
    getlisting(type: $type, title: $title, location: $location, pricetag: $pricetag) {
      id
      housename
      title
      type
      location
      description
      url
      ref
      bed
      bath
      park
      garden
      price
      date
      pricetag
    }
  }
`;

const PageDetailContent: React.FC = () => {
  const location: any = useLocation();
  const { hos, Loc, Type, pricetag, bed, bath, garden, park, date, description } = location.state;
  const [urls, setUrl] = useState(location.state.url);
  const { loading, error, data } = useQuery(fetch, { variables: { title: hos, location: Loc, type: Type, pricetag: pricetag } });

  const setview = (url: string) => () => {
    setUrl(url);
  };

  return (
    <Grid container sx={boxSx}>
      <Grid item md={4} sm={12} xs={12} pr={2} pb={2} component={motion.div} variants={contentMotion} initial="initial1" animate="final">
        <Card>
          <CardHeader
            avatar={<Avatar alt="av" src={`${process.env.PUBLIC_URL}/avatar1.png`} />}
            title="Kayle Hall"
            subheader="view profile"
            sx={cardhSx}
            titleTypographyProps={{ variant: "h6" }}
            subheaderTypographyProps={{ color: "primary" }}
          />

          <CardContent>
            <Stack direction="column" spacing={1}>
              <TextField fullWidth label="Name" variant="outlined" sx={{ borderRadius: "10px" }} />
              <TextField fullWidth label="Phone" variant="outlined" sx={{ borderRadius: "10px" }} />
              <TextField fullWidth label="Email" variant="outlined" sx={{ borderRadius: "10px" }} />
              <TextField fullWidth label="hello I'm Interested in ..." variant="outlined" multiline rows={4} sx={{ borderRadius: "10px" }} />
            </Stack>
          </CardContent>
          <StyleButton fw={true} />
        </Card>
      </Grid>

      <Grid item md={8} sm={12} xs={12} component={motion.div} variants={contentMotion} initial="initial" animate="final">
        <Stack direction="column" spacing={2}>
          <Card sx={{ borderRadius: "0", borderTopRightRadius: "57px" }}>
            <CardMedia component="img" image={urls} />
          </Card>

          <Stack direction="row" spacing={2} sx={imgListSx}>
            {ulrs.map((url) => (
              <CardMedia onClick={setview(url)} component="img" image={url} sx={{ borderTopRightRadius: "16px", pb: "4px" }} />
            ))}
          </Stack>

          <Card sx={cardSx}>
            <CardContent sx={{ position: "relative" }}>
              <Typography children="Details" variant="subtitle1" />
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

              <Divider orientation="vertical" flexItem />

              <Stack direction="row" spacing={1} p="16px 0" margin="auto">
                <GrassIcon />
                <Typography children={garden} />
              </Stack>

              <Divider orientation="vertical" flexItem />

              <Stack direction="row" spacing={1} p="16px 0" margin="auto">
                <CalendarTodayIcon />
                <Typography children={date} />
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography children="Description" variant="subtitle1" />
            </CardContent>

            <Divider />

            <CardContent>
              {description.split("\n").map((i: any, key: number) => {
                return (
                  <Typography variant="caption" paragraph key={key}>
                    {i}
                  </Typography>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography children="Features" variant="subtitle1" />
            </CardContent>

            <Divider />

            <CardContent>
              <Grid container spacing={2}>
                {sample.map((i) => (
                  <Grid item sm={4} key={i}>
                    <Stack direction="row" spacing={1}>
                      <CheckCircleIcon color="primary" />
                      <Typography children="Air conditioning" variant="caption" />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Stack direction="column" p="150px 0" spacing={2}>
            <StyleDivider />

            <StyleTitle content="Similar Listing" />

            <Grid container spacing={2} paddingRight={2}>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <p>error</p>
              ) : (
                data.getlisting.map((data: any, i: any) => (
                  <ViewCard
                    id={data.id}
                    housename={data.housename}
                    title={data.title}
                    type={data.type}
                    location={data.location}
                    description={data.description}
                    url={data.url}
                    imgref={data.ref}
                    bed={data.bed}
                    bath={data.bath}
                    park={data.park}
                    garden={data.garden}
                    price={data.price}
                    date={data.date}
                    pricetag={data.pricetag}
                    key={i}
                  />
                ))
              )}
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PageDetailContent;
