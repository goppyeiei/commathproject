import React, { useState } from "react";
import { getElimination } from "../../functions";
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CHUTDANAI EIEIZA
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
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
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
  const [a00, seta00] = useState(6);
  const [a01, seta01] = useState(-4);
  const [a02, seta02] = useState(1);
  const [a10, seta10] = useState(-4);
  const [a11, seta11] = useState(6);
  const [a12, seta12] = useState(-4);
  const [a20, seta20] = useState(1);
  const [a21, seta21] = useState(-4);
  const [a22, seta22] = useState(6);

  const [b1, setb1] = useState(-14);
  const [b2, setb2] = useState(36);
  const [b3, setb3] = useState(6);

  const [x0, setx0] = useState("");
  const [x1, setx1] = useState("");
  const [x2, setx2] = useState("");

  const generate = () => {
    const data = {
      A: [
        [a00, a01, a02],
        [a10, a11, a12],
        [a20, a21, a22],
      ],
      b: [b1, b2, b3],
    };
    getElimination(data).then((res) => {
      setx0(res[0]);
      setx1(res[1]);
      setx2(res[2]);
      console.log(res);
    });
  };
  const back = () => {
    navigate("/");
  };

  return (
    <Container component="main" maxWidth={false} className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          UNIT 2
        </Typography>
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <Typography>Array A = 3x3</Typography>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a00}
                    variant="outlined"
                    onChange={(e) => seta00(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a01}
                    variant="outlined"
                    onChange={(e) => seta01(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a02}
                    variant="outlined"
                    onChange={(e) => seta02(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a10}
                    variant="outlined"
                    onChange={(e) => seta10(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a11}
                    variant="outlined"
                    onChange={(e) => seta11(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a12}
                    variant="outlined"
                    onChange={(e) => seta12(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a20}
                    variant="outlined"
                    onChange={(e) => seta20(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a21}
                    variant="outlined"
                    onChange={(e) => seta21(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={a22}
                    variant="outlined"
                    onChange={(e) => seta22(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography>Array B</Typography>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={b1}
                    variant="outlined"
                    onChange={(e) => setb1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={b2}
                    variant="outlined"
                    onChange={(e) => setb2(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    value={b3}
                    variant="outlined"
                    onChange={(e) => setb3(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Typography style={{marginTop:60}} className={classes.typho}>Result</Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <TextField
            id="outlined-read-only-input"
            label="x0"
            value={x0 === "" ? "" : x0}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="x1"
            value={x1 === "" ? "" : x1}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="x2"
            value={x2 === "" ? "" : x2}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Typography>

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
