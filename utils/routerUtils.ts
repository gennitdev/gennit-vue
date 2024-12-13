import type { Router, LocationQuery } from "vue-router";

export type UpdateStateInput = {
  channels?: string[];
  tags?: string[];
  searchInput?: string;
};
type UpdateFiltersInput = {
  params: UpdateStateInput;
  router: Router;
  route: any;
};

export const updateFilters = (input: UpdateFiltersInput) => {
  const { params, router, route } = input;
  const updatedQuery: LocationQuery = Object.assign({}, route.query);

  Object.entries(params).forEach(([key, value]) => {
    if (
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      console.log(`Deleting ${key}`);
      delete updatedQuery[key];
    } else if (Array.isArray(value)) {
      updatedQuery[key] = [...value];
    } else {
      updatedQuery[key] = value;
    }
  });

  router.replace({
    path: route.path,
    query: { ...updatedQuery },
    force: true,
  });
};
