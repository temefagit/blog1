import { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Container: React.FC<Props> = ({ children }) => {
  return <div className='w-full max-w-100% md:max-w-768px lg:max-w-1024px xl:max-w-1441px'>{children}</div>;
};
