import crypto from "crypto";

const SECRET = process.env.PASSWORD_HASH_SECRET || "ENGAZE-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authenticationFunc = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
