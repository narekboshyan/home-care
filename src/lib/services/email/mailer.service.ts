import * as nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { SendMailTemplatePayloadInterface } from "./interfaces/send-mail-template-payload.interface";

class EmailService {
  private _transporter: nodemailer.Transporter;

  private MAIL_FROM: string = `Northridge Boarding Care <${process.env
    .SMTP_USER!}>`;

  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  private _loadTemplate(templateName: string): string {
    const templatesDir = path.join(
      process.cwd(),
      "src/lib/services/email/templates"
    );
    const filePath = path.join(templatesDir, `${templateName}.html`);
    return fs.readFileSync(filePath, "utf-8");
  }

  private async _sendTemplate({
    to,
    subject,
    template,
    context = {},
  }: SendMailTemplatePayloadInterface & {
    template: string;
    context?: Record<string, unknown>;
  }): Promise<void> {
    const html = this._renderTemplate(template, context);

    const mailOptions: nodemailer.SendMailOptions = {
      from: this.MAIL_FROM,
      to: to,
      subject,
      html,
    };

    await this._transporter.sendMail(mailOptions).then(() => {
      console.log(`Email sent to ${to}`);
    });
  }

  private _renderTemplate(
    template: string,
    context: Record<string, any>
  ): string {
    let html = this._loadTemplate(template);

    Object.keys(context).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      html = html.replace(regex, context[key]);
    });

    return html;
  }

  async sendContactUsUserInformation(
    fullName: string,
    email: string,
    phoneNumber: string,
    message: string
  ): Promise<unknown> {
    return this._sendTemplate({
      to: "asya.harutyunyan010@gmail.com",
      subject: "New applicant",
      template: "contact-us-application",
      context: {
        fullName,
        phoneNumber,
        email,
        message,
      },
    });
  }
}

export const mailService = new EmailService();
