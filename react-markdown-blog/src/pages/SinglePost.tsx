import { useParams } from 'react-router';
import { usePostData } from "../hooks/usePostData";
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';

export default function SinglePostPage( ) {
  const { postId } = useParams();
  const { data, loading, error} = usePostData(postId);

  if (loading) 
    return <div>loading...</div>

  if (error)
    return <div>error</div>
  return (
    <div>
      <p>포스트: {postId}</p>
      <div className="markdown-body">
        {/* ReactMarkdown 컴포넌트로 마크다운 텍스트 렌더링 */}
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    </div>
  )

}