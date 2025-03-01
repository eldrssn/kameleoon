import axios from 'axios';
import { API_BASE_URL } from './constants';
import { Site, Test } from '@models';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSites = async (): Promise<Site[]> => {
  try {
    const response = await apiClient.get('/sites');
    return response.data;
  } catch (error) {
    console.error('Error fetching sites:', error);
    throw error;
  }
};

export const getSiteById = async (id: number): Promise<Site> => {
  try {
    const response = await apiClient.get(`/sites/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching site with id ${id}:`, error);
    throw error;
  }
};

export const getTests = async (): Promise<Test[]> => {
  try {
    const response = await apiClient.get('/tests');
    return response.data;
  } catch (error) {
    console.error('Error fetching tests:', error);
    throw error;
  }
};

export const getTestById = async (id: number): Promise<Test> => {
  try {
    const response = await apiClient.get(`/tests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching test with id ${id}:`, error);
    throw error;
  }
};
