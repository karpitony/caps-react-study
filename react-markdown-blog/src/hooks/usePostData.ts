import { useState, useEffect } from "react";
import api from "../apis/instance";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePostData = (postId: string | undefined) => {
  const [data, setData] = useState<PostData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<PostData>(`/posts/${postId}`);
        setData(response.data);
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [postId]);

  return { data, loading, error };
};