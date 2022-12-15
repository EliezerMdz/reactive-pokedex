import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { PokemonList } from "../models";
import api, { getApiUrl } from "../../utils/api";
import { ApiResponse } from "../types";

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
  return api.get(url);
};

export const useQueryPokemons = (
  filters: Filters,
  options?: Omit<
    UseQueryOptions<any, unknown, ApiResponse<PokemonList>, QUERY_KEY[]>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<ApiResponse<PokemonList>> => {
  return useQuery([QUERY_KEY.POKEMONS], () => getPokemons(filters), {
    ...options,
    keepPreviousData: true,
  });
};
