import axios from 'axios';


export const getPlatosById = async (id) => {
    console.log(id);
    return axios.get(`https://api.spoonacular.com/recipes/${id}/information`,{params:{apiKey:'9316355954b2427dbef230859bc5cab3'}})
    .then(function(res){
        console.log(res.data)
        return res.data
    })
    .catch(() => {
        throw "Error"
    });

}