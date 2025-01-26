const Contact: React.FC = () => {
  return (
    <div className="contact bg-dark text-light min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <form className="flex flex-col gap-4 max-w-md w-full">
        <label className="flex flex-col gap-1">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            className="p-2 rounded bg-gray-800 border border-gray-700 focus:ring focus:ring-accent focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            className="p-2 rounded bg-gray-800 border border-gray-700 focus:ring focus:ring-accent focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Message:</span>
          <textarea
            name="message"
            className="p-2 rounded bg-gray-800 border border-gray-700 focus:ring focus:ring-accent focus:outline-none"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-accent text-dark font-semibold py-2 rounded hover:bg-accent-dark transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
