import { validate } from "./validation";

const SET_FORM = "form/setForm";
const SET_ERROR = "form/setError";
const CLEAR_FORM = "form/clearForm";
const SET_LOADING = "form/setLoading";

const initState = {
  data: {
    firstname: "",
    lastname: "",
    email: "",
    date: "2020-09-14",
  },
  error: "",
  isLoading: false,
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  const cases = {
    [SET_FORM]: () => ({ ...state, data: { ...state.data, ...payload } }),

    [SET_ERROR]: () => ({ ...state, error: payload }),

    [SET_LOADING]: () => ({ ...state, isLoading: payload }),

    [CLEAR_FORM]: () => ({
      ...state,
      error: "",
      data: { firstname: "", lastname: "", email: "" },
    }),
  };

  return cases[type] ? cases[type]() : state;
}

//Actions
export const setForm = (data) => ({
  type: SET_FORM,
  payload: data,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export function submitForm() {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const { form } = getState();
      if (!onValidate(form.data)) {
        dispatch(setError("Please fill in the form."));
        dispatch(setLoading(false));
        return;
      }
      console.log("success, make api call");
      dispatch(clearForm());
    } catch (error) {
      dispatch(setError("Error while submiting form."));
    }
    dispatch(setLoading(false));
  };
}

//helper functions
function onValidate(data) {
  const result = validate(data);

  const errorFields = result.error
    ? result.error.details.map((detail) => detail.context.key)
    : [];

  return errorFields.length === 0;
}
