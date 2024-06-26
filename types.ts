export type Lover = {
  _id: string;
  name: string;
  age: number;
  sex: string;
  description: string;
  hobbies: string[];
  photo: string;
  comments: Array<{ user: string; message: string }>;
};

export type BadLover = {
  _id: string;
  name: string;
  age: number | string;
  sex: string;
  description: string;
  hobbies: string[] | string;
  photo: string;
  comments: Array<{ user: string; message: string }> | string;
};