export const selectItemUsingCode = (state, code) => state.filter(item => item.code === code)[0];

// export const selectAcceptedItems = (state) => state.filter(item => item.active === true);

// export const selectUnAcceptedItems = (state) => state.filter(item => item.active === false);
// Gebruik deze op home pagina
export const selectActiveItems = (state) => state.filter(item => item.active === true);

export const selectArchivedItems = (state) => state.filter(item => item.active === false);

