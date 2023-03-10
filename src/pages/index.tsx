import Banner from "components/banner/banner";
import Layout from "components/layout/layout";
import SectionCards from "components/card/section-cards";
import { CardProps } from "@/components/card/card";

const Home = () => {
  const disneyVideos: CardProps[] = [
    { id: 0, imgUrl: "/images/clifford.webp", size: "large" },
  ];

  return (
    <Layout>
      <Banner
        title={"Clifford"}
        subtitle={"A dog"}
        imgUrl={"/images/clifford.webp"}
      />
      <div className="mt-8">
        <SectionCards title="Disney" cards={disneyVideos} />
      </div>
    </Layout>
  );
};

export default Home;
