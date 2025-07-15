import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <section className="flex justify-center max-w-[1524px] w-[90%] mx-auto mb-[40px] mt-[40px]">
      <CircularProgress size={40} />
    </section>
  );
};

export default Loader;
