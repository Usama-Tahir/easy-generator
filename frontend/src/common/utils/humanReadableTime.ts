import ms from "ms";

const convertAnyValidFormatToDate = (input: string) => {
  const milliseconds: number | undefined = ms(input);
  if (milliseconds == undefined) return null;
  return new Date(Date.now() + milliseconds);
};

export { convertAnyValidFormatToDate };
