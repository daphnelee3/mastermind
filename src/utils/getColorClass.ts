import { Color } from '../types';

const getColorClass = (color: Color): string => {
  switch (color) {
    case 'red':
      return 'bg-red-500';
    case 'green':
      return 'bg-green-500';
    case 'blue':
      return 'bg-blue-500';
    case 'yellow':
      return 'bg-yellow-500';
    case 'orange':
      return 'bg-orange-500';
    case 'purple':
      return 'bg-purple-500';
    default:
      return 'bg-gray-300';
  }
};

export default getColorClass;
