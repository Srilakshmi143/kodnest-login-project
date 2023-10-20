import "./App.css";
import React, { useState } from "react";
import loginimage from "./loginimage.jpg";
import { Button, Container, Grid, TextField } from "@mui/material";

function App() {
  const [inputs, setInputs] = useState({
    c_email: "",
    c_password: "",
  });

  const [errors, setErrors] = useState({
    c_email: false,
    c_password: false,
  });

  const handleChange = (e) => {
    let { name } = e.target;
    if (name === "c_email") {
      setErrors({ ...errors, c_email: false });
      setInputs({ ...inputs, c_email: e.target.value });
    } else if (name === "c_password") {
      setErrors({ ...errors, c_password: false });
      setInputs({ ...inputs, c_password: e.target.value });
    }
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;
    let regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
    if (name === "c_email") {
      if (
        !/^(?!.*([A-Za-z0-9])\1{3})[A-Za-z0-9._%+-]{3,}\@[A-Za-z0-9-]{3,}\.[A-Za-z]{2,4}$/.test(
          value
        )
      ) {
        setErrors({ ...errors, c_email: true });
      } else {
        setErrors({ ...errors, c_email: false });
      }
    } else if (name === "c_password") {
      if (regex.test(value) == false && value.length <= 10) {
        setErrors({ ...errors, c_password: true });
      } else {
        setErrors({ ...errors, c_password: false });
      }
    }
  };

  const handleSubmit = () => {
    if (inputs.c_email.length === 0) {
      setErrors({ ...errors, c_email: true });
    } else if (inputs.c_password.length === 0) {
      setErrors({ ...errors, c_password: true });
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={loginimage} className="image_Fitter" />
        </Grid>
        <Grid item xs={6}>
          <div>
            <h2 className="loginheader"> 5 Gencare-Login </h2>

            <div className="form-flex">
              <div>
                <TextField
                  name="c_email"
                  onChange={(e) => handleChange(e)}
                  error={errors.c_email}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_email && "Enter valid email"}
                  value={inputs.c_email}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Enter Email"
                  className="auth-input feildname"
                  inputProps={{ maxLength: 50 }}
                />
              </div>

              <div>
                <TextField
                  name="c_password"
                  onChange={(e) => handleChange(e)}
                  error={errors.c_password}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_password && "Enter password"}
                  value={inputs.c_password}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Enter Password"
                  className="auth-input feildname"
                  inputProps={{ maxLength: 50 }}
                />
              </div>
            </div>
          </div>

          <div>
            <Button
              variant="contained"
              component="span"
              className="feedback-send-btn"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>

          <div>
            <h2 className="loginheader">About us</h2>
            <p>
              5GenCare is a Hong Kong based tech company that provides
              end-to-end solution for IOT catered to Businesses of any size —
              from start-ups to big enterprises and multinational electronics
              brands. We offer fully integrated solutions to get electronic
              devices online and build customer-facing applications to control
              and manage devices remotely.
            </p>
            <h2 className="loginheader">Our Clients</h2>
            <p>Motorola Nursery</p>
            <p>Chillax</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
