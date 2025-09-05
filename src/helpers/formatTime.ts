export const formatTime = (time: string): string => {
  const date = new Date(time);
  const dateIsoString = date.toISOString();
  const returnedDate = dateIsoString.split("T")[0].split("-").join("/");

  return returnedDate;
};
