export default function Contact() {
  return (
    <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
      <h2 className="text-primary mb-3">Contact Me</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send</button>
      </form>
    </div>
  );
}
