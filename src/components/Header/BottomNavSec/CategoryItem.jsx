import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CategoryItem = ({ item, index, categoriesMenuData }) => {
  console.log(item)
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openSubMenuItem, setOpenSubMenuItem] = useState(false);
  return (
    <div
      className={`py-3 px-4 flex justify-between items-center hover:text-amber-700 ${index !== categoriesMenuData.length - 1 && 'border-b border-0.5 border-gray-700'}`}
      key={item.id}
      onMouseEnter={() => setOpenSubMenu(true)}
      onMouseLeave={() => setOpenSubMenu(false)}
    >
      {item.name}
      {item?.data &&
        <ChevronRightIcon
          strokeWidth={2.5}
          className={`h-3.5 w-3.5 transition-transform ${openSubMenu ? "rotate-180" : ""
            }`}
        />}
      <div className={`absolute w-full top-0 left-full ml-0.5 rounded-b-lg rounded-lg ${!openSubMenu && 'hidden'}`}>

        {item?.data?.map((subItem, id) =>
          <div
            className={`py-3 px-4 w-full bg-dark-special flex justify-between items-center hover:text-amber-700 text-white ${id !== item.data.length - 1 ? 'border-b border-0.5 border-gray-700' : 'rounded-b-lg'}`}
            key={id}
            onMouseEnter={() => setOpenSubMenuItem(true)}
            onMouseLeave={() => setOpenSubMenuItem(false)}
          >
            {subItem.name}
            {subItem?.subData &&
              <ChevronRightIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${openSubMenuItem ? "rotate-180" : ""
                  }`}
              />}
            <div className={`absolute w-full top-0 left-full ml-0.5 rounded-b-lg rounded-lg ${!openSubMenuItem && 'hidden'}`}>
              {subItem?.subData?.map((subDataItem, id) =>
                <div
                  className={`py-3 px-4 w-full bg-dark-special flex justify-between items-center hover:text-amber-700 text-white ${id !== subItem.subData.length - 1 ? 'border-b border-0.5 border-gray-700' : 'rounded-b-lg'}`}
                  key={id}
                >
                  {subDataItem.name}
                  {subDataItem?.subData &&
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${openSubMenuItem ? "rotate-180" : ""
                        }`}
                    />}
                </div>)}
            </div>
          </div>)}

      </div>
    </div>
  );
};

export default CategoryItem;



// import { ChevronRightIcon } from "@heroicons/react/24/solid";

// const CategoryItem = forwardRef(({ item, index }, ref) => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(false);

//   return (
//     <div ref={ref}>
//       {item.data && (
//         <div
//           open={openMenu}
//         >
//           <div className={`py-3 px-4 flex justify-between items-center ${index !== item.data.length - 1 && 'border-b border-0.5 border-gray-700'}`}>
//             <div>
//               {item.name}
//               <ChevronRightIcon
//                 strokeWidth={2.5}
//                 className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
//                   }`}
//               />
//             </div>
//           </div>
//           <div className="absolute left-full bg-dark-special">
//             {item.data.map((subItem, id) => (
//               <div key={id}>
//                 {subItem.subData ? (
//                   <div>
//                     <div
//                       open={openSubMenu}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div>
//                           {subItem.name}
//                           <ChevronRightIcon
//                             strokeWidth={2.5}
//                             className={`h-3.5 w-3.5 transition-transform ${openSubMenu ? "rotate-180" : ""
//                               }`}
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         {subItem.subData.map((subSubItem) => (
//                           <MenuItem key={subSubItem.id}>
//                             {subSubItem.name}
//                           </MenuItem>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div key={subItem.id}>{subItem.name}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {item.href && <div>{item.name}</div>}
//     </div>
//   );
// });

// CategoryItem.displayName = "CategoryItem";

// CategoryItem.propTypes = {
//   item: PropTypes.object,
// };

// export default CategoryItem;
