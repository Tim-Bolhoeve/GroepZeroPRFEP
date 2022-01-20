import { createReducer } from '@reduxjs/toolkit';
import { ARCHIVE, REACTIVATE } from './actions.archive';
import { courses } from '../../misc/courses.js';

const defaultState = courses;

const archiveReducer = createReducer(defaultState, {
    [ARCHIVE]: (state, action) => ({...state, counter: state.counter + action.payload}),
    [REACTIVATE]: (state, action) => ({...state, counter: state.counter - action.payload}),
});

export default archiveReducer