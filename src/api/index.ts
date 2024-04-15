import {useQuery} from 'react-query';
import {User} from '../types';

const API_URL = 'https://www.mockachino.com/06c67c77-18c4-45';
const USERS_ENDPOINT = '/users';

type FetchUserType = Promise<{users: User[]}>;

const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}${USERS_ENDPOINT}`);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const jsonData: FetchUserType = await response.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
};

const fetchUserById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}${USERS_ENDPOINT}`);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const jsonData: FetchUserType = await response.json();
    const users = (await jsonData).users;

    return users.find((user: User) => user.contactId === id);
  } catch (error) {
    throw error;
  }
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: 1,
  });
};

export const useUser = (id: number) => {
  return useQuery(
    ['user', id],
    () => {
      return fetchUserById(id);
    },
    {
      retry: 1,
    },
  );
};
