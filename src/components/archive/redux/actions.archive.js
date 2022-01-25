import {createAction} from '@reduxjs/toolkit';
import { DEFAULT_STATS } from 'webpack-dev-server';

export const ARCHIVE = 'archive/ARCHIVE';

// Deze actie zal waarschijnlijk niet in productie worden gebruikt
export const REACTIVATE = 'archive/REACTIVATE';

// export const GOEDKEUREN = 'goedkeuren';

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

  // export default {
  //   goedkeuren: createAction(GOEDKEUREN, function prepare(code){
  //     return {
  //       keur:{
  //         code,
  //         active: false
  //       }
  //     }
  //   })

  

}