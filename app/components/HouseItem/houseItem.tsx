import ColorBar from "../ColorBar/colorBar";

const HouseItem = ({
  card,
}: {
  card: { houseColours: string; name: string; animal: string; founder: string };
}) => {
  const colorStr = card.houseColours;
  const colorArr = colorStr.toLowerCase().split(" and ");

  return (
    <div className="mx-auto border border-neutral-300 rounded-lg my-4 w-[50%] p-2 flex flex-col justify-center shadow-md">
      <div className="flex flex-row justify-between mx-1 my-2">
        <p className="font-bold text-2xl">{card.name}</p>
        <p>{card.animal}</p>
      </div>

      <ColorBar leftColor={colorArr[0]} rightColor={colorArr[1]} />

      <p className="mx-1 my-2">
        Founder: <span className="font-bold">{card.founder}</span>
      </p>
    </div>
  );
};

export default HouseItem;
