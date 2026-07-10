import Orders from "./Orders";

function Home({ order }) {
  return (
    <div>
      <h2>Home</h2>
      <Orders order={order} />
    </div>
  );
}

export default Home;
