import {
  ADD_MESSAGE,
  GET_MESSAGES,
  DELETE_MESSAGE_SUCCESS,
} from "../Constants/Message";

const initialState = {
  messages: [],
  message: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
     case GET_MESSAGES:
      return { ...state, messages: action.payload, loading: false };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
        loading: false,
      };

    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
        loading: false,
      };

    default:
      return state;
  }
};
