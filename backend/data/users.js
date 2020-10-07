import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@proshop.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Rahma User",
    email: "rahma@proshop.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "mubara User",
    email: "mubarak@proshop.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
