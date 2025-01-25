// import React from 'react'
// import Sidebar from '../Components/Sidebar'
// import Cars from '../Components/Cars'
// import Address from '../Components/Address'


// const Category = () => {
//   return (
//     <div>
//       <Address/>
//       <Sidebar/>
//       <Cars/>
//     </div>
//   )
// }

// export default Category
import React from "react";
import Sidebar from "../Components/Sidebar";
import Cars from "../Components/Cars";
import Address from "../Components/Address";

const Category = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - Fixed width on larger screens, hidden on smaller screens */}
      <div className=" md:w-64 lg:w-72  p-4">
        <Sidebar cars={[]} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Address - Aligned at the top */}
        <div className="p-4 bg-white shadow-sm">
          <Address />
        </div>

        {/* Cars - Displayed below the Address */}
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto w-full"> 
          <Cars />
        </div>
      </div>
    </div>
  );
};

export default Category;