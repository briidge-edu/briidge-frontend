import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import image from "../Shared/tutor.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    marginTop: "15px",
    marginBottom: "15px"
  },

  viewButtonLabel: { 
      textTransform: "none",
      fontFamily: "Montserrat-Light",
      color: "#ffdf00"
    },
    button: {
        marginTop: "20px"
    }
}));

export default function RecommenedTutor() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={6} lg={3} xl={2}>
      <img src={image} className={classes.image} alt="" />
      <Typography>Alberto Connelli</Typography>
      <div>&#11088; &#11088; &#11088; &#11088; &#11088;</div>
      <Typography>Bukit Batok, Yew Tee</Typography>
      <Typography>SGD 35/hr</Typography>
      <Button
        variant="contained"
        color="primary"
        classes={{ label: classes.viewButtonLabel }}
        className={classes.button}
      >
        Find out more about me!
      </Button>
    </Grid>
  );
}
