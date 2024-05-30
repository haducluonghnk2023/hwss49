import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div>
      <h1>Home page</h1>

      <p>email:{user.email}</p>
    </div>
  );
}
