import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setForm, submitForm } from "src/redux/form";

import {
  Button,
  Container,
  Paper,
  makeStyles,
  Grid,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import Input from "src/components/Input";

import "./global.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "fit-content",
    background: "#e6e6e6",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  panel: {
    display: "block",
    height: "250px",
    background: "#d8004d",
  },
  main: {
    marginTop: "-100px",
    paddingBottom: 50,
  },
  data: {
    padding: theme.spacing(3),
  },
  divider: {
    margin: "10px 0",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function App() {
  const { error, data, isLoading } = useSelector((state) => state.form);

  const classes = useStyles();
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(submitForm());
  }

  function handleFormChange(event) {
    const data = { [event.target.name]: event.target.value };
    dispatch(setForm(data));
  }

  return (
    <div className={classes.root}>
      <div className={classes.panel} />

      <Container fixed maxWidth="sm" className={classes.main}>
        <Paper>
          <form onSubmit={onSubmit} className={classes.data}>
            <Typography variant="h5">Application data</Typography>

            <Divider className={classes.divider} />

            <Grid
              spacing={3}
              container
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Input
                  label={"First name"}
                  name="firstname"
                  value={data.firstname}
                  onChange={handleFormChange}
                  // error={errors.name === false}
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  label={"Last name"}
                  name="lastname"
                  value={data.lastname}
                  onChange={handleFormChange}
                  // error={errors.phone === false}
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  label={"Email"}
                  name="email"
                  value={data.email}
                  onChange={handleFormChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  name="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={data.date}
                  onChange={handleFormChange}
                />
              </Grid>

              {error && (
                <Grid item xs={12}>
                  <Typography
                    label={"Email"}
                    name="email"
                    color={"secondary"}
                    value={data.email}
                    onChange={handleFormChange}
                  >
                    {error}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12}>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    size="large"
                  >
                    Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
