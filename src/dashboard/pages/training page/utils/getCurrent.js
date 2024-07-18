const getCurrent = (obj) => {
  return obj.find((item) => item?.is_completed === false);
};

export default getCurrent;
