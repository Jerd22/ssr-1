export default function Page() {
  return (
    <div className="flex-1 h-screen m-3 relative top-2">
      <div className=" h-auto bg-white border rounded">
        <div className="">
          <p className=" m-3 text-xl">รายละเอียดการติดต่อ</p>
          <div className="p-4">
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5442.38314392908!2d100.93560353865108!3d13.552048314494039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1718447706637!5m2!1sth!2sth"
                width="450"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </>
            <ul>
              <li>
                <p className=" text-md pt-2">ป้อมเจ้าหน้าที่รักษาความปลอดภัย</p>
                <p className=" pl-3"> - 000-000-0000</p>
              </li>
              <li>
                <p className=" text-md pt-2">E-Mail</p>
                <p className=" pl-3"> - siraromplus.wg@gmail.com </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
