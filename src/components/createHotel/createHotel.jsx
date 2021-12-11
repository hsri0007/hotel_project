import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createHotel } from "../../apiCalls/apiCalls";
import LinearProgress from "@material-ui/core/LinearProgress";
import SimpleSnackbar from "./snakbar";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: 200,
  },
}));

export default function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const validationSchema = Yup.object({
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    "phone-number": Yup.number().required("Required"),
    country: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    "hotel-name": Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    createHotel(values).then((res) => {
      console.log(res);
      setLoading(false);
      setOpen(true);
    });

    // setTimeout(() => {
    //   setLoading(false);
    //   setOpen(true);
    // }, 3000);
    resetForm();
  };

  return (
    <div>
      {loading && <LinearProgress color="secondary" />}
      <SimpleSnackbar open={open} setOpen={setOpen} />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Hotel
          </Typography>
          <Formik
            initialValues={{
              address: "",
              city: "",
              country: "",
              description: "",
              "hotel-name": "",
              "phone-number": "",
              "staff-languages": ["english"],
              state: "",
              website: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form className={classes.form} onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoComplete="fname"
                      name="hotel-name"
                      variant="outlined"
                      fullWidth
                      label="Hotel Name"
                      as={TextField}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      as={TextField}
                      autoComplete="current-address"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      id="city"
                      label="City"
                      as={TextField}
                      name="city"
                      autoComplete="current-city"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      name="state"
                      label="State"
                      id="state"
                      as={TextField}
                      autoComplete="current-state"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      name="country"
                      label="Country"
                      id="country"
                      as={TextField}
                      autoComplete="current-country"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      name="phone-number"
                      label="Contact Number"
                      type="number"
                      as={TextField}
                      id="contactnumber"
                      autoComplete="current-contactnumber"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      name="website"
                      label="Website"
                      id="website"
                      as={TextField}
                      autoComplete="current-website"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      name="description"
                      label="Description"
                      as={TextField}
                      id="description"
                      autoComplete="description"
                    />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      className={classes.submit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
}
