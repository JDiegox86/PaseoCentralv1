import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import { Restaurantes } from "../components/Restaurantes/Restaurantes";
import { Cine } from "../components/Cine/Cine";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  
  return (
    <div className={classes.root} id="place-to-visit">
      <Cine />
      <Restaurantes />

    </div>
  );
}