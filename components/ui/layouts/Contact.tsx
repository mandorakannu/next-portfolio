"use client";
import { useState, useRef, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import Loader from "@ui/Loader";
import { DialogModel } from "@ui/chakraUi/DialogModel";

export default function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const email = emailRef.current?.value;
  const subject = subjectRef.current?.value;
  const message = messageRef.current?.value;

  const [loading, setLoading] = useState<string | JSX.Element>("Send Message");
  const [sendMsg, setSendMsg] = useState({
    title: "",
    description: "",
    value: false,
  });
  const setTimer = () => {
    setTimeout(() => {
      setSendMsg({ title: "", description: "", value: false });
    }, 3000);
  };

  const setFieldEmpty = () => {
    emailRef.current!.value = "";
    subjectRef.current!.value = "";
    messageRef.current!.value = "";
  };

  const onSubmitHandler = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(<Loader borderColor="white" barColor="white" />);
    try {
      if (!email || !subject || !message) {
        setLoading("SEND MESSAGE"),
          setSendMsg({
            title: "Please fill all the fields",
            description:
              "You have not filled all the fields. Please try again.",
            value: true,
          });
        setTimer();
        return;
      }
      const res = await axios.post("/api/contact", { email, subject, message });
      if (res.status === 200) {
        setLoading("SEND MESSAGE");
        setFieldEmpty();
        setSendMsg({
          title: "Message Sent",
          description:
            "Your message has been sent successfully. We will contact you soon.",
          value: true,
        });
      } else {
        setFieldEmpty();
        setLoading("SEND MESSAGE");
        setSendMsg({
          title: "Message Not Sent",
          description:
            "Your message has not been sent successfully. Please try again.",
          value: true,
        });
      }
    } catch (err: any | unknown) {
      setFieldEmpty();
      setLoading("SEND MESSAGE");
      setSendMsg({
        title: "Internal Server Error",
        description:
          "Your message has not been sent successfully. Please try again.",
        value: true,
      });
    }
  };
  return (
    <>
      {sendMsg.value && (
        <DialogModel
          title={sendMsg.title}
          description={sendMsg.description}
          value={sendMsg.value}
        />
      )}
      <div className="bg-teal-500 text-white" id="Contact">
        <section className="py-20">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-center">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-normal text-center sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form
              method="POST"
              onSubmit={onSubmitHandler}
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black"
                  placeholder="name@example.com"
                  name="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm bg-white rounded-lg border border-gray-300 shadow-sm text-black"
                  placeholder="Let us know how we can help you"
                  name="subject"
                  ref={subjectRef}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm bg-white rounded-lg shadow-sm border border-gray-300 text-black"
                  placeholder="Leave a comment..."
                  name="message"
                  ref={messageRef}
                ></textarea>
              </div>
              <button
                type="submit"
                role="button"
                className="flex flex-row justify-center items-center py-3 px-10 w-52 h-14 overflow-hidden uppercase text-white rounded hover:shadow-2xl transition-all delay-100 hover:border-teal-500 border-2 text-center"
              >
                {loading}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
