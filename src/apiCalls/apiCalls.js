import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-34-215-113-50.us-west-2.compute.amazonaws.com:8080",
});

export const createHotel = async (data) => {
  try {
    const res = await api.post(`/api/hotel/add-hotel`, data);

    return new Promise((resolve, reject) => {
      return resolve(res.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};
