import { Dialog, TextField } from "@mui/material";
import React, { useState } from "react";

const TweetComposer = ({ open, onClose }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [location, setLocation] = useState("");
  const [poll, setPoll] = useState(null);
  const [question, setQuestion] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  const handleVideoChange = (event) => {
    setVideos([...videos, event.target.files[0]]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePollChange = (event) => {
    setPoll(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    console.log(text, images, videos, location, poll, question);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <TextField label="Text" value={text} onChange={handleTextChange} />

        <button type="submit">Submit</button>
      </form>
    </Dialog>
  );
};

export default TweetComposer;
