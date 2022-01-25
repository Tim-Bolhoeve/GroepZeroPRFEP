import { createReducer } from '@reduxjs/toolkit';
import { ARCHIVE, REACTIVATE, GOEDKEUREN } from './actions.archive';
import { courses } from '../../../misc/courses.js';
// import { nieuwvak } from '../../aanmaken/nieuwvak';
import { state } from 'lit-element';


const defaultState = courses;
const newState = nieuwvak;


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

// const Keurings = createReducer(newState, {
//     [GOEDKEUREN]: (state, action) => (
//         state.map(cursus =>{
//                 let goedkeuren = action.goedkeuren;
//                 if(cursus.code === goedkeuren.code){
//                     return{... cursus, active: goedkeuren.active};
//                 }
//                 return cursus;
//              })
//     )
    
//     })

export default archiveReducer
// export default Keurings
