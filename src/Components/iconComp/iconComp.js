import React from "react";
//import all icons
import * as icons from 'react-icons/si';

export const Icons = props => {
  const { iconName, style } = props;
  /*create icon element using React.createElement and pass in all icons variable
  and obtain wanted icon with iconName. 
  */
  const icon = React.createElement(icons[iconName]);
  return (
    <span style={{color: style}}>{icon}</span>
  );
};