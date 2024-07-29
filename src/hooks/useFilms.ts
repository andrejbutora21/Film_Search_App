import FilmApi from '../api/filmApi';
import { useQuery } from '@tanstack/react-query';

export const usePaginatedFilms = (page: string, title: string) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['films', page, title],
    queryFn: async () => {
      return await FilmApi.getPaginated(page, title);
    },
  });

  return { data, isFetching, error };
};

export const useSingleFilm = (id: string) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['film', id],
    queryFn: async () => {
      return await FilmApi.getSingle(id);
    },
  });

  return { data, isFetching, error };
};
