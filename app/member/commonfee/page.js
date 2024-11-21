import ImageGallery from "@/app/ImageGallery";

export default function Page() {
  return (
    <div className="flex-1 min-h-screen relative pt-16 w-screen">
      <div className="flex-1 h-4/5 mx-auto">
        <div className="mx-auto w-full items-center justify-between font-mono text-sm lg:flex flex-col">
          <div className="container">
            <a href="/member" className="float-start">
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </a>
            <h1 className="text-white text-center">
              {" "}
              ค่าส่วนกลางหมู่บ้านจัดสรร สิรารมย์พลัสเวลโกรว์
            </h1>
          </div>
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}
