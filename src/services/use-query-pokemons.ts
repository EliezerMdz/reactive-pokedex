import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { PokemonList } from "../models";
import api, { getApiUrl } from "../../utils/api";

interface Filters {
  limit?: number;
  offset?: number;
}

const getPokemons = async ({ limit, offset }: Filters) => {
  const formattedFilters: { [key: string]: any } = {
    limit,
    offset,
  };

  const url = getApiUrl({ path: "/pokemon", searchParams: formattedFilters });
  const response = api.get(url);
  //console.log(response);
  return response;
};

export const useQueryPokemons = (
  filters: Filters,
  options?: Omit<
    UseQueryOptions<any, unknown, PokemonList, QUERY_KEY[]>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<PokemonList> => {
  return useQuery([QUERY_KEY.POKEMONS], () => getPokemons(filters), {
    ...options,
    keepPreviousData: true,
  });
};
