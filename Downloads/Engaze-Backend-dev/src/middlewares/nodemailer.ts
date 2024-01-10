import path from "path";
import nodemailer, { Transporter } from "nodemailer";
import handlebars, {
  NodemailerExpressHandlebarsOptions,
} from "nodemailer-express-handlebars";
import { CustomMailOptions } from "../types/middleware";

const sendMail = async (
  email: string,
  subject: string,
  url: string,
  footer: string,
  template: string,
) => {
  try {
    // nodemailer configuration
    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL || "",
        pass: process.env.NODEMAILER_PASSWORD || "",
      },
    });

    // template configuration
    const handlebarOptions = {
      viewEngine: {
        partialsDir: path.resolve("./src/templates/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/templates"),
    } as NodemailerExpressHandlebarsOptions;

    transporter.use("compile", handlebars(handlebarOptions));

    // mail sending procedure
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject,
      template,
      text: `${url}`,
      context: {
        url,
        footer,
      },
    } as CustomMailOptions);
    console.log(`Email sent successfully to ${email} at ${new Date()}`);
  } catch (err) {
    console.log("Email verification failed due to email dispatch error.");
    console.log(err);
  }
};

export default sendMail;
