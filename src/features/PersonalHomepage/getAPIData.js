import axios from "axios";

const gitHubAPIURL = "https://api.github.com";

export const getAPIData = async (username) => {
  try {
    const response = await axios.get(`${gitHubAPIURL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
  }
};
