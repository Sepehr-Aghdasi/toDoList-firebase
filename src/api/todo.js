import axios from "axios";

const instance = axios.create({
      baseURL: "https://vue-todolist-183e4-default-rtdb.europe-west1.firebasedatabase.app",
});

export default instance;
