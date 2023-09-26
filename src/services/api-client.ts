import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '16b33938d729410cbb37d9be6440d800'
    }
})