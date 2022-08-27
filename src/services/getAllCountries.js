import { baseUrl } from "../utils/baseUrl";
import filterData from "../helpers/filterData";

const getAllCountries = async () => {
  const apiUrl = `${baseUrl}/all`;
  try {
    const response = await fetch(apiUrl);
    if (response.status === 200) {
      const data = await response.json();
      return filterData(data);
    } else if (response.status === 404) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllCountries;
