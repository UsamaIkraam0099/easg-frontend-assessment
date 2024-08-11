import { JSX } from "react";

type AuthLayoutProps = {
  children: JSX.Element;
};

const index = ({ children }: AuthLayoutProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center auth-layout">
      {children}
    </div>
  );
};

export default index;
