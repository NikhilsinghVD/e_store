import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2IwNGE1ZGE4MTIyNDdmMmVhZTgxOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1Mjc0NCwiZXhwIjoxNjQ4MzExOTQ0fQ.qdCXZgDZIpHM5jFeeKuhPZfFh9poaLC3HusjPOBoNVc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${Token}` },
});


