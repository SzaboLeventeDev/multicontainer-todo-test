import config from '@/config';
import type { Task } from '@/types';
import { ref } from 'vue';

export function useApi() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const baseURL = `${config.protocol}://${config.backendHost}:${config.backendPort}`;

  const getData = async (endpoint: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      data.value = await response.json();
    } catch (err: any) {
      error.value = err.message || 'Request failed';
    } finally {
      loading.value = false;
    }
  };

  const postData = async (endpoint: string, payload: Task) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      data.value = await response.json();
    } catch (err: any) {
      error.value = err.message || 'Request failed';
    } finally {
      loading.value = false;
    }
  };

  const updateData = async (endpoint: string, payload: Task) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      data.value = await response.json();
    } catch (err: any) {
      error.value = err.message || 'Request failed';
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    getData,
    postData,
    updateData,
  };
}
