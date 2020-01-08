export const setItemStore = (nameStor, data) => {
    localStorage.setItem(nameStor, JSON.stringify(data))
}

export const getItemStore = (nameStor) => {
    let data = localStorage.getItem(nameStor);
    data = JSON.parse(data);
    return data
}