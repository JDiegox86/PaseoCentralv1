import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Collapse } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Navbar from '../components/Navbar/Navbar';
import Carousel from './Carousel/Carousel';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',

    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',

    },
    icon: {
        color: '#e07924',
        fontSize: '2rem',
    },
    //cambio aca
    colorText: {
        color: '#e07924',
    },
    prueba:{
        padding: '0px 100px 100px 1000px',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#e07924',
        fontSize: '4rem',
    },
    buttonMostrar:{
        color:'#e07924',

    },
}));

export function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Navbar/>
            </AppBar>
            
            
            <Collapse in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>
                <div className={classes.container}>
                    <Carousel/>
                    <div>
                        <button
                            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black" style={{backgroundColor:'#e07924'}}>
                            <Link to="/mostrar" style={{ textDecoration: 'none', color: '#fff' }} onClick="location.reload()">
                                Ver Registro
                            </Link>
                        </button>
                    </div>

                    <Scroll to='place-to-visit' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}