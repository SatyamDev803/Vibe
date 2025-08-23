import axios from "axios";

const api = axios.create({
  baseURL: "/api", // serverless routes on Vercel
  timeout: 10000,
});

// Example helpers
export const getProfiles = async (filters = {}) => {
  const { data } = await api.get("/get-profiles", { params: filters });
  return data.profiles;
};

export const recordLike = async (likerAddress, likedAddress) => {
  const { data } = await api.post("/record-like", { likerAddress, likedAddress });
  return data;
};

export const getUserStats = async (address) => {
  const { data } = await api.get("/get-user-stats", { params: { address } });
  return data;
};

export const getTrustScore = async (address) => {
  const { data } = await api.get("/get-score", { params: { address } });
  return data;
};

export const moderateChat = async (message) => {
  const { data } = await api.post("/moderate-chat", { message });
  return data;
};

export default api;
