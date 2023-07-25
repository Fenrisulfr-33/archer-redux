export default function onFilterSubitHandler(event, router, params, searchRoute){
    event.preventDefault();

    const queries = [];
    params.typeOne !== '' ? queries.push(["typeOne", params.typeOne]) : null;
    params.typeTwo !== '' ? queries.push(["typeTwo", params.typeTwo]) : null;
    params.stat !== '' && params.sort !== '' ? queries.push([`${params.sort.toLowerCase()}`,`baseStats.${params.stat.toLowerCase()}`]) : null;

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