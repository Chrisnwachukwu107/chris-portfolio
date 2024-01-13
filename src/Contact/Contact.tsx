import { useRef, FC, FormEvent } from "react";
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import Button from "../Button/Button";

const Contact: FC = () =>
{
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();

    // EmailJS service configuration
    const serviceID: string = 'contact_form';
    const templateID: string = 'contact_form';
    const userID: string = 'V9WIoJZppCMk4K9r0';

    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('User ID:', userID);

    // Send the email using EmailJS
    if (formRef.current)
    {
      emailjs.sendForm(serviceID, templateID, formRef.current, userID)
        .then((response) =>
        {
          console.log('Email sent successfully:', response);
        })
        .catch((error) =>
        {
          console.error('Error sending email:', error);
        });
    }
    else
    {
      console.log("Email not sent!!!");
    }
  }

  return (
    <form
      className="mx-auto text-center"
      ref={ formRef }
      onSubmit={ sendEmail }
    >
      <div
        className="mx-auto text-center mb-3"
      >
        <input
          type="text"
          className={`form-control text-center mx-auto ${styles.input}`}
          placeholder="NAME"
          name="user_name"
        />
      </div>
      <div
        className="mx-auto text-center mb-3"
      >
        <input
          type="email"
          className={`form-control text-center mx-auto ${styles.input}`}
          placeholder="EMAIL"
          name="user_email"
        />
      </div>
      <div
        className="mx-auto text-center mb-3">
        <textarea
        
          className={`form-control text-center mx-auto ${styles.textarea}`}
          rows={4}
          cols={60}
          placeholder="MESSAGE"
          name="user_message"
        >
        </textarea>
      </div>
      <Button
        className="btn"
      >
        Send
      </Button>
    </form>
  );
}

export default Contact;
