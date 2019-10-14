import { createSelector } from "reselect";

const selectCollection = state => state.collection;

export const selectCollections = createSelector(
  [selectCollection],
  collection => collection.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.values(collections)
);

export const selectSingleCollection = collectionUrl =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrl]
  );
