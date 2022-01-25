import { createReducer } from '@reduxjs/toolkit';
import { ARCHIVE, REACTIVATE } from './actions.archive';
import { courses } from '../../../misc/courses.js';

const defaultState = courses;

// https://stackoverflow.com/questions/46790746/update-array-object-in-react-redux-reducer

const archiveReducer = createReducer(defaultState, {
    [ARCHIVE]: (state, action) => (
        state.map(cursus => {
            let payload = action.payload;
            if(cursus.code === payload.code) {
                return {...cursus,  active: payload.active};
            }
            return cursus;
        })
    ),
    [REACTIVATE]: (state, action) => (
        state.map(cursus => {
            let payload = action.payload;
            if(cursus.code === payload.code) {
                return {...cursus,  active: payload.active};
            }
            return cursus;
        })
    ),
});

export default archiveReducer