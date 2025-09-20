import api from "./axios";

// 🔹 User Signup
export const signupUser = async (userData: {
  FirstName: string;
  LastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role?: string; // optional (defaults to "user")
}) => {
  const res = await api.post("/signup", userData);
  return res.data;
};

// 🔹 User Login
export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/login", credentials);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
  }
  return res.data;
};

// 🔹 Verify Email
export const verifyEmail = async (token: string) => {
  const res = await api.get(`/verify/${token}`);
  return res.data;
};

// 🔹 Logout
export const logoutUser = async () => {
  await api.post("/logout");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// 🔹 Get My Profile
export const getMyProfile = async () => {
  const res = await api.get("/profile");
  return res.data;
};

// 🔹 Update My Profile
export const updateMyProfile = async (updates: {
  FirstName?: string;
  LastName?: string;
  email?: string;
}) => {
  const res = await api.patch("/profile", updates);
  return res.data;
};

// 🔹 Update Password
export const updatePassword = async (payload: {
  passwordCurrent: string;
  password: string;
  passwordConfirm: string;
}) => {
  const res = await api.patch("/updatePassword", payload);
  return res.data;
};
