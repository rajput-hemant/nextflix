import Card, { CardProps } from "./card";

interface SectionCardsProps {
  title: string;
  cards: CardProps[];
}

const SectionCards = ({ title, cards }: SectionCardsProps) => {
  return (
    // container
    <section className="px-4">
      {/* title */}
      <h2 className="font-bold text-4xl">{title}</h2>
      {/* card wrapper */}
      <div className="flex pt-7 pb-6 mt-6 mr-3 overflow-x-scroll overflow-y-hidden">
        {cards.map((card, i) => {
          return <Card key={i} id={i} imgUrl={card.imgUrl} size="large" />;
        })}
      </div>
    </section>
  );
};

export default SectionCards;
