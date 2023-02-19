export default function MenuItem(props) {
  return (
    <details className="group border-l-4 border-[#395cf3] bg-gray-900/30 rounded-r-lg p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex flex-col items-start justify-between cursor-pointer">
        <h2 className="text-md font-medium text-gray-200">
          ping
        </h2>
        <h4 className="text-gray-500 font-normal mt-1">Command Description</h4>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
        veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
        nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
        corporis earum similique!
      </p>
    </details>
  );
}
