export const selectItemUsingCode = (state, code) => state.filter(item => item.code === code)[0];

// Gebruik deze op home pagina
export const selectActiveItems = (state) => state.filter(item => item.active === true);

export const selectArchivedItems = (state) => state.filter(item => item.active === false);

