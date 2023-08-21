import axios from 'axios';
import queryString from 'query-string';
import { SongPlatformInterface, SongPlatformGetQueryInterface } from 'interfaces/song-platform';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSongPlatforms = async (
  query?: SongPlatformGetQueryInterface,
): Promise<PaginatedInterface<SongPlatformInterface>> => {
  const response = await axios.get('/api/song-platforms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSongPlatform = async (songPlatform: SongPlatformInterface) => {
  const response = await axios.post('/api/song-platforms', songPlatform);
  return response.data;
};

export const updateSongPlatformById = async (id: string, songPlatform: SongPlatformInterface) => {
  const response = await axios.put(`/api/song-platforms/${id}`, songPlatform);
  return response.data;
};

export const getSongPlatformById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/song-platforms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSongPlatformById = async (id: string) => {
  const response = await axios.delete(`/api/song-platforms/${id}`);
  return response.data;
};
