import { Grid, makeStyles } from "@material-ui/core";
import { BRIIDGE_BLUE, BRIIDGE_YELLOW } from "../themes";

const useStyles = makeStyles((theme) => ({
  slider: {
    backgroundColor: "#fdc84b",
    padding: theme.spacing(3, 3),
  },
  img: {
    padding: theme.spacing(3),
  },
  body: {
    padding: theme.spacing(3),
    textAlign: "left",
  },
  name: {
    fontSize: 40,
    fontFamily: "Quicksand-Bold",
    color: BRIIDGE_BLUE,
  },
  identity: {
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
  },
  textbody: {
    fontSize: 20,
    fontFamily: "Quicksand",
  },
}));

type TestimonialSlideProps = {
  avatar: string;
  name: string;
  identity: string;
  text: string;
};

export default function TestimonialSlide({
  avatar,
  name,
  identity,
  text,
}: TestimonialSlideProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.slider}>
      <Grid item xs={12} md={3}>
        <img src={avatar} className={classes.img} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={9}
        direction="column"
        spacing={1}
        className={classes.body}
      >
        <Grid item className={classes.name}>
          {name}
        </Grid>
        <Grid item className={classes.identity}>
          {identity}
        </Grid>
        <Grid item className={classes.textbody}>
          {text}
        </Grid>
      </Grid>
    </Grid>
  );
}
