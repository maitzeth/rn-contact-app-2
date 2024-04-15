import {useQuery} from 'react-query';
import {User} from '../types';

const API_URL = 'https://www.mockachino.com/06c67c77-18c4-45';
const USERS_ENDPOINT = '/users';

type FetchUserType = Promise<{users: User[]}>;

const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}${USERS_ENDPOINT}`);

    // console.log(response, 'response');

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const jsonData: FetchUserType = await response.json();
    return jsonData;
  } catch (error) {
    // console.log(error, 'error');
    throw error;
  }
};

export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: 1,
    refetchOnWindowFocus: true,
  });
