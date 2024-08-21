import { MdHomeFilled } from 'react-icons/md';
import { PiTelevision } from 'react-icons/pi';
import { BiSolidMovie } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';


export const navigation = [
    {
      label: "TV Shows",
      href: `tv`,
      icon: <PiTelevision/>
    },
    {
      label: "Movies",
      href: "movies",
      icon: <BiSolidMovie/>
    }
  ]
  
  export const mobileNavigation = [
    {
      label: "Home",
      href: "/",
      icon: <MdHomeFilled/>
    },
    ...navigation,
    {
        label: "search",
        href: "/search",
        icon: <IoSearch/>
    }
  ]
  