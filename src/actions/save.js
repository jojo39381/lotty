import axios from "axios";

export const saveEmail = async (email) => {
    var params = {email:email}
    var response = await axios.post("https://uqgtqxi7.brev.dev/api/emails", {params:params})
    
    return response.status

    
    
}