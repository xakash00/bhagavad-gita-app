import axios from "axios";

export const getChapterApi = () => {
  return axios.get(`
  https://bhagavadgitaapi.in/chapters`);
};

// https://bhagavadgitaapi.in/slok/10/42/gita.svg
// https://bhagavadgitaapi.in/slok/:ch/:sl