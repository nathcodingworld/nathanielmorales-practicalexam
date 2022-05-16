import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, Modal, Paper, Stack, SxProps, Theme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { AdminContext } from "../../Providers/StateProvider";
import { gql, useQuery } from "@apollo/client";
import StyleTitle from "../Surface/StyleTitle";
import StyleSelect from "../UI/StyleSelect";
import ViewCard from "../Cards/ViewCard";
import StyleDivider from "../Surface/StyleDivider";
import AddCard from "../Cards/AddCard";

// ---------------------------------ANIMATION SECTIONS
const paperMotion: Variants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const paperSx: SxProps<Theme> = {
  width: "100%",
  minHeight: "120px",
  borderRadius: "25px",
  display: "flex",
  flexDirection: { sm: "row", xs: "column" },
  justifyContent: "space-around",
  alignItems: "center",
  padding: "16px 8px",
};
const cardSx: SxProps<Theme> = {
  boxShadow: " 0px 32px 34px rgba(0, 0, 0, 0.133714)",
  borderRadius: "25px",
};

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

const PageContent: React.FC = () => {
  const [hos, setHos] = useState("House one");
  const [Loc, setLoc] = useState("Location one");
  const [Type, setType] = useState("Type one");
  const [price, setPrice] = useState("Less than $500K");
  const [open, setOpen] = useState(false);
  const auth = useContext(AdminContext).admin.auth;
  const { loading, error, data, refetch } = useQuery(fetch, { variables: { title: hos, location: Loc, type: Type, pricetag: price } });

  // ---------------------------------FECTH DATA WHEN FILTERED DATA CHANGE
  useEffect(() => {
    refetch();
  }, [hos, Loc, Type, price]);

  return (
    <Box maxWidth={1440} margin="auto" bgcolor="#f5f5f5">
      <Stack direction="column" spacing={4} p="200px 60px 200px 60px">
        <Box>
          <StyleDivider />
          <StyleTitle content="Find your next place to live" />
        </Box>

        <Paper sx={paperSx} component={motion.div} variants={paperMotion} initial="initial" whileInView="final">
          <StyleSelect type="House" value={hos} setVal={setHos} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <StyleSelect type="Location" value={Loc} setVal={setLoc} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <StyleSelect type="Type" value={Type} setVal={setType} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <StyleSelect type="Price" value={price} setVal={setPrice} />
        </Paper>

        <Grid container spacing={2}>
          <AnimatePresence>
            {auth && (
              <Grid item md={3} sm={4} xs={12} component={motion.div} variants={paperMotion} initial="initial" whileInView="final" exit="leave">
                <Button onClick={() => setOpen(true)}>
                  <Card sx={cardSx}>
                    <CardMedia component="img" image={`${process.env.PUBLIC_URL}/addImage.jpg`} sx={{ "&:hover": { transform: "scale(1.1)" }, transition: "all 500ms" }} />
                    <Divider />
                    <CardContent children="Add House" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, animation: "pulsea 3s infinite" }} />
                  </Card>
                </Button>
                <Modal open={open} onClose={() => setOpen(false)} children={<AddCard onClose={() => setOpen(false)} />} sx={{ overflowY: "scroll", "&::-webkit-scrollbar": { display: "none" } }} />
              </Grid>
            )}
          </AnimatePresence>

          <AnimatePresence exitBeforeEnter>
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
          </AnimatePresence>
        </Grid>
      </Stack>
    </Box>
  );
};

export default PageContent;
