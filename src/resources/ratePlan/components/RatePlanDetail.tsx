import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Paper } from "@material-ui/core";
import { RatePlanType } from "generated/graphql";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "calc(100vh - 50px)",
  },
  container: {
    maxHeight: "calc(100vh - 50px)",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function RatePlanDetail({ data }: { data: RatePlanType }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div>Configure your rate plan</div>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item sm={6} md={4}>
            <TextField
              id="name"
              fullWidth
              className={classes.textField}
              label="Rate plan name"
              required
              defaultValue={data.name}
            />
          </Grid>
          <Grid item sm={6} md={4}>
            <TextField
              id="monetizationPackage.name"
              fullWidth
              className={classes.textField}
              label="Product bundle name"
              required
              defaultValue={data.monetizationPackage?.name}
            />
          </Grid>
          <Grid item sm={6} md={4}>
            <TextField
              id="ratePlanType"
              fullWidth
              className={classes.textField}
              label="Rate plan type"
              required
              defaultValue={
                data.ratePlanDetails && data.ratePlanDetails.map((v) => v?.type)
              }
            />
          </Grid>
          <Grid item sm={6} md={4}>
            <TextField
              id="type"
              fullWidth
              className={classes.textField}
              label="Audience"
              defaultValue={data.type}
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
