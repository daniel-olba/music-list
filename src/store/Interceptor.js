import * as requests from "./requests";
import { getToken } from "../Cookies";
import _ from "lodash";

function Interceptor(
  request = {
    action: null,
    data: null,
    parameters: null,
    identifiers: null
  },
  successCallback = null,
  errorCallback = null,
  completeCallback = null
) {
  let action = _.cloneDeep(requests[request.action]);
  //add id's to requests
  if (request.identifiers) {
    let newUrl = action.payload.request.url.split(":id");
    action.payload.request.url = action.payload.request.url.split(":id");

    action.payload.request.url.map((value, key) => {
      if (action.payload.request.url.length > key + 1) {
        newUrl.splice(key + 1, 0, request.identifiers[key]);
      }
    });

    action.payload.request.url = newUrl.join("");
  }

  //add urlParameters
  if (request.parameters) {
    action.payload.request.url += `?${request.parameters}`;
  }

  if (request.data) {
    action.payload.request.data = request.data;
  }

  if (action.payload.client === "default" || !action.payload.client) {
    action.payload.request.headers = {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    };
  }

  // console.log(request);

  //The onSuccess, onError and onComplete functions below overrides (when set in options) the default behaviour of redux-axios-middleware
  //of dispatching the same functions inside de module, witch dispatches _SUCCESS OR _FAIL actions AFTER THE REGULAR ACTION,
  action.payload.options = {
    onSuccess({ getState, dispatch, response }) {
      // console.log("response = ", response);
      if (successCallback) {
        successCallback(`${action.type}_SUCCESS`, response);
      }
    },
    onError({ getState, dispatch, error, status }) {//In case the response to the request is an http error code
      //general network error
      // console.log("fail", error);
      if (!error) {
        return;
      }

      //general network error
      if (!error.response) {
        return;
      }

      if (errorCallback) {
        errorCallback(
          `${action.type}_FAIL`,
          error.response.data.error || error.message
        );
      }
    },
    onComplete({ getState, dispatch, error }) {
      // dispatches loading end and complete callback if false
      dispatch({
        type: action.type,
        payload: false
      });

      if (completeCallback) {
        completeCallback(action.type);
      }
    }
  };
  return action;       //Returns action to be dispatched by redux-thunk and intercepted by redux-axios-middleware
}

export default Interceptor;

/* Notes:
The Interceptor is a "action" function that is to be returned inside a dispatch call. As the action is now a function,
redux-thunk middleware will intercept the dispatch and run the Interceptor function provided inside,
dispatching at the end the return of the Interceptor function (which is a new action); The return of the Interceptor function
is a regular action object with the payload.request field set, which will cause this new action dispatched by thunk
to be intercepted by another middleware, the redux-axios-middleware.

Redux-axios-middleware will run an async ajax request as defined inside the parameters inside the action it intercepted.
After running the request internally with axios, it may dispatch a regular action automatically directly to the reducers,
with type PREFIX_SUCCESS and PREFIX_FAIL (in case of success or failure) and the response of the request as parameters of this request.
If onSuccess, onError and onComplete are defined below, they will override the axios-middleware default behaviour
pointed above (wont dispatch the prefix actions by itself). The response is also sent as parameters inside this functions.

The AJAX request will be made to the default client/API (if none specified), or one of the clients specified in the clients list.
This is also set as parameters inside the action within the payload/request field.

It may be convenient to dispatch new actions (generally directly to the reducers as regular action objects) inside the Interceptor,
after a request is returned to effectively set the state of the application (which may also be done using the default behaviour above
with the prefixes).

Generally the Interceptor is dispatched inside an action creator (a function that generates an action) and may sometimes
specify the callbacks that are meant to be run inside the Interceptor, in case of success, error or whatever. These
callbacks are usually linked inside the Interceptor to the callbacks run by the redux-axios-middleware.
This action creators are made available as props inside the React components, and maybe called anywhere.
The final result (like fetched data) is put inside the redux state through the final pure action dispatched to reducers.
*/