export default function Home() {
  return (
    <section 
      className="text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url('/path-to-hero-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh'
      }}
    >
      <h1 className="display-4 fw-bold">The Soul of Music</h1>
      <p className="lead">Share, create, and enjoy music with friends anywhere.</p>
      <button className="btn btn-outline-light btn-lg mt-3">Upcoming Event</button>
    </section>
  );
}
