import BookADemoButton from "./BookADemoButton";
import Logo from "./Logo";

// A wrapper to provide some styling for each component showcase
const ComponentWrapper = ({ title, children }) => (
  <div className="p-8 my-8 border rounded-lg bg-white shadow">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

export default function ComponentShowcase() {
  return (
    <div className="p-10 bg-gray-50 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Component Library
      </h1>

      <ComponentWrapper title="Logo">
        <Logo />
      </ComponentWrapper>

      <ComponentWrapper title="Book A Demo Button">
        <BookADemoButton>Book a Demo</BookADemoButton>
      </ComponentWrapper>
    </div>
  );
}
