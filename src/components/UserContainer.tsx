
import { useEffect, useState } from "react";
import { fetchUser, User } from "../api/userApi";
import UserCard from "./UserCard";

export default function UserContainer() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return user ? <UserCard user={user} /> : <p>Cargando usuario...</p>;
}
