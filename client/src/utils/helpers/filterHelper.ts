import { filtersType } from "../types";

export default function filterHelper(
  filters: filtersType
): Partial<filtersType> {
  const filteredObject: Partial<filtersType> = {};

  // Iterate over the keys in the original object
  for (const key in filters) {
    // Use type assertion to tell TypeScript that the key is valid
    if ((key as keyof filtersType) in filters && filters[key as keyof filtersType] !== null && filters[key as keyof filtersType] !== undefined) {
      // Add the non-null value to the new object
      filteredObject[key as keyof filtersType] = filters[key as keyof filtersType];
    }
  }

  return filteredObject;
}
