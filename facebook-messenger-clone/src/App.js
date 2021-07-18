import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import { FormControl,  Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  // useEffect = run code on a condition
  // useEffect(()=>{
  //if dependency is blank, it runs once when the app component loads
  // },[])//condition
  useEffect(() => {
    //const name = prompt('please enter your name')
    setUserName(prompt("please enter your name"));
  }, []);

  useEffect(() => {
    //runs once when app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img className="imglogo" alt="" src="https://i.pinimg.com/originals/84/78/13/84781348e9359def6b9bf6f601fb5c71.jpg" />
      <h1>Hello {username}clever programmers</h1>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="enter a message..." value={input} onChange={(event) => setInput(event.target.value)}/>
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form >
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id } username={username} message={message} />
        ))}
      </FlipMove>

      {/* input field
        button
        messages themselves */}
    </div>
  );
}

export default App;
