// config-detail.js — longer text blocks
const SITE_DETAIL = {
  form: {
    heading: "Enquire about a place",
    subheading: "Fill in the form below and we will get back to you. You can also call or WhatsApp us directly.",
    endpoint: "https://formspree.io/f/YOUR_FORM_ID",
    fields: {
      parentName:  "Parent / guardian full name",
      email:       "Your email address",
      phone:       "Your phone number (optional)",
      studentName: "Child's full name",
      studentAge:  "Child's age",
      message:     "Tell us a little about your enquiry"
    },
    submitLabel: "Send enquiry",
    successMessage: "Thank you! Your enquiry has been sent. We will contact you soon.",
    errorMessage:   "Sorry, something went wrong. Please call or WhatsApp us instead."
  },

  map: {
    embedUrl: "https://maps.google.com/maps?q=Gulu%2C%20Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed",
    caption:  "We are located in Gulu, Uganda. Visitors are welcome — please call ahead."
  },

  whatsapp: {
    defaultMessage: "Hello Mmanuel Junior School, I would like to enquire about a place for my child."
  }
};