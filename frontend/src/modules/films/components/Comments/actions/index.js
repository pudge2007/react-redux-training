import { createAction } from "redux-actions";

export const getCommentsRequest = createAction("GET_COMMENTS_REQUEST");
export const getCommentsSuccess = createAction("GET_COMMENTS_SUCCESS");

export const addCommentRequest = createAction("ADD_COMMENT_REQUEST");
export const addCommentSuccess = createAction("ADD_COMMENT_SUCCESS");
