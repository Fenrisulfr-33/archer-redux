export const createSearchQuery = (query) => {
    let searchQuery = "";
    if (Object.keys(query).length > 0) {
        searchQuery += "?";
        let index = 0;
        for (const [key, value] of Object.entries(query)) {
            if (index !== 0) {
                if (value !== ''){
                    searchQuery += `&${key}=${value}`;
                }
            } else {
                if (value !== ''){
                    searchQuery += `${key}=${value}`;
                }
            }
            index++;
        }
    }
    return searchQuery;
}