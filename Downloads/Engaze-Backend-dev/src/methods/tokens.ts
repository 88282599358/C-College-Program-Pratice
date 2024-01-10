import TokenModel, { Token, TokenPurposeType } from "../models/token";

// GET - retreive a specific token
export const getToken = (values: {
  email: string;
  purpose: TokenPurposeType;
}) => TokenModel.findOne(values);

// POST - create a new token
type TokenCreationFields = Pick<
  Token,
  "userId" | "email" | "token" | "purpose"
>;
export const createToken = (values: TokenCreationFields) =>
  new TokenModel(values).save().then((token: any) => token.toObject());

// DELETE - delete existing token (protected)
export const deleteToken = (id: string) =>
  TokenModel.findOneAndDelete({ _id: id });
