import Card from "./card";

interface SectionCardsProps {
  title: string;
  data: { imgUrl: string }[];
  size: "small" | "medium" | "large";
}

const SectionCards = ({ title, data = [], size }: SectionCardsProps) => {
  return (
    // container
    <section className="px-4">
      {/* title */}
      <h2 className="font-bold text-4xl">{title}</h2>
      {/* card wrapper */}
      <div className="flex pt-7 pb-6 mt-6 mr-3 overflow-x-scroll overflow-y-hidden">
        {data.map((item, i) => {
          return <Card key={i} id={i} imgUrl={item.imgUrl} size={size} />;
        })}
      </div>
    </section>
  );
};

export default SectionCards;
