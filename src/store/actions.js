export const DELETE_RECORD = "delete_record";
export const DELETE_ITEM = "delete_item";
export const ADD_RECORD = "add_record";
export const SEARCH_RECORD = "search_record";
export const GET_ALL_RECORDS = "get_all_records";

export const addRecord = (body) => {
    const existingItems = localStorage.getItem('heroes');
    if (existingItems) {
        const elements = JSON.parse(existingItems);
        localStorage.setItem('heroes', JSON.stringify([...elements, body]));
    } else {
        localStorage.setItem('heroes', JSON.stringify([body]));
    }
}

export const deleteRecord = (id) => {
    const existingItems = localStorage.getItem('heroes');
    const elements = JSON.parse(existingItems).filter( hero => id.indexOf( hero.email ) === -1 );
    localStorage.setItem('heroes', JSON.stringify(elements));

}

export const searchRecords = ( text ) => {
    const existingItems = localStorage.getItem('heroes');
    const elements = JSON.parse(existingItems).filter( hero => JSON.stringify(hero).indexOf( text ) > -1 );
    return elements;
}

export const getAllRecords = () => {
    const existingItems = localStorage.getItem('heroes');
    const elements = JSON.parse(existingItems);
    return elements;
}