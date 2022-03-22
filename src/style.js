import { makeStyles, createTheme, ThemeProvider } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    // marginRight: theme.spacing(2),
  },
  input: {
    margin: "auto",
    padding: "12px",
    height: "120px",
    width: "420px",
  },

  input_div1: {
    marginLeft: "80px",
  },

  form_div1: {
    display: "flex",
  },

  form_div2: {
    display: "flex",
    flexDirection: "row",
  },
  div84: {
    display: "flex",
  },

  textfield: {
    marginLeft: "30px",
    padding: "10px",
    height: "20px",
    width: "200px",
  },

  button: {
    marginLeft: "10px",
    marginTop: "11px",
    height: "50px",
    width: "120px",
    backgroundColor: "#3A3B3C",
    padding: "18px 36px",
    fontSize: "18px",
  },

  paper_109: {
    width: "1000px",
    marginTop: "30px",
  },

  paper_118: {
    width: "580px",
  },

  typography_124: {
    marginLeft: "150px",
    fontSize: "1.5rem",
    marginTop: "20px",
  },
  typography_142: {
    marginLeft: "20px",
    fontSize: "0.9rem",
    marginTop: "10px",
  },

  typography_223: {
    marginLeft: "180px",
    fontSize: "1.3rem",
    marginTop: "15px",
  },

  paper_296: {
    width: "480px",
    marginLeft: "40px",
  },
  hr: {
    width: "500px",
    marginLeft: "10px",
    marginTop: "10px",
  },
  ["@media only screen and (max-width: 650px)"]: {
    // eslint-disable-line no-useless-computed-key
    input: {
      margin: "auto",
      padding: "10px",
      height: "110px",
      width: "350px",
    },
    textfield: {
      marginLeft: "30px",
      padding: "4px",
      height: "15px",
      width: "170px",
    },
    button: {
      marginLeft: "10px",
      marginTop: "6px",
      width: "100px",
    },
    input_div1: {
      marginLeft: "55px",
      fontSize: "1.15rem",
    },
    paper_109: {
      width: "380px",
      marginTop: "30px",
    },
    div84: {
      flexDirection: "column",
    },
    paper_118: {
      width: "380px",
    },
    paper_296: {
      width: "380px",
      marginTop: "40px",
      marginLeft: "0px",
    },
    hr: {
      width: "360px",
      marginLeft: "10px",
      marginTop: "10px",
    },
    typography_223: {
      marginLeft: "120px",
    },
    typography_124: {
      marginLeft: "90px",
      fontSize: "1.5rem",
    },
  },
}));
