import Navbar from "../components/Navbar";

export default function CommitteeLayout({ children }) {
  return (
    <section className="">
      <Navbar />

      {children}
    </section>
  );
}
