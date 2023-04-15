import React from "react";
import ConstString from "../../../../config/cont-strings";
import { FiMenu } from "react-icons/fi";
import Colors from "../../../../config/colors";
import "./Header.css";

const Header = () => {
  return (
    <div className="header pl-2 pr-2 pt-1 pb-1">
      <div className="title">
        <FiMenu color={Colors.primary} />
        <h2 className="title ml-1">{ConstString.APP_NAME}</h2>
      </div>
      <div className="actions">
        <button className="pb-1 pt-1 pl-2 pr-2 light bg-primary outline border-primary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
