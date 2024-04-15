import {theme} from '../lib/theme';

export type TypeTheme = typeof theme;

export type User = {
  contactId: number;
  name: string;
  surnames: string;
  birthDate: string;
  gender: string;
  photo: string | null;
  phone: string;
  profesion: string;
  email: string;
};
