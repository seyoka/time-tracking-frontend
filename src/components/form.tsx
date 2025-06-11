"use client";
import React from "react";

// Optional: define your Session type inline if not imported
type Session = {
  title: string;
  description: string;
};

function StartStopButton({ buttonState }: { buttonState: boolean }) {
  return (
    <button
      type="submit"
      className={`px-6 py-2 border-2 border-black rounded-xl font-handwritten text-lg ${buttonState ? "bg-green-600" : "bg-red-600"
        }`}
    >
      {buttonState ? "start" : "stop"}
    </button>
  );
}

export default function InputForm() {
  const [buttonState, setButtonState] = React.useState(true);
  const [sessionData, setSessionData] = React.useState<Session>({
    title: "",
    description: "",
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    console.log("Session Data:", sessionData);
    setButtonState(!buttonState);
  };

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSessionData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSessionData((prev) => ({ ...prev, description: e.target.value }));
  };

  return (
    <div className="text-center p-8 text-black">
      <h1 className="text-4xl font-handwritten mb-6">Time tracker</h1>
      <form
        className="bg-white p-6 rounded-3xl border-4 border-black max-w-md mx-auto space-y-4 text-left"
        onSubmit={handleOnSubmit}
      >
        <div>
          <label className="block text-xl font-handwritten mb-1">
            Session Title
          </label>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={handleTitleInput}
            value={sessionData.title}
            className="w-full p-2 border-2 border-black rounded-md"
          />
        </div>
        <div>
          <label className="block text-xl font-handwritten mb-1">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter description..."
            onChange={handleDescriptionInput}
            value={sessionData.description}
            className="w-full p-2 border-2 border-black rounded-md"
          />
        </div>
        <div className="flex justify-between pt-4">
          <button
            type="button"
            className="px-6 py-2 border-2 border-black rounded-xl font-handwritten text-lg"
          >
            tag
          </button>
          <StartStopButton buttonState={buttonState} />
        </div>
      </form>
    </div>
  );
}
