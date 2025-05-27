const Contact = () => {
  return (
    <div className="m-2 p-2">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="name" className="border border-black p-2 m-3"></input>
        <input type="text" placeholder="message" className="border border-black p-2 m-3"></input>
        <button className="bg-gray-300 p-1 m-1 border rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
