export default {
    CHANGE_COUNT: 'CHANGE_COUNT'
}

export const changeCount = (count) => {
    return { type: 'CHANGE_COUNT',  count };
}

