import {createAction} from '@reduxjs/toolkit';

export const ARCHIVE = 'archive/ARCHIVE';

// Deze actie zal waarschijnlijk niet in productie worden gebruikt
export const REACTIVATE = 'archive/REACTIVATE';

export default {
  increment: createAction(ARCHIVE, (false)),
  decrement: createAction(REACTIVATE, (true))
}