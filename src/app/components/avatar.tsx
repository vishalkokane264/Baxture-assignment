import React, { useEffect } from "react";
import getColors from "../services/getColor";
interface IAvatar {
  name: string;
  color: string;
}
export const Avatar = ({ name, color }: IAvatar) => {
  return (
    <div className="user">
      <div className="user-avatar" style={{ backgroundColor: color }}>
        {`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
      </div>
    </div>
  );
};

export default Avatar;
