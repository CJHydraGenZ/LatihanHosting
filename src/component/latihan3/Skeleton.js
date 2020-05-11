import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {

        width: 800,
        margin: 'auto'
    },
});


export function Animations() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
        </div>
    );
}