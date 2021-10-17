import axios from "axios";

export const saveEmail = async (email) => {
  var params = { api_key: "PP7MKZ", email: email, referral_link: document.URL };
  var response = await axios.post(
    "https://getwaitlist.com/api/v1/waitlists/submit",
    params
  );

  return response.data;
};
