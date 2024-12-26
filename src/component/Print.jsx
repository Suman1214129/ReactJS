import React from 'react';

const Print = () => {
   const list = ["kadaiPaneer", "bainganKaBharta", "lokiKiDaal"];

   return (
      <>
         <ul>
            {list.map((val) => {
               return <li key={val}>{val}</li>;
            })}
         </ul>
      </>
   );
};

export default Print;


//To do conditional rendering