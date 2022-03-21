import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Chart from "./components/Charts/chart";
import useStyles from "./style";
import Per from "./components/Charts/Percentage";
import Footer from "./components/Footer/Footer";
import axios from "axios";

function App() {
  const classes = useStyles();

  const [rollno, setRollno] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rollno === "") {
    } else {
      const fetch_api = async () => {
        axios
          .get(`/api/cache?roll=${rollno}`, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            const resp = res.data;
            console.log(resp);
            setValue(resp);
          })
          .catch((error) => console.log(error));
      };
      fetch_api();
    }
  };

  return (
    <div className="App">
      <br />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Paper className={classes.input} elevation={4}>
          <Typography
            className={classes.input_div1}
            variant="h6"
            component="div"
            style={{ fontFamily: "Poppins" }}
          >
            Search Result by Roll NO.
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className={classes.form_div1}>
              <div className={classes.form_div2}>
                <TextField
                  className={classes.textfield}
                  id="standard-basic"
                  label="Rollno"
                  onChange={(event) => {
                    setRollno(event.target.value);
                  }}
                  error={rollno === ""}
                  helperText={rollno === "" ? "Required" : " "}
                />
              </div>
              <Button
                onClick={handleSubmit}
                type="submit"
                className={classes.button}
              >
                <Typography style={{ color: "white", fontFamily: "Poppins" }}>
                  Search
                </Typography>
              </Button>
            </div>
          </form>
          <br />
          <br />
        </Paper>
      </Grid>
      {!value ? (
        <>
          <div style={{ marginTop: "61vh" }}>
            <Footer />
          </div>
        </>
      ) : (
        <>
          {value["message"] !== undefined || value[0] == null ? (
            <>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <span style={{ color: "Red" }}>Invalid Rollno</span>
              </Grid>
              <div style={{ marginTop: "60vh" }}>
                <Footer />
              </div>
            </>
          ) : (
            <>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Paper className={classes.paper_109} elevation={6}>
                  {console.log(value[0]["Father's Name"])}
                  <div className={classes.div84}>
                    <Paper className={classes.paper_118} elevation={3}>
                      <Typography
                        className={classes.typography_124}
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        Student's Detail
                      </Typography>
                      <div className={classes.hr}>
                        <hr />
                      </div>

                      <Typography
                        className={classes.typography_142}
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        Roll No.: &nbsp;&nbsp;
                        <span style={{ color: "Grey" }}>
                          {value[0]["Roll No"]}
                        </span>
                      </Typography>

                      <div className={classes.hr}>
                        <hr />
                      </div>

                      <Typography
                        className={classes.typography_142}
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        Name: &nbsp;&nbsp;
                        <span style={{ color: "Grey" }}>
                          {value[0]["Name"]}
                        </span>
                      </Typography>

                      <div className={classes.hr}>
                        <hr />
                      </div>

                      <Typography
                        className={classes.typography_142}
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        Course/Branch: &nbsp;&nbsp;
                        <span style={{ color: "Grey" }}>
                          {value[0]["Course/Branch"]}
                        </span>
                      </Typography>

                      <div className={classes.hr}>
                        <hr />
                      </div>

                      <Typography
                        className={classes.typography_142}
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        Father's Name: &nbsp;&nbsp;
                        <span style={{ color: "Grey" }}>
                          {value[0]["Father's Name"]}
                        </span>
                      </Typography>

                      <div className={classes.hr}>
                        <hr />
                      </div>

                      <Typography
                        className={classes.typography_223}
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        Exam Details
                      </Typography>

                      <div className={classes.hr}>
                        <hr />
                      </div>
                      {value.map((val) => (
                        <div key={val["name"]}>
                          <Typography
                            className={classes.typography_142}
                            style={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <span style={{ color: "Grey" }}>{val["name"]}</span>
                          </Typography>
                          <Typography
                            className={classes.typography_142}
                            style={{
                              fontFamily: "Poppins",
                            }}
                          >
                            CGPA/Marks: &nbsp;&nbsp;
                            <span style={{ color: "Grey" }}>
                              {!val["YGPA"] ? (
                                <>
                                  {!val["Fourth Year"] ? (
                                    <>{val["Total Marks"]}</>
                                  ) : (
                                    <>{val["Fourth Year"]}</>
                                  )}
                                </>
                              ) : (
                                <>{val["YGPA"]}</>
                              )}
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ color: "Grey" }}>
                              {!val["Status"] ? (
                                <></>
                              ) : (
                                <>Status: &nbsp;&nbsp;{val["Status"]}</>
                              )}
                            </span>
                          </Typography>
                          <div className={classes.hr}>
                            <hr />
                          </div>
                        </div>
                      ))}
                    </Paper>

                    <Paper elevation={4} className={classes.paper_296}>
                      <Chart data={value} />
                      {!value[3] ? (
                        <></>
                      ) : (
                        <>
                          <Per data={value} />
                        </>
                      )}
                    </Paper>
                  </div>
                </Paper>
              </Grid>
              <div style={{ marginTop: "15vh" }}>
                <Footer />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
