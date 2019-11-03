import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import userImg from '../assets/user.jpg';
import Link from '@material-ui/core/Link';
import  sampleSound from  '../assets/honk.mp3';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));
const renderUserData = (details, user) => {
  return details && (
    <div>
      <p>{user.summary}</p>
      <audio
      controls
      src={user.relevant_sample.file ? user.relevant_sample.file : sampleSound }
      >
        Your browser does not support the <code>audio</code> element
      </audio>
    </div>
  )
}
 
const User = ({user, details}) => {
  console.log('User: ', user.user.username)
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Link href={'https://voice123.com/' + user.user.username}>
            <Avatar alt="Cindy Baker" src={user.user.picture_small ? user.user.picture_small : userImg} />
          </Link>
        </ListItemAvatar>
        <ListItem
          button component="a" href={'https://voice123.com/' + user.user.username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {user.user.username}
              </Typography>
              {user.user.location}
            </React.Fragment>
          }
        >
          <ListItemText primary={user.user.name}/>
        </ListItem>
      </ListItem>
      <ListItem>
      {renderUserData(details, user)}
      </ListItem>
    </List>
  );
}

export default User;