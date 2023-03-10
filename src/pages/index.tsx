import Banner from "components/banner";
import Layout from "components/layout/layout";

const Home = () => {
  return (
    <Layout>
      <Banner
        title={"Clifford"}
        subtitle={"A dog"}
        imgUrl={"/images/clifford.webp"}
      />
    </Layout>
  );
};

export default Home;
