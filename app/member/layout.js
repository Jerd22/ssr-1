import Navbar from "../components/Navbar";

export default function MemberLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
