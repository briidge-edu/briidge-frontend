import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DialogContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffdf00",
    padding: "20px",
    marginBottom: "30px",
    borderRadius: "30px",
    width: "250px",
  },
  level: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  rate: {
    fontFamily: "LeagueSpartan",
    color: "#0051ff",
    fontSize: 24,
    marginBottom: "10px",
  },
  subjects: {
    fontFamily: "Montserrat-Regular",
    textAlign: "center"
  },
}));

type Props = {
  level: string;
  rate: number;
  subjects: string[];
};

export default function SubjectBox(props: Props) {
  const classes = useStyles();

  return (
    <DialogContent className={classes.root}>
      <Typography className={classes.level}>{props.level} </Typography>
      <Typography className={classes.rate}>{`SGD ${props.rate}/hr`}</Typography>
      <Typography className={classes.subjects}>
        <span style={{ fontWeight: "bold" }}>Subjects:</span>
        {props.subjects.map((sub) => (
          <div>
            {sub} <br />
          </div>
        ))}
      </Typography>
    </DialogContent>
  );
}
