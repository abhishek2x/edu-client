import {
  Hidden,
  Typography,
  List,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";

import React from "react";

function ScheduleList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper className={classes.listItem} component="div">
      <ListItem onClick={() => handleClick()}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Chapter 1" secondary="Lorem ipsum dolor sit amet, consectetur" />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Hidden smDown>
            <Typography>2 lecture • 11 min</Typography>
          </Hidden>
          <IconButton edge="end" onClick={() => handleClick()}>
            {open ? <ExpandMoreIcon /> : <NavigateNextIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {[1, 2].map((items, index) => (
          <CollapseList key={index} lectureList={items} />
        ))}
      </Collapse>
    </Paper>
  );
}

function CollapseList(props) {
  const classes = useStyles();

  return (
    <List component="div">
      <ListItem button>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Lorem ipsum dolor sit amet, consectetur" />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Typography className={classes.lectureInfo}>2 min</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    boxShadow: "0px 4px 20px 2px rgba(145, 180, 248, 0.15)",
    cursor: "pointer",
    marginBottom: theme.spacing(1),
  },
  avatar: {
    borderRadius: "5px",
    background: "#fff",
    color: theme.palette.primary.main,
  },
  listItemSecondaryAction: {
    display: "flex",
    alignItems: "center",
  },
}));

export default ScheduleList;
