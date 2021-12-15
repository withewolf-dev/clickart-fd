import { useState } from "react";

interface Props {
  text: string;
}

const CtgButton = ({ text }: Props) => {
  const [clicked, setclicked] = useState(false);
  return (
    <button className="ta(l) h(40px) w(200px) mt(1rem) cursor(pointer)">
      {text}
    </button>
  );
};

export default CtgButton;
