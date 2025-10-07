export default function Music() {
  const musicList = [
    { title: "Hip Hop", img: "/hiphop.jpg" },
    { title: "Rock", img: "/rock.jpg" },
    { title: "Classic", img: "/classic.jpg" },
  ];

  return (
    <section className="py-5 text-center bg-black text-white">
      <h2 className="mb-4">Music</h2>
      <div className="row g-4 justify-content-center">
        {musicList.map((music, i) => (
          <div className="col-md-3" key={i}>
            <div className="card bg-dark text-white">
              <img src={music.img} className="card-img-top rounded-circle p-3" alt={music.title} />
              <div className="card-body">
                <h5>{music.title}</h5>
                <button className="btn btn-outline-danger mt-2">Listen</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
