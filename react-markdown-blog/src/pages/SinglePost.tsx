import { useParams } from 'react-router';
import { usePostData } from "../hooks/usePostData";

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
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  )

}