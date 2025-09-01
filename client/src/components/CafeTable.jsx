import clsx from "clsx";

export const CafeTable = ({ noMeja, waktuPemesanan, note, status }) => {
  const statusColor = (status) => {
    const colors = {
      available: "bg-green-100 text-green-800",
      occupied: "bg-red-100 text-yellow-800",
      reserved: "bg-red-100 text-yellow-800",
      cleaning: "bg-red-100 text-red-800",
    };

    const colorClass = colors[status];

    return (
      <span
        className={clsx(
          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
          colorClass
        )}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mb-12">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              No Meja
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Waktu Pemesanan
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Catatan
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="py-4 px-6 border-b border-gray-200">{noMeja}</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">
              {waktuPemesanan}
            </td>
            <td className="py-4 px-6 border-b border-gray-200">{note}</td>
            <td className="py-4 px-6 border-b border-gray-200">
              {statusColor(status)}
            </td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};
