import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUsers(id)));
};

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());

//   _.chain(getState().posts)
//     .map("userId")
//     .uniq()
//     .forEach((id) => dispatch(fetchPosts(id)))
//     .value();
// };

export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: data });
};

export const fetchUsers = (id) => async (dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: data });
};

// export const fetchUsers = (id) => dispatch => _fetchUsers(id, dispatch);
//   const _fetchUsers = _.memoize(async (id, dispatch) => {
//     const { data } = await jsonPlaceholder.get(`/users/${id}`);
//    dispatch({ type: "FETCH_USER", payload: data });
// });
