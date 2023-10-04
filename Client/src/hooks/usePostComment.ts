import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const usePostComment = (userID: string, answerID: number) => {
  const queryClient = useQueryClient();

  const postComment = useMutation(
    (data: Data) => postData(userID, answerID, data),

    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          `Comment-userID:${userID}-answerID:${answerID}`,
        );
      },
    },
  );

  return postComment;
};

export default usePostComment;

// useMutation 콜백 함수
const postData = async (userID: string, answerID: number, data: Data) => {
  const response = await axios.post(
    `http://3.34.199.73:8080/${userID}/${answerID}/comments`,
    data,
    options,
  );
  return response;
};

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

interface Data {
  content: string;
}
