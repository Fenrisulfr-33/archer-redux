export const BEGIN_API_CALL = 'BEGIN_API_CALL';
export const API_CALL_ERROR = 'API_CALL_ERROR';
export const FORCE_END_API_CALL = 'FORCE_END_API_CALL';

export function beginApiCall() {
  return { type: BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: API_CALL_ERROR };
}

export function forceEndApiCall() {
  return { type: FORCE_END_API_CALL };
}