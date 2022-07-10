const Home = () => {
  return (
    <div className="py-20 px-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p>Hi, my name is</p>
          <h1 className="text-4xl font-bold text-amber-500">Nate Hernandez</h1>
          <h3 className="text-4xl font-bold">I build things for the Web.</h3>
        </div>
        <button className="w-full py-2 bg-amber-500 font-bold text-white rounded-lg">
          See my work
        </button>
      </div>
    </div>
  );
};

export default Home;
