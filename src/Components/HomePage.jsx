import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="text-center mt-5 ">
        <h1>Hi this my small projects to pracrice React.js</h1>
        <br />
        <div>
          <h1>Choose a Project</h1>
          <div className="homePageBtns">
            <button class="btn btn-primary">
              <Link to="/project1" className="myLink">
                Get An Advice
              </Link>
            </button>
            <button class="btn btn-warning">
              <Link to="/project2" className="myLink">
                Pizza Restaurant Menu
              </Link>
            </button>
            <button type="button" class="btn btn-danger">
              <Link to="/project3" className="myLink">
                Card Profile
              </Link>
            </button>
            <button class="btn" style={{ backgroundColor: "#7950f2" }}>
              <Link to="/project4" className="myLink">
                Steps With State
              </Link>
            </button>
            <button type="button" class="btn btn-danger">
              <Link to="/project5" className="myLink">
                Date Count
              </Link>
            </button>
            <button type="button" class="btn btn-warning">
              <Link to="/project6" className="myLink">
                Flash Cards
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
