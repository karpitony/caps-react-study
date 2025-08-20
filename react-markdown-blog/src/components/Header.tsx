import { Link, useNavigate } from "react-router"

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h2>리액트 블로그</h2>
      <Link to="/">홈</Link>
      <button onClick={() => navigate("/posts")}>
        글 목록
      </button>
    </header>
  )
}