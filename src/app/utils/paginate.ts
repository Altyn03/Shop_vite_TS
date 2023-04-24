interface IPaginate {
    items: [],
    pageNumber: number,
    pageSize: number
}


export function paginate<IPaginate>(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
