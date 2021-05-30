import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router";
import TopBar from "../components/TopBar";
import Calendar from "react-calendar";
import "../Calendar.css";
import { isEqual } from "date-fns";
import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    marginLeft: "5%",
    marginTop: "1%",
    fontFamily: "LeagueSpartan",
    fontSize: 24,
    color: "#0051ff",
  },

  calendar: {
    marginLeft: "5%",
    marginTop: "1%",
    display: "inline-block",
  },

  legend: {
    marginTop: "10px",
    display: "flex",
  },

  main: {
    display: "flex",
    alignItems: "flex-start",
  },

  paperHeader: {
    lineHeight: "46px",
    backgroundColor: "#0051ff",
    color: "#ffdf00",
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
  },

  select: {
    height: 300,
    overflow: "auto",
  },

  timeSelector: {
    width: "30%",
    marginTop: "1%",
    marginLeft: "1%",
  },

  radio: {
    margin: "5px 10px",
    color: "#0051ff",
  },

  actions: {
    textAlign: "center",
  },

  button: {
    fontFamily: "Montserrat-Regular",
    margin: "20px",
    borderRadius: "30px",
    color: "white",
  },

  back: {
    backgroundColor: "grey",
  },
}));

type Location = {
  state: any;
};

export default function LessonBooking(props: any) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation() as Location;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  //TODO: Currently hardcoded
  const availableDates = [new Date(2021, 5, 2), new Date(2021, 5, 4)];
  const availableTimes = ["11", "13", "14", "15", "18", "19"];

  function isAvailable(date: any) {
    return availableDates.filter((x) => isEqual(date, x)).length > 0;
  }

  const getTileClass = ({ activeStartDate, date, view }: any) => {
    return isAvailable(date) ? "available" : null;
  };

  const checkTileDisable = ({ activeStartDate, date, view }: any) => {
    return view === "month" && !isAvailable(date);
  };

  function onChange(nextValue: any) {
    setSelectedDate(nextValue);
  }

  const handleChangeTime = (event: any) => {
    setSelectedTime(event.target.value);
  };

  function formatTime(hour: number) {
    const digits =
      hour < 10 ? `${hour}:00` : hour > 12 ? `${hour - 12}:00` : `${hour}:00`;
    const ampm = hour < 12 ? " AM" : " PM";
    return digits + ampm;
  }

  function timeValueToLabel(startTime: string) {
    const start = parseInt(startTime);
    const end = start + 1;
    return `${formatTime(start)} - ${formatTime(end)}`;
  }

  console.log(selectedTime);

  return (
    <div>
      <TopBar />
      <div className={classes.header}>Choose Your Lesson Date & Time</div>
      <div className={classes.main}>
        <div className={classes.calendar}>
          <Calendar
            minDate={new Date()}
            prev2Label={null}
            next2Label={null}
            tileClassName={getTileClass}
            tileDisabled={checkTileDisable}
            value={selectedDate}
            onChange={onChange}
          />
          <div className={classes.legend}>
            <div style={{ marginRight: "10px" }}>🟨 Available</div>
            <div>⬜ Unavailable</div>
          </div>
        </div>

        <div className={classes.timeSelector}>
          <div className={classes.paperHeader}>Time</div>
          <Paper className={classes.select}>
            <RadioGroup
              aria-label="time"
              name="time"
              value={selectedTime}
              onChange={handleChangeTime}
            >
              {[
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
              ].map((start) => (
                <FormControlLabel
                  key={start}
                  value={start}
                  disabled={!availableTimes.includes(start)}
                  control={<Radio color="primary" />}
                  label={timeValueToLabel(start)}
                  className={classes.radio}
                />
              ))}
            </RadioGroup>
          </Paper>
        </div>
      </div>
      <div className={classes.actions}>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.back}`}
          onClick={() => history.goBack()}
        >
          back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          //TODO: Pass tutor to booking summary
          onClick={() =>
            history.push({ pathname: "/bookingsummary", state: { id: 123 } })
          }
        >
          confirm
        </Button>
      </div>
    </div>
  );
}
