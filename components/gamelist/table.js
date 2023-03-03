import Games from "./games.json";

export default function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:mx-24 z-50">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs  uppercase bg-zinc-900 text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Game id
            </th>
            <th scope="col" className="px-6 py-3">
              Default Port
            </th>
          </tr>
        </thead>
        <tbody>
          {Games?.map((game, index) => {
            return (
              <tr key={index} className=" bg-black border-zinc-900 divide-y divide-zinc-900 hover:bg-zinc-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {index}
                </th>
                <td className="px-6 py-4">{game.name}</td>
                <td className="px-6 py-4">{game.gameId}</td>
                <td className="px-6 py-4">{game.port}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
