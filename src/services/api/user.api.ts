import { Request } from '~/services';
import { ResponseError } from '~/utils/entities';

export const login = async (credentials: User): Promise<User> => {
  try {
    const { data } = await Request.post('/auth', credentials);
    return data;
  } catch (error) {
    throw new ResponseError(error);
  }
};
