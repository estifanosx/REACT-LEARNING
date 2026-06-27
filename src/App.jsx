import Component from "./Components/component.jsx";

export default function App() {
  return (
    <div className="bg-neutral-900  min-h-screen text-white p-4">
      <div className="grid grid-cols-3 gap-4">
        <Component name="estif" status="active" role="admin" />
        <Component name="alex" status="inactive" role="user" />
        <Component name="john" status="warning" role="moderator" />
      </div>
    </div>
  );
}
