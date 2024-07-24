import React from 'react';
import { Button } from 'react-native';
import Mailer from 'react-native-mail';

const sendEmail = () => {
  Mailer.mail({
    subject: 'Need help',
    recipients: ['support@example.com'],
    ccRecipients: ['cc@example.com'],
    bccRecipients: ['bcc@example.com'],
    body: '<b>Bolded Body Content</b>',
    isHTML: true,
    attachment: {
      path: '/path/to/file.pdf',  // The absolute path of the file from which you want to send an attachment
      type: 'pdf',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
      name: 'file.pdf',   // Optional: Custom filename for attachment
    }
  }, (error, event) => {
    if (error) {
      console.log('Email Error:', error);
    }
    console.log('Email Event:', event);
  });
};

// Example usage in a component
const MyComponent = () => {
  return (
    <Button
      title="Send Email"
      onPress={sendEmail}
    />
  );
};

export default MyComponent;

