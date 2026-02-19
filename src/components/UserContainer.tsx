// src/components/UserContainer.tsx
import { useEffect, useState } from "react";
import { fetchUser, User } from "../api/userApi";
import UserCard from "./UserCard";

export default function UserContainer() {
  // State for user data, loading, and error
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUser()
      .then(setUser)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Render loading, error, or user
  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;
  if (user) return <UserCard user={user} />;

  return null; // fallback
}