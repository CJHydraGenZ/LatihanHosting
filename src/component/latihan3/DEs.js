import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { API, deleteAPI } from './Api'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Animations } from './Skeleton'

export function Des() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetch = async () => {
      // const data = await API
      setLoading(true)
      setData(await API())
      setLoading(false)
    }

    fetch()

  }, [])

            const handleClick = (e) => {
    console.log(e);


  }
  // if (!data) {
  //   return 'loading'
  // }

  return (
    <div className="Des">
      <h1>Fetching</h1>
      {loading && <Animations />}
      {data.map(d =>
        <Grid container justify="center" spacing={4} key={d.id} >
          <Grid item xs={10} >
            <Paper elevation={3} onClick={() => { handleClick(d.id) }} >
              <Card style={{ minWidth: 400 }}>
                <CardContent>
                  <Typography style={{ fontSize: 14 }} color="textSecondary">
                    {d.id}
                  </Typography>
                  <Typography style={{ fontSize: 14 }} color="textSecondary">
                    {d.title}
                  </Typography>
                  <Typography style={{ fontSize: 14 }} color="textSecondary">
                    {d.body}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      )}

    </div>
  );
}




