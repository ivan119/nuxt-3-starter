export const useUtils = () => {
  const sayHello = (value: string) => console.log(value as string);

  return {
    sayHello,
  };
};
