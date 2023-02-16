export type Todo = {
  id: number;
  value: string;
  edit: boolean;
  from?: string;
  to?: string;
};

export const genFakeData = (val: string): Todo => {
  return {
    id: Date.now(),
    value: val,
    edit: false,
  };
};
