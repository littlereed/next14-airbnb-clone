'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";
  //title: string;
  //subtitle?: string;
  //center?: boolean;
interface HeadingProps {
  listingId: string;
  
  currentUser?: SafeUser | null;
}

const Heading: React.FC<HeadingProps> = ({ 
  listingId,
  currentUser
}) => {
  const {hasFavorited, toggleFavorite} = useFavorite({
    listingId,
    currentUser
  });

  return ( 
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transition cursor-pointer
    '>
      <AiOutlineHeart 
        size={28}
        className='fill-white absolute -top-[2px] -right-[2px]'
      />
      <AiFillHeart 
        size={24}
        className={
          hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />

    </div>
   );
}
 
export default Heading;

//<div className="text-2xl font-bold">
       // {title}
      //</div>
      //<div className="font-light text-neutral-500 mt-2">
        //{subtitle}
      //</div>