import React from "react";
import cardLayoutStyles from "./information-layout.module.css";
//De esta manera usamos modulos de css. La ventaja es que solo vive donde se lo usa
function CardLayout({ children }: { children: React.ReactNode }) {
  return <div className={cardLayoutStyles.informationLayout}>{children}</div>;
}

export default CardLayout;
