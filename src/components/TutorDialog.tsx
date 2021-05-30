import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import image from "../Shared/tutor.jpeg";
import SubjectBox from "./SubjectBox";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  image: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  },
  name: {
    fontSize: 20,
    marginBottom: "10px",
  },
  center: {
    width: "60%",
  },
  button: {
    fontFamily: "Montserrat-Regular",
    borderRadius: "30px",
    margin: "20px 50px"
  },
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function TutorDialog(props: Props) {
  const classes = useStyles();
  const history = useHistory();

  const handleConfirm = () => {
      history.push({pathname: '/lessonbooking', state: {id: 123}})
  }

  return (
    <Dialog
      maxWidth="xl"
      open={props.open}
      onClose={props.onClose}
      PaperProps={{ style: { backgroundColor: "whitesmoke" } }}
    >
      <DialogTitle>
        <IconButton onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <img src={image} className={classes.image} alt="" />
        <div className={classes.center}>
          <Typography className={classes.name}>Jacob Strootman</Typography>
          <Typography>&#11088; &#11088; &#11088; &#11088; &#11088;</Typography>
          <Typography>
            Preferred Locations: Bukit Batok, Yew Tee
          </Typography>{" "}
          <br />
          <Typography>
            <span style={{ textDecoration: "underline" }}>Availability</span>
          </Typography>
          <Typography>Mondays: 9am to 11am</Typography>
          <Typography>Tuesdays: 5pm to 7pm</Typography>
          <Typography>Thursdays: 9am to 11am</Typography>
          <br />
          <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        <div>
          <SubjectBox
            level={"Primary School"}
            rate={25}
            subjects={["Mathematics", "Science"]}
          />
          <SubjectBox
            level={"Secondary School"}
            rate={35}
            subjects={["A Math", "Physics", "Literature"]}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
