import axios from "axios";

const KEY = "AIzaSyDLJZ8D-APn6TAbVxNYJqmpnVaNz4UQgvo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
