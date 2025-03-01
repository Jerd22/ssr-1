export default function Page() {
  return (
    <div className="flex-1 min-h-screen relative pt-16 w-screen">
      <div className="flex-1 h-4/5 mx-auto">
        <div className="mx-auto w-full items-center justify-between text-sm lg:flex flex-col">
          <div className="container px-4 mx-auto">
            <div className="py-6 bg-white rounded-md shadow-lg">
              <div className="flex flex-wrap items-center justify-between pb-6 mb-6 px-6 border-b">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <h2 className="text-lg text-coolGray-900 font-semibold">
                    รายชื่อคณะกรรมการ
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
                        เพิ่มคณะกรรมการ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
