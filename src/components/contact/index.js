import { PersonalEmail } from "@/utils/config";

const Contact = () => (
  <div id="contact" className="flex justify-center items-center p-4 md:p-24">
    <div className="flex flex-col justify-center items-center">
      <div className="text-xl">
        <span className="text-primary">04.</span>
        <span className="text-secondary font-semibold ml-2">
          What&apos;s Next?
        </span>
      </div>

      <div className="w-11/12 md:w-3/4 text-center">
        <p className="text-4xl text-[48px] font-semibold my-8">Get In Touch</p>

        <p>
          I&apos;m actively looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, feel free to
          get in touch and I shall get back in no time!
        </p>
      </div>

      <a className="big-button mt-8" href={`mailto:${PersonalEmail}`}>
        Say Hi
      </a>
    </div>
  </div>
);

export default Contact;
