import { useSearchParams } from "react-router";import { Link } from "react-router";

const POST_DATA = [
  { href: '250820', title: '개강 2주전'},
  { href: '250819', title: '집가고 싶다'}
]

export default function PostPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get('author');

  const handleClick = () => {
    setSearchParams({ author: 'newuser' });
  };

  return (
    <div>
      <p>현재 작성자: {author || '모두'}</p>
      <button onClick={handleClick}>작성자 변경</button> 
      <div>
        {POST_DATA.map((post, idx) => (
          <Link key={idx} to={post.href}>{post.title}</Link>
        ))}
      </div>
    </div>
  );
}