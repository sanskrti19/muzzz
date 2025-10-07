export default function Events() {
  const eventList = [
    { title: "DJ Night Party", date: "Nov 19", img: "/event1.jpg" },
    { title: "The Mission", date: "Nov 19", img: "/event2.jpg" },
    { title: "Planet Ibiza", date: "Nov 19", img: "/event3.jpg" },
  ];

  return (
    <section className="py-5 bg-dark text-white text-center">
      <h2 className="mb-4">Event List</h2>
      <div className="row g-4 justify-content-center">
        {eventList.map((event, i) => (
          <div className="col-md-4" key={i}>
            <div className="card bg-dark text-white">
              <img src={event.img} className="card-img-top" alt={event.title} />
              <div className="card-body">
                <span className="badge bg-danger">{event.date}</span>
                <h5 className="card-title mt-2">{event.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
