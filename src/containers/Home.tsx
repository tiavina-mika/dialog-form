/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { Stack, Typography } from "@mui/material";
import { LAYOUT_CONTENT_PADDING } from "../utils/constants";
import Footer from "../components/Footer";
import ActionsModal from "./ActionsModal";

const classes = {
  root: {
    minHeight: "100vh"
  },
  content: {
    padding: LAYOUT_CONTENT_PADDING
  }
};

const Home = () => {
  const menus = [
    {
      label: "Edit name",
      onClick: () => console.log("clicked")
    }
  ];
  return (
    <div className="flexColumn spaceBetween" css={classes.root}>
      <div className="stretchSelf flexColumn" css={classes.content}>
        {/* header */}
        <div className="stretchSelf flexRow center spaceBetween">
          <Typography variant="h3">Mik.</Typography>
          <ActionsModal title="What we do?" menus={menus} />
        </div>
        {/* body */}
        <Stack spacing={2} css={{ marginTop: 6 }}>
          <Typography variant="h4" components="body1">
            This projet use Material UI v5, Emotion and TypeScript.
          </Typography>
          <Typography>
            Click the icon in the top right to open the menus
          </Typography>
        </Stack>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
