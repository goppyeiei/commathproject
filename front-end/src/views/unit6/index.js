import React, { useState } from "react";

import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import { getRootFinding } from "../../functions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SO TIRED REALLYYYYEIEI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.001);
  const [result, setresult] = useState("");

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx,
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          UNIT 6
        </Typography>
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={a}
                label="ค่า A"
                variant="outlined"
                onChange={(e) => seta(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={b}
                label="ค่า B"
                variant="outlined"
                onChange={(e) => setb(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={dx}
                label="ค่าใกล้เคียง"
                variant="outlined"
                onChange={(e) => setdx(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <TextField style={{width:450}}
          id= "outlined-read-only-input"
          label="Result"
          value={result === "" ? "" : result}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <Button
          onClick={generate}
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          SUBMIT
        </Button>
        <Button
          onClick={back}
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          กลับ
        </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
