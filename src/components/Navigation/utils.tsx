import { GoHeart, GoHeartFill, GoHome, GoHomeFill } from 'react-icons/go';
import { HiOutlineUser, HiUser } from 'react-icons/hi2';
import { TbCategory, TbCategoryFilled } from 'react-icons/tb';
import { CATEGORIES_ROUTE, HOME_ROUTE } from '../../utils/consts';

export const navigationButtons = [
  {
    path: HOME_ROUTE,
    icon: <GoHome />,
    iconActive: <GoHomeFill />,
  },
  {
    path: CATEGORIES_ROUTE,
    icon: <TbCategory />,
    iconActive: <TbCategoryFilled />,
  },
  {
    path: '',
    icon: <GoHeart />,
    iconActive: <GoHeartFill />,
  },
  {
    path: '#',
    icon: <HiOutlineUser />,
    iconActive: <HiUser />,
  },
];
