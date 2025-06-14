import Nav from "../NavBar/Nav";

const Skills = () => {
  return (
    <>
      <Nav />
      <div className="ml-40 mt-20">
        <h1 className="text-center text-4xl font-bold pb-20"> Using Now:</h1>
        <div className="flex flex-wrap gap-20 ">
          <div className="bg-white-200 p-10 shadow-lg rounded-lg text-center h-96 w-96">
            <img
              src="https://e7.pngegg.com/pngimages/273/754/png-clipart-html-logo-world-wide-web-consortium-coding-angle-text-thumbnail.png"
              alt="HTML Icon"
              className="mx-auto h-60"
            />
            <h3 className="text-4xl font-semibold text-center pt-4">HTML</h3>
          </div>

          <div className="bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyLrpuKlKe8VdORfiCe6t0CbdIJoZ_4wynQ&s"
              alt="CSS Logo"
              className="h-64 mx-auto"
            />
            <h3 className="text-center text-4xl font-semibold">CSS</h3>
          </div>
          <div className=" bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              alt="JS Logo"
              className="h-64 mx-auto "
            />
            <h3 className="text-center text-4xl font-semibold ">
              JavaScript
            </h3>
          </div>
          <div className="bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96 ">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React Logo"
              className="h-64 mx-auto"
            />
            <h3 className="text-center text-4xl font-semibold ">React</h3>
          </div>
          <div className="bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96">
            <img
              src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg"
              alt="TalwindCSS Logo"
              className="h-64 mx-auto"
            />
            <h3 className="text-center font-semibold text-4xl">Talwind CSS</h3>
          </div>
        </div>
        <h1 className="text-center text-4xl font-bold pb-20 pt-40">
          Learning Now:
        </h1>
        <div className="flex flex-wrap gap-32">
          <div className="bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzemPW2zVigKv44mjIDfGwrf_Rgzcyu07m_A&s"
              alt=""
              className="h-64 mx-auto"
            />
            <h3 className="text-4xl font-semibold text-center">.NET</h3>
          </div>
          <div className="bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96">
            <img src="https://img.icons8.com/color/512/django.png" alt="" className="h-64 mx-auto" />
            <h3 className="text-center font-semibold  text-4xl">Django</h3>
          </div>
          <div className="bg-white-200 p-10 shadow-lg rounded-lg h-96 w-96">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx25AX0zo1Hxz_tPZ2Oi3GpX9-TfcClBSHLg&s"
              alt=""
              className="h-64 mx-auto"
            />
            <h3 className="text-center font-semibold text-4xl ">MySQL</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
