// Función para cargar el estado desde el localStorage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined; // No hay nada en localStorage, así que devuelve undefined
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error("Error loading state from localStorage", error);
        return undefined;
    }
};
