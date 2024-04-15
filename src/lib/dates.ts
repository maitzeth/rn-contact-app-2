import {format, parseISO, isValid} from 'date-fns';

export const formatDefaultReadableDate = (dateString: string) => {
  const dateObject = parseISO(dateString);
  const isValidDate = isValid(dateObject);

  if (isValidDate) {
    return format(dateObject, 'dd/MM/yyyy');
  }

  return 'N/A';
};
