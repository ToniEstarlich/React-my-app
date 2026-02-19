
import { User } from "../api/userApi";
import '../assets/css/card.css'
// Define the props for UserCard
interface UserCardProps {
  user: User;
}

// Display a single user
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
