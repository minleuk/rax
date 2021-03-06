const namespacedAction = (action: string) => `Navigation/${action}`;

const BACK = namespacedAction('BACK');
const INIT = namespacedAction('INIT');
const NAVIGATE = namespacedAction('NAVIGATE');
const RESET = namespacedAction('RESET');
const SET_PARAMS = namespacedAction('SET_PARAMS');
const URI = namespacedAction('URI');

const createAction = (type) => (payload = {}) => ({
  type,
  ...payload,
});

const back = createAction(BACK);
const init = createAction(INIT);
const navigate = createAction(NAVIGATE);
const reset = createAction(RESET);
const setParams = createAction(SET_PARAMS);
const uri = createAction(URI);

const deprecatedActionMap = {
  Back: BACK,
  Init: INIT,
  Navigate: NAVIGATE,
  Reset: RESET,
  SetParams: SET_PARAMS,
  Uri: URI,
};

const mapDeprecatedActionAndWarn = (action) => {
  const mappedType = deprecatedActionMap[action.type];
  if (!mappedType) {
    return action;
  }

  console.warn([
    `The action type '${action.type}' has been renamed to '${mappedType}'.`,
    `'${action.type}' will continue to work while in beta but will be removed`,
    'in the first major release. Moving forward, you should use the',
    'action constants and action creators exported by this library in',
    "the 'actions' object.",
    'See https://github.com/react-community/react-navigation/pull/120 for',
    'more details.',
  ].join(' '));

  return {
    ...action,
    type: deprecatedActionMap[action.type],
  };
};

export default {
  // Action constants
  BACK,
  INIT,
  NAVIGATE,
  RESET,
  SET_PARAMS,
  URI,

  // Action creators
  back,
  init,
  navigate,
  reset,
  setParams,
  uri,

  // TODO: Remove once old actions are deprecated
  mapDeprecatedActionAndWarn,
};
