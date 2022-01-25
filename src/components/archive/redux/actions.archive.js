import {createAction} from '@reduxjs/toolkit';

export const ARCHIVE = 'archive/ARCHIVE';

// Deze actie zal waarschijnlijk niet in productie worden gebruikt
export const REACTIVATE = 'archive/REACTIVATE';

// export default {
//   archive: createAction(ARCHIVE, (code) => ({payload: {code, active}})),
//   reactivate: createAction(REACTIVATE, (code) => ({payload: {code, active}}))
// }

// export default {
//   archive: createAction(ARCHIVE, (code) => ({payload: {code, active}})),
//   reactivate: createAction(REACTIVATE, (code) => ({payload: {code, active}}))
// }
export default {
  archive: createAction(ARCHIVE, function prepare(code) {
    return {
      payload: {
        code,
        active: false
      },
    }
  })
}