import ContactForm from "@/component/ContactForm";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoBlogger } from "react-icons/bi";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/youngseoKim-kr" },
  { icon: <BiLogoBlogger />, url: "" },
];

export default function Contact() {
  return (
    <section className="flex flex-col items-center m-8">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p className="font-bold text-blue-900">ysk5754@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold m-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
