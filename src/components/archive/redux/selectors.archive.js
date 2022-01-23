export const selectItemUsingCode = (state, code) => state.filter(item => item.code === code)[0];

// Gebruik deze op home pagina (voor mij) ~Tim (handig)
export const selectActiveItems = (state) => state.map(item => item.active === true);


export const selectArchivedItems = (state) => state.map(item => (item.active === false));

