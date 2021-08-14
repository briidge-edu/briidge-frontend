import React from 'react';
import logo from "../Shared/BriidgeIconTransparent.png";
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BRIIDGE_BLUE } from '../themes';

const useStyles = makeStyles((theme) => ({
    topBar: {
        height: "60px",
        color: BRIIDGE_BLUE,
        fontFamily: "LeagueSpartan",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 30,
      },
      icon: {
        marginRight: "20px",
      },
}));

type Props = {
  name: string
}

export default function TutorTopBar(props: Props) {
    const classes = useStyles();

    return (
      <div className={classes.topBar}>
        <img
          src={logo}
          alt="Briidge Logo"
          width="50"
          height="35"
          style={{ margin: 15 }}
        />
        <div style={{ margin: "0 auto" }}>Welcome, {props.name}!</div>
        <MailOutlineIcon className={classes.icon} fontSize="large" />
        <AccountCircleIcon className={classes.icon} fontSize="large" />
      </div>
    )
}