import { AxiosInterceptorManager } from 'axios';
import { Storage } from '~/services';

type CustomRequest = {
  authorization?: string;
};

export const interceptorsAuthHeaders = async (
  config: any,
): Promise<any & CustomRequest> => {
  const token = Storage.getToken();

  if (!token) return config;
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: token,
    },
  };
};
