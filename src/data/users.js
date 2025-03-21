const users = [
  {
    email: "jabedbd2295@gmail.com",
    password: "password",
  },
  {
    email: "sheikhjabed69@gmail.com",
    password: "password",
  },
  {
    email: "sksamir.445414@gmail.com",
    password: "password",
  },
  {
    email: "abc@gmail.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
