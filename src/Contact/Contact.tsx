import { useRef, FC, FormEvent, useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import Button from "../Button/Button";

function validateName(
  eventTarget: EventTarget & HTMLInputElement,
  range: {
  min: number,
  max: number,
}): boolean
{
  let flag: boolean = true;
  const inputValue: string = eventTarget.value.trim();
  const pattern: RegExp = new RegExp("[a-zA-Z]");
  const test: boolean = pattern.test(inputValue);
  const isNotValid: boolean = inputValue.length < range.min || inputValue.length > range.max || !test;

  if (isNotValid) flag = false;
  return (flag);
}

function validateMessage(
  eventTarget: EventTarget & HTMLTextAreaElement,
  range: {
  min: number,
  max: number,
}): boolean
{
  let flag: boolean = true;
  const inputValue: string = eventTarget.value.trim();
  const isNotValid: boolean = inputValue.length < range.min || inputValue.length > range.max;

  if (isNotValid) flag = false;
  return (flag);
}

function validateEmail(eventTarget: EventTarget & (HTMLInputElement)): boolean
{
  let flag: boolean = true;
  const inputValue: string = eventTarget.value.trim();
  const indexIsValid: boolean = inputValue.lastIndexOf("@") < inputValue.lastIndexOf(".");
  const pattern: RegExp = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  const test: boolean = pattern.test(inputValue);
  const isNotValid: boolean = inputValue.length < 7 || inputValue.length > 100 || !test || !indexIsValid;

  if (isNotValid) flag = false;
  return (flag);
}

const Contact: FC = () =>
{
  const formRef = useRef<HTMLFormElement>(null);
  const [ disabledObject, setDisabledObject ] = useState({
    name: " disabled",
    email: " disabled",
    message: " disabled",
  });
  const [ disabled, setDisabled ] = useState(" disabled");

  useEffect(()=> {
    let flag = true;
    Object.values(disabledObject).map((key) =>
    {
      if (key === " disabled")
      {
        flag = false;
        return;
      }
    });
    if (flag) setDisabled("");
  }, [ disabledObject ])

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
          onChange={(event) =>
          {
            validateName(event.target, { min: 1, max: 50 })
            ?
            setDisabledObject({
              name: "",
              email: disabledObject.email,
              message: disabledObject.message,
            })
            :
            setDisabledObject({
              name: " disabled",
              email: disabledObject.email,
              message: disabledObject.message,
            });
          }}
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
          onChange={(event) =>
          {
            validateEmail(event.target)
            ?
            setDisabledObject({
              name: disabledObject.name,
              email: "",
              message: disabledObject.message,
            })
            :
            setDisabledObject({
              name: disabledObject.name,
              email: " disabled",
              message: disabledObject.message,
            });
          }}
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
          onChange={(event) =>
          {
          validateMessage(event.target, { min: 1, max: 400 })
            ? setDisabledObject({
                name: disabledObject.name,
                email: disabledObject.email,
                message: "",
              })
            : setDisabledObject({
                name: disabledObject.name,
                email: disabledObject.email,
                message: " disabled",
              });
          }}
        >
        </textarea>
      </div>
      <Button
        className={ `btn${disabled}` }
      >
        Send
      </Button>
    </form>
  );
}

export default Contact;
