import axios from "axios";

async function API(path, id = null) {
    let url = '/api/' + path;
    if (id !== null) {
        url += `/${id}`;
    }
    let response =  (await axios.get(url)).data;
    return response.data;
}
export default API;
