import axios from "axios";

export const saveEmail = async (email) => {
    var params = {"email":email}
    var response = await axios.post("https://jcrdj9rb.brev.dev/api/api/emails", params)
    
    return response.status

    
    
}