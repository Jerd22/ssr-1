export default function Resident() {
  return (
    <div className="flex-1 min-h-screen relative pt-16 w-screen">
      <div className="flex-1 h-4/5 mx-auto">
        <div className="mx-auto w-full items-center justify-between text-sm lg:flex flex-col">
          <div className="container px-4 mx-auto">
            <div className="py-6 bg-white rounded-md shadow-lg">
              <div className="flex flex-wrap items-center justify-between pb-6 mb-6 px-6 border-b">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <h2 className="text-lg text-coolGray-900 font-semibold">
                    สมาชิกในครอบครัว
                  </h2>
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <div className="flex flex-wrap justify-end -m-2">
                    <div className="w-full md:w-auto p-2">
                      <button className="w-full inline-flex px-4 py-2 text-sm text-coolGray-500 font-medium bg-white border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19M19 12H5"
                            stroke="black"
                            strokeWidth="null"
                            strokeLinecap="round"
                            className="my-path"
                          ></path>
                        </svg>
                        เพิ่มสมาชิกใหม่
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6">
                <table className="min-w-full  rounded-xl">
                  <thead>
                    <tr className="bg-gray-50">
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        ลำดับ
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        ชื่อ-สกุล
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        สถานะ
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        จัดการ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 ">
                    <tr>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
