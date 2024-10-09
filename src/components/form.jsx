require('dotenv').config()

import { useForm, ValidationError } from "@formspree/react";
export default function Form() {
  const [state, handleSubmit] = useForm(process.env.API);
  if (state.succeeded) {
    return (
      <p className="text-3xl font-bold font-body text-accent">
        Thanks for Sending Questions!
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid border-2 border-black p-2 rounded-md md:w-1/2"
    >
      <label htmlFor="email" className="text-xl p-2">
        Email Address
      </label>
      <input
        className="p-2"
        id="email"
        type="email"
        name="email"
        required
        placeholder="xyz@gmail.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="text-xl">
        Ask Question
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Enter Query"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-accent text-white p-2 my-3 rounded-lg hover:bg-sec"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
