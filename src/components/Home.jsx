export default function Home() {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary">Welcome to My Portfolio</h1>
        <p className="lead">Hi! I’m Sanskrti Singh. Check out my projects, skills, and contact info.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Project 1</h5>
              <p className="card-text">A cool project I built with React and Bootstrap.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Project 2</h5>
              <p className="card-text">Another project showing my coding and design skills.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Project 3</h5>
              <p className="card-text">Yet another fun project that I am proud of.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
