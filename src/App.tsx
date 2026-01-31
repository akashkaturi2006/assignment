import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-white">
        My UI Components
      </h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button label="Primary Button" variant="primary" />
        <Button label="Secondary Button" variant="secondary" />
        <Button label="Disabled Button" disabled />
      </div>

      {/* Input */}
      <div className="max-w-sm">
        <Input placeholder="Enter your name" />
      </div>

      {/* Card */}
      <div className="flex justify-center">
        <Card
          title="Title of the card"
          description="This card component is built using React, TypeScript, and Tailwind CSS."
        />
      </div>
    </div>
  );
}

export default App;
