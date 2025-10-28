export default function Events() {
  const eventList = [
    { title: "DJ Night Party", date: "Nov 19", img: "/event1.jpg" },
    { title: "The Mission", date: "Nov 19", img: "/event2.jpg" },
    { title: "Planet Ibiza", date: "Nov 19", img: "/event3.jpg" },
  ];

  return (
    <section className="py-5 bg-dark text-white text-center">
      <div className="container">
        <h2 className="fw-light mb-5 text-uppercase" style={{ letterSpacing: "2px" }}>
          Upcoming Events
        </h2>
        <div className="row g-4 justify-content-center">
          {eventList.map((event, i) => (
            <div className="col-md-4 col-sm-10" key={i}>
              <div className="card border-0 position-relative overflow-hidden shadow-sm bg-transparent">
                <div className="image-container position-relative">
                  <img
                    src="https://stories.freepiklabs.com/api/vectors/music-festival/bro/render?color=&background=complete"
                    className="card-img-top event-img"
                    alt={event.title}
                  />
                  <div className="image-overlay d-flex flex-column justify-content-end text-start p-3">
                    <span className="badge bg-danger px-3 py-2 fs-6 align-self-start">
                      {event.date}
                    </span>
                    <h5 className="fw-semibold mt-3 mb-1 text-white">
                      {event.title}
                    </h5>
                    <p className="small text-light mb-0">
                      Don’t miss the night vibes 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
