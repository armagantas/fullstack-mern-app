import Header from "../components/header/Header";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">My Statistics</h1>
        <div>
          <h2 className="text-lg">
            Welcome{" "}
            <span className="text-green-700 font-bold text-xl">Admin</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
