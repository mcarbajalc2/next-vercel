import { FC } from "react";
import { ComponentProperties } from "../../interfaces/generic/ComponentProperties";

export const DarkLayout: FC <ComponentProperties> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
