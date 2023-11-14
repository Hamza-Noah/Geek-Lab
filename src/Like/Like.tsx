import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setlike] = useState(false);
  return (
    <button
      onClick={(_) => {
        setlike(prevLike => !prevLike);
        onClick();
      }}
      className="btn"
    >
      {!like ? <FcLikePlaceholder /> : <FcLike />}
    </button>
  );
};

export default Like;
