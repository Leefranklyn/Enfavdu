import React from "react";

const Message = ({ contact, setContact, handleMessage }) => {
  return (
    <div>
      <p className="text-center">
        Some contact information on how to reach out
      </p>
      <div className="flex flex-col gap-3 my-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="w-[90%]  p-2.5 block mx-auto text-sm border border-inputGray outline-none rounded-sm"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="w-[90%]  p-2.5 block mx-auto text-sm border border-inputGray outline-none rounded-sm"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <textarea
          id="message"
          rows="5"
          class="block p-2.5 w-[90%] mx-auto text-sm  rounded-sm border border-inputGray outline-none"
          placeholder="Message"
          value={contact.message}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleMessage}
          className="bg-blue text-white px-10 py-3 md:w-[300px] rounded-md"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Message;
