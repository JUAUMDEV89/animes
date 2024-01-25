import { ReactNode } from "react";

import './styles.css';

type InformationProps = {
  backgroundColor: string;
  icon: ReactNode;
  text: string;
}

export function Information ({ backgroundColor, icon, text }: InformationProps) {
  return (
    <div className="information">
      <div className="circle" style={{ backgroundColor: backgroundColor }}>
        { icon }
      </div>
      <p>{ text }</p>
    </div>
  )
}
