import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import emailjs, { init } from 'emailjs-com';


import LoadingSpinner from "../common/LoadingSpinner";

//init('user_67GmyDWgJjtSfWiyYKVzY'); stephen
init('user_mdlvoe4siwYLGJHeOOv14');

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      
      'border-radius': '10px'
    },
  },
}));

var data = {
  service_id: 'service_mghu9ai',
  template_id: 'template_h2kj386'
};



function Form({ setConfirmation }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(data.service_id, data.template_id, {
      from_name: fromName,
      to_name: "Lukas Carey",
      message: message,
      from_email: fromEmail,
    })
      .then((result) => {
        setFromName('');
        setFromEmail('');
        setMessage('');
      }, (error) => {
        console.log(error);
      });

  }

  return (
    <React.Fragment>
      <div id="form-title">
        <h4>Send me a message</h4>
      </div>
      <form className={classes.root} onSubmit={sendEmail} noValidate autoComplete="off">
        <div className="field">
          <TextField
            id="standard-size-normal"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
          />
        </div>
        <div className="field">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Message"
            multiline
            rows={5}
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="field">
          <Button
            type='submit'
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              setLoading(true);
              setConfirmation(true);
            }}
            endIcon={<SendIcon>send</SendIcon>}
          >
            Send
        </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Form;
