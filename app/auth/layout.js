import Navbar from "../components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <section className="p-6">
      <Navbar />
      {children}
    </section>
  );
}
