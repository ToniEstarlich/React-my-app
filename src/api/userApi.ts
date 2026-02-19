// src/api/userApi.ts

// 1️⃣ Define and export the User type
export interface User {
  name: string;
  email: string;
}

// 2️⃣ Fetch a user from API
export const fetchUser = async (): Promise<User> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await res.json();

  return {
    name: data.name, 
    email: data.email,
  };
};