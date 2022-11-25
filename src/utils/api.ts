import axios from 'axios';

export const getData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
