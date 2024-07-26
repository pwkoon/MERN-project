const Spinner = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen">
        <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600"></div>
      </div> */}
      <div className="bg-black h-screen w-screen flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
        </div>
      </div>
    </>
    // <div className="bg-black flex justify-center items-center h-screen w-screen">
    //   <h1 className="text-3xl font-bold header-title">Code Cave</h1>
    // </div>
  );
};

export default Spinner;
