"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
const LABEL_TITLE = "font-semibold";
const TEXT_FIELD = "text-black px-2";

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일 전송에 실패했습니다. 다시 전송해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full gap-2 my-4 p-4 bg-blue-900 rounded-xl text-white"
      >
        <label htmlFor="from" className={LABEL_TITLE}>
          Your Email
        </label>
        <input
          className={TEXT_FIELD}
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject" className={LABEL_TITLE}>
          Subject
        </label>
        <input
          className={TEXT_FIELD}
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message" className={LABEL_TITLE}>
          Message
        </label>
        <textarea
          className={TEXT_FIELD}
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className="hover:text-yellow-300 hover:font-bold font-semibold">
          Submit
        </button>
      </form>
    </section>
  );
}
