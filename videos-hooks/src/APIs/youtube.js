import axios from "axios";

const KEY = "AIzaSyA7UrPJ0TrR3CfC75C3oZ-J8sMLRU0FqBU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
