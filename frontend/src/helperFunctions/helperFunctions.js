export const createSearchQuery = (query) => {
    let searchQuery = "";
    if (Object.keys(query).length > 0) {
        searchQuery += "?";
        let index = 0;
        for (const [key, value] of Object.entries(query)) {
            if (index !== 0) {
                searchQuery += `&${key}=${value}`;
            } else {
                searchQuery += `${key}=${value}`;
            }
            index++;
        }
    }
    return searchQuery;
}

export const onFilterSubmitHandler = (event, router, params, searchRoute) => {
    event.preventDefault();

    const queries = [];
    params.typeOne !== '' ? queries.push(["typeOne", params.typeOne]) : null;
    params.typeTwo !== '' ? queries.push(["typeTwo", params.typeTwo]) : null;
    params.stat !== '' && params.sort !== '' ? queries.push([`${params.sort.toLowerCase()}`, `baseStats.${params.stat.toLowerCase()}`]) : null;

    queries.forEach((query, index) => {
        if (query[1] !== "") {
            if (index === 0) {
                searchRoute += `?${query[0]}=${query[1]}`;
            } else {
                searchRoute += `&${query[0]}=${query[1]}`;
            }
        }
    });
    router.push(searchRoute);
}