import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 150px",
    [theme.breakpoints.down("md")]: { padding: "0 60px" },
    [theme.breakpoints.down("sm")]: { padding: "0 30px" },
    [theme.breakpoints.down("xs")]: { padding: "0 20px" },
  },
  para: {
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  imgBox: { marginTop: 40 },
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    margin: "20px 0 40px 0",
  },
  algoname: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    marginTop: 50,
    [theme.breakpoints.down("sm")]: { fontSize: 30 },
  },
  header: {
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  descr: {
    marginTop: 20,
    color: "white",
    fontSize: 18,
  },
}));

const Page = ({ algoName, content, path }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography className={classes.algoname}>{algoName}</Typography>
      </Box>
      <Box>
        {content.map((item, index) => (
          <Typography key={index} className={classes.descr}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box className={classes.imgBox}>
        <Typography style={{ color: "white", fontSize: 22 }}>Example:</Typography>
        <img src={path} alt={algoName} className={classes.img} />
      </Box>
    </Box>
  );
};

export default Page;
