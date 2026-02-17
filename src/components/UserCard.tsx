
import { User } from "../api/userApi";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div className="card">
      <h2>User Info</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

