const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "aroopkumar50@outlook.com",
        subject: "Welcome to the app!",
        text: `Hello ${name}. Welcome to the app. Let us know how you get along with it.`,
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "aroopkumar50@outlook.com",
        subject: "Sorry to see you go!",
        text: `Goodbye ${name}. We hope to see you soon.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};
