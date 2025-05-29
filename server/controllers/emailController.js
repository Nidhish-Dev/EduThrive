const nodemailer = require('nodemailer');
const Email = require('../models/emailModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email, college, phone, school,  } = req.body;

  // Validate all required fields
  if (!name || !email || !college || !phone || !school ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Save to database
  try {
    // const newEmail = new Email({
    //   name,
    //   email,
    //   college,
    //   phone,
    //   school,
    // });
    // await newEmail.save();

    // Prepare email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name} (${email})`,
     html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Helvetica Neue', Arial, sans-serif;
              background-color: #f4f7fa;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background-color: #2c3e50;
              padding: 20px;
              text-align: center;
              color: #ffffff;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              padding: 30px;
            }
            .content p {
              font-size: 16px;
              line-height: 1.6;
              margin: 10px 0;
              color: #34495e;
            }
            .content strong {
              color: #2c3e50;
            }
            .message-box {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e0e4e8;
              margin-top: 20px;
              font-size: 15px;
              color: #34495e;
            }
            .cta-button {
              display: inline-block;
              margin: 20px 0;
              padding: 12px 24px;
              background-color: #3498db;
              color: #ffffff;
              text-decoration: none;
              border-radius: 6px;
              font-size: 16px;
              font-weight: 500;
              transition: background-color 0.3s ease;
            }
            .cta-button:hover {
              background-color: #2980b9;
            }
            .footer {
              text-align: center;
              padding: 20px;
              background-color: #f4f7fa;
              font-size: 14px;
              color: #7f8c8d;
              border-top: 1px solid #e0e4e8;
            }
            @media only screen and (max-width: 600px) {
              .container {
                margin: 10px;
                border-radius: 8px;
              }
              .header h1 {
                font-size: 20px;
              }
              .content {
                padding: 20px;
              }
              .content p {
                font-size: 14px;
              }
              .message-box {
                padding: 15px;
                font-size: 14px;
              }
              .cta-button {
                padding: 10px 20px;
                font-size: 14px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You have received a new message from <strong>${name}</strong> (${email}).</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>College:</strong> ${college}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Current School:</strong> ${school}</p>
              <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
            </div>
            <div class="footer">
              <p>This message was sent via your website contact form.</p>
              <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully and data saved!' });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ message: 'Failed to process request', error: error.message });
  }
};