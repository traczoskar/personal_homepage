import axios from "axios";
import { Repository } from "../../types/types";

const gitHubAPIURL = "https://api.github.com";

export const getAPIData = async (username: string): Promise<Repository[]> => {
  try {
    const response = await axios.get<Repository[]>(
      `${gitHubAPIURL}/users/${username}/repos`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching data:", error.message);
    throw new Error(error.message);
  }
};
