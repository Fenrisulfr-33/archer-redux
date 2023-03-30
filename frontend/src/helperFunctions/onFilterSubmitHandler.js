import { useRouter } from "next/router";

export const onFilterSubmitHandler = (event, router, searchRoute, queries) => {
    event.preventDefault();
    queries.forEach((type, index) => {
      if (type[1] !== ''){
        if (index === 0){
          searchRoute += `?${type[0]}=${type[1]}`
        } else {
          searchRoute += `&${type[0]}=${type[1]}`
        }
      }
    });
    router.push(searchRoute);
  };