import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    linux_maintenance: {
        color: "#fcba03",
        backgroundColor: "#111",
        fontFamily: "Helvetica",
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        margin: "0"
    }
}));

export default function linuxMaintenance() {
    const classes = useStyles();
    return (
        <div className={classes.linux_maintenance}>
            <CssBaseline/>
            <h1>The service you are looking at is currently down for scheduled maintenance.</h1>
        </div>
    )
}