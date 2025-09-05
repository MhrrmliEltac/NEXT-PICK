import { ReactNode } from "react";
import ProfileHeading from "../general/ProfileHeading";

const Wrapper = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="w-full max-w-[808px] mx-auto mb-20">
      <ProfileHeading title={title} />

      {children}
    </div>
  );
};

export default Wrapper;
