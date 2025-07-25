import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const { search } = useLocation();

  const queryParam = new URLSearchParams(search);

  const getParam = (key: string) => queryParam.get(key);

  return { getParam };
};
