import validateColor from "validate-color";

function isColor(strColor: string) {
  return validateColor(strColor);
}
const ColorBar = ({
  leftColor,
  rightColor,
}: {
  leftColor: string;
  rightColor: string;
}) => {
  if (!isColor(leftColor) || !isColor(rightColor)) {
    leftColor = "white";
    rightColor = "black";
  }

  return (
    <div
      className="rounded-lg min-h-[30px] bg-gradient-to-r from-white to-black"
      style={{
        backgroundImage: `linear-gradient(to right,${leftColor}, ${rightColor})`,
      }}
    ></div>
  );
};

export default ColorBar;
