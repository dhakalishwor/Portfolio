import Nav from "../NavBar/Nav";
import myImg from "./../Images/Ishwor.jpg";

const Landing = () => {
  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="bg-gray-600 flex flex-col justify-center items-start px-64">
          <h3>Hi I am,</h3>
          <h1>Ishwor Dhakal</h1>
          <h2>Frontend Developer/ UI Designer</h2>

          <div className="Social">
            <a href="https://www.facebook.com/ishwor.dhakal.7140">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                alt="Facebook"
                className="h-64 "
              />
            </a>
          </div>
        </div>
        <div className="bg-black w-full md:w-1/2 flex flex-col justify-center items-center px-10 py-16">
          <img src={myImg} alt="" className="h-auto w-64 rounded-full mb-4" />
        </div>
      </div>
    </>
  );
};
export default Landing;
