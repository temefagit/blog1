import { PropsWithChildren, ReactNode } from "react";
import style from "./container.module.css";

interface Props {
  children: ReactNode;
}
export const Container: React.FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
