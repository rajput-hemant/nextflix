import { getPopularVideos, getVideos } from "@/lib/youtube-api";
import Banner from "components/banner/banner";
import Layout from "components/layout/layout";
import SectionCards from "components/card/section-cards";

export const getServerSideProps = async () => {
  const disney = await getVideos("disney trailer");
  const productivity = await getVideos("productivity");
  const travel = await getVideos("travel");
  const popular = await getPopularVideos();

  return { props: { disney, productivity, travel, popular } };
};

interface HomeProps {
  disney: { id: string; title: string; imgUrl: string }[];
  productivity: { id: string; title: string; imgUrl: string }[];
  travel: { id: string; title: string; imgUrl: string }[];
  popular: { id: string; title: string; imgUrl: string }[];
}

const Home = ({ disney, productivity, travel, popular }: HomeProps) => {
  return (
    <Layout>
      <Banner
        title={"Clifford"}
        subtitle={"A dog"}
        imgUrl={"/images/clifford.webp"}
      />
      <div className="mt-8">
        <SectionCards title="Disney" data={disney} size="large" />
        <SectionCards title="Productivity" data={productivity} size="small" />
        <SectionCards title="Travel" data={travel} size="medium" />
        <SectionCards title="Popular" data={popular} size="small" />
      </div>
    </Layout>
  );
};

export default Home;
