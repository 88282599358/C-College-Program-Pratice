import nodemailer from "nodemailer";

export interface CustomMailOptions extends nodemailer.SendMailOptions {
  template: string;
  context: {
    url: string;
    footer: string;
  };
}
