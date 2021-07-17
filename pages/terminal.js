import React from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
import clsx from "clsx";
import Footer from '../components/footer'

const DynamicTerminal = dynamic(() => import("../components/terminal"), {
    ssr: false
})

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0",
        margin: "0"
    },

    terminalWrapper: {
        padding: '0',
        margin: '0'
    },

    terminalHeader: {

    },
    
    terminalBody: {

    }
}))

export default function Terminal() {
    const classes = useStyles();
    return (
        <div className={classes.terminalWrapper}>
            <div className={classes.terminalHeader}>
                <Typography>
                    <h1>
                        This is a major work in progress
                    </h1>
                </Typography>
            </div>
            <div className={classes.terminalBody}>
                <DynamicTerminal />
            </div>
            <div className={classes.footer}>
                <p>xtermjs v4.13.0</p>
            </div>
        </div>
    )
}