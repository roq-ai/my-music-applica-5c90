import axios from 'axios';
import queryString from 'query-string';
import { ShareLinkInterface, ShareLinkGetQueryInterface } from 'interfaces/share-link';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getShareLinks = async (
  query?: ShareLinkGetQueryInterface,
): Promise<PaginatedInterface<ShareLinkInterface>> => {
  const response = await axios.get('/api/share-links', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createShareLink = async (shareLink: ShareLinkInterface) => {
  const response = await axios.post('/api/share-links', shareLink);
  return response.data;
};

export const updateShareLinkById = async (id: string, shareLink: ShareLinkInterface) => {
  const response = await axios.put(`/api/share-links/${id}`, shareLink);
  return response.data;
};

export const getShareLinkById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/share-links/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteShareLinkById = async (id: string) => {
  const response = await axios.delete(`/api/share-links/${id}`);
  return response.data;
};
