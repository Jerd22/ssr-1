import Navbar from "../components/Navbar";

export default function ContactsLayout({ children }) {
  return (
    <section className="">
      <Navbar />
      {children}
    </section>
  );
}
