import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import emailjs, { init } from 'emailjs-com';

init('user_67GmyDWgJjtSfWiyYKVzY');

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

var data = {
  service_id: 'service_2elw0p9',
  template_id: 'contact_form'
};



function Form() {
  const classes = useStyles();
  const [fromName, setFromName] = useState();
  const [fromEmail, setFromEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(data.service_id, data.template_id, {
      from_name: fromName,
      to_name: "Stephen Corral", // Replace this with Lukas
      message: message,
      from_email: fromEmail,
    })
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      });
  }

  const onChangeHandler = ({ target }) => {
    setFromName(target.value)
  };

  return (
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
          onChange={(e) => setFromEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="Placeholder"
          multiline
          rows={5}
          variant="outlined"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="field">
        <Button
          type='submit'
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon>send</SendIcon>}
        >
          Send
        </Button>
      </div>
    </form>
  );
}

export default Form;
