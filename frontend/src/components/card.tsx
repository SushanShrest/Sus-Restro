import React from "react";
import { Star } from "lucide-react"; // for star icons


interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  rating?: number; // default stars
}
// const FoodCard: React.FC = () => {
//   return (
//     <div className="bg-white dark:bg-neutral-800 shadow-md rounded-2xl overflow-hidden w-72 flex flex-col">
//       {/* Image */}
//       <img
//         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//         alt=""
//         className="h-full w-full object-cover"
//       />

//       {/* Content */}
//       <div className="p-4 flex flex-col flex-1">
//         {/* Title */}
//         <h3 className="text-lg font-bold text-gray-900 dark:text-white">
//           Title
//         </h3>

//         {/* Rating */}
//         <div className="flex items-center gap-1 my-2">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star
//               key={i}
//               size={16}
//               className={
//                 i ? "text-gray-300" : "text-yellow-500 fill-yellow-500"
//               }
//             />
//           ))}
//         </div>
//         {/* Description
//         <p className="text-sm text-gray-500 dark:text-gray-400 flex-1"></p> */}
//         {/* Price + Button */}
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-orange-600 font-bold text-lg">$200</span>
//           <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;
const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  price,
  rating = 4,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-2xl overflow-hidden w-72 flex flex-col">
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 my-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-orange-600 font-bold text-lg">{price}</span>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
