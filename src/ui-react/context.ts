import {
  CheckpointsOrCheckpointsId,
  IndexesOrIndexesId,
  MetricsOrMetricsId,
  QueriesOrQueriesId,
  RelationshipsOrRelationshipsId,
  StoreOrStoreId,
  useCheckpoints as useCheckpointsDecl,
  useIndexes as useIndexesDecl,
  useMetrics as useMetricsDecl,
  useQueries as useQueriesDecl,
  useRelationships as useRelationshipsDecl,
  useStore as useStoreDecl,
} from '../types/ui-react';
import {Id, Ids} from '../types/common';
import {IdObj, objGet, objIds} from '../common/obj';
import {isString, isUndefined} from '../common/other';
import {Checkpoints} from '../types/checkpoints';
import {Indexes} from '../types/indexes';
import {Metrics} from '../types/metrics';
import {Queries} from '../types/queries';
import React from 'react';
import {Relationships} from '../types/relationships';
import {Store} from '../types/store';

const {createContext, useContext} = React;

type ContextValue = [
  Store?,
  {[storeId: Id]: Store}?,
  Metrics?,
  {[metricsId: Id]: Metrics}?,
  Indexes?,
  {[indexesId: Id]: Indexes}?,
  Relationships?,
  {[relationshipsId: Id]: Relationships}?,
  Queries?,
  {[queriesId: Id]: Queries}?,
  Checkpoints?,
  {[checkpointsId: Id]: Checkpoints}?,
];

export const Context = createContext<ContextValue>([]);

const useThing = <
  Thing extends
    | Store
    | Metrics
    | Indexes
    | Relationships
    | Queries
    | Checkpoints,
>(
  id: Id | undefined,
  offset: number,
): Thing | undefined => {
  const contextValue = useContext(Context);
  return (
    isUndefined(id)
      ? contextValue[offset]
      : isString(id)
      ? objGet((contextValue[offset + 1] ?? {}) as IdObj<Thing>, id)
      : id
  ) as Thing;
};

const useThingOrThingById = <
  Thing extends
    | Store
    | Metrics
    | Indexes
    | Relationships
    | Queries
    | Checkpoints,
>(
  thingOrThingId: Thing | Id | undefined,
  offset: number,
): Thing | undefined => {
  const thing = useThing(thingOrThingId as Id, offset);
  return isUndefined(thingOrThingId) || isString(thingOrThingId)
    ? (thing as Thing | undefined)
    : (thingOrThingId as Thing);
};

export const useThingIds = (offset: number): Ids =>
  objIds((useContext(Context)[offset] ?? {}) as IdObj<unknown>);

export const useStore: typeof useStoreDecl = (id?: Id): Store | undefined =>
  useThing(id, 0);

export const useStoreOrStoreById = (
  storeOrStoreId?: StoreOrStoreId,
): Store | undefined => useThingOrThingById(storeOrStoreId, 0);

export const useMetrics: typeof useMetricsDecl = (
  id?: Id,
): Metrics | undefined => useThing(id, 2);

export const useMetricsOrMetricsById = (
  metricsOrMetricsId?: MetricsOrMetricsId,
): Metrics | undefined => useThingOrThingById(metricsOrMetricsId, 2);

export const useIndexes: typeof useIndexesDecl = (
  id?: Id,
): Indexes | undefined => useThing(id, 4);

export const useIndexesOrIndexesById = (
  indexesOrIndexesId?: IndexesOrIndexesId,
): Indexes | undefined => useThingOrThingById(indexesOrIndexesId, 4);

export const useRelationships: typeof useRelationshipsDecl = (
  id?: Id,
): Relationships | undefined => useThing(id, 6);

export const useRelationshipsOrRelationshipsById = (
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): Relationships | undefined =>
  useThingOrThingById(relationshipsOrRelationshipsId, 6);

export const useQueries: typeof useQueriesDecl = (
  id?: Id,
): Queries | undefined => useThing(id, 8);

export const useQueriesOrQueriesById = (
  queriesOrQueriesId?: QueriesOrQueriesId,
): Queries | undefined => useThingOrThingById(queriesOrQueriesId, 8);

export const useCheckpoints: typeof useCheckpointsDecl = (
  id?: Id,
): Checkpoints | undefined => useThing(id, 10);

export const useCheckpointsOrCheckpointsById = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): Checkpoints | undefined =>
  useThingOrThingById(checkpointsOrCheckpointsId, 10);
