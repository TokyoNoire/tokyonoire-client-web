import React, { type FC, type ReactElement } from "react";


const GameList: FC = (): ReactElement => {
  return (
   <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm text-center ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-body2">
                case title
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                author
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                rating
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                time
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                location
              </th>
              
            </tr>
          </thead>
          <tbody>
  <tr className="bg-white border-b">
    <th
      scope="row"
      className="px-6 py-2 font-heading whitespace-nowrap"
    >
      TITLE
    </th>
    <td className="px-6 py-4 font-heading">AUTHOR</td>
    <td className="px-6 py-4 font-heading">RATING</td>
    <td className="px-6 py-4 font-heading">ESTIMATED</td>
    <td className="px-6 py-4 font-heading">LOCATION</td>
  </tr>
</tbody>
        </table>
      </div>
  );
};

export default GameList;
