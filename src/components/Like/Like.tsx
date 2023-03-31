import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart onClick={toggle} color="#ff6b81" size={20} />;
};

export default Like;
