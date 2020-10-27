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
import { getInterpolation } from "../../functions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SO TIRED
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
  const [x, setx] = useState(10);
  const [xi1, setxi1] = useState(0);
  const [xi2, setxi2] = useState(8);
  const [xi3, setxi3] = useState(14);
  const [xi4, setxi4] = useState(20);
  const [xi5, setxi5] = useState(23);
  const [xi6, setxi6] = useState(30);
  const [yi1, setyi1] = useState(0);
  const [yi2, setyi2] = useState(50);
  const [yi3, setyi3] = useState(96);
  const [yi4, setyi4] = useState(110);
  const [yi5, setyi5] = useState(100);
  const [yi6, setyi6] = useState(86);

  const [result, setresult] = useState("");
  const back = () => {
    navigate("/");
  };
  const generate = () => {
    const data = {
      x: x,
      xi: [xi1, xi2, xi3, xi4, xi5, xi6],
      yi: [yi1, yi2, yi3, yi4, yi5, yi6],
    };
    getInterpolation(data).then((res) => {
      setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`);
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
          UNIT 3
        </Typography>
        <TextField
          style={{ margin: 20 }}
          align="center"
          id="outlined-basic"
          label="t(s)"
          value={x}
          variant="outlined"
          onChange={(e) => setx(e.target.value)}
        />
        -----------------------------------------------------------------
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item xs={12} sm={4} md={4} style={{marginTop:20}}>
            <TextField
              id="outlined-basic"
              label="x1"
              value={xi1}
              variant="outlined"
              onChange={(e) => setxi1(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="x2"
              value={xi2}
              variant="outlined"
              onChange={(e) => setxi2(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="x3"
              value={xi3}
              variant="outlined"
              onChange={(e) => setxi3(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="x4"
              value={xi4}
              variant="outlined"
              onChange={(e) => setxi4(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="x5"
              value={xi5}
              variant="outlined"
              onChange={(e) => setxi5(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="x6"
              value={xi6}
              variant="outlined"
              onChange={(e) => setxi6(e.target.value)}
            />
          </Grid>
          ---------------------------------------------------------------------
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="y1"
              value={yi1}
              variant="outlined"
              onChange={(e) => setyi1(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="y2"
              value={yi2}
              variant="outlined"
              onChange={(e) => setyi2(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="y3"
              value={yi3}
              variant="outlined"
              onChange={(e) => setyi3(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="y4"
              value={yi4}
              variant="outlined"
              onChange={(e) => setyi4(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="y5"
              value={yi5}
              variant="outlined"
              onChange={(e) => setyi5(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="outlined-basic"
              label="y6"
              value={yi6}
              variant="outlined"
              onChange={(e) => setyi6(e.target.value)}
            />
          </Grid>
          ---------------------------------------------------------------------
        </Grid>
        <TextField
          style={{ margin: 30, width: 500, textAlign:"center" }}
          id="outlined-read-only-input"
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
