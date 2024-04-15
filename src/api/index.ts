import {useQuery} from 'react-query';
import {User} from '../types';

const API_URL = 'https://www.mockachino.com/06c67c77-18c4-45';
const USERS_ENDPOINT = '/users';

type FetchUserType = Promise<{users: User[]}>;

const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}${USERS_ENDPOINT}`);
    const data = response.json();
    return data as FetchUserType;
  } catch (_err) {
    return {
      users: [],
      message: 'Something weird happened please, try again...',
    };
  }
};

export const useUsers = () => useQuery('users', fetchUsers);
