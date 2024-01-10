import {
  login,
  logout,
  register,
  verifyEmail,
} from "../controllers/authentication";
import isAuthenticated from "../middlewares/auth";

export default (router: any) => {
  router.post("/auth/register/", register);
  router.post("/auth/verify-email/", verifyEmail);
  router.post("/auth/login/", login);

  router.patch("/auth/logout/", isAuthenticated, logout);
};
