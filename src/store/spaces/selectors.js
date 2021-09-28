// src/store/spaces/selectors.js
export function selectSpacesLoading(reduxState) {
  return reduxState.spaces.loading;
}

export function selectAllSpaces(reduxState) {
  return reduxState.spaces.allSpaces;
}
