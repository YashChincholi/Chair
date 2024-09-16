import React, { createContext, useContext, useState } from "react";

export const chairColors = [
  { color: "#2E4053", name: "Charcoal" },
  { color: "#2874A6", name: "Sky Blue" },
  { color: "#A93226", name: "Brick Red" },
  { color: "#1ABC9C", name: "Turquoise" },
  { color: "#F39C12", name: "Amber" },
  { color: "#D35400", name: "Pumpkin" },
  { color: "#7D3C98", name: "Amethyst" },
  { color: "#196F3D", name: "Forest Green" },
  { color: "#F4D03F", name: "Goldenrod" },
];

export const cushionColors = [
  { color: "#FF5733", name: "Coral" },
  { color: "#C70039", name: "Crimson" },
  { color: "#FFC300", name: "Sunflower" },
  { color: "#DAF7A6", name: "Mint" },
  { color: "#900C3F", name: "Burgundy" },
  { color: "#581845", name: "Plum" },
  { color: "#FF6F61", name: "Salmon" },
  { color: "#6A0572", name: "Purple" },
  { color: "#28B463", name: "Emerald" },
  { color: "#1F618D", name: "Navy" },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
