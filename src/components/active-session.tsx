
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ActiveSessionProps {
  title: string;
  description: string;
  start_time: Date;
  date: Date;
  elapsedTime?: string;
  end_time: Date;
}

export default function ActiveSession({ session }: { session: ActiveSessionProps }) {
  return (
    <Card className="w-full max-w-2xl ">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{session.title ?? "bruh"}</h2>
            <p className="text-gray-700 mb-2">{session.description ?? "bruh"}</p>
            <p className="text-gray-600">{session.date?.toDateString() ?? "bruh"}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-medium mb-1">
              {session.start_time?.toLocaleTimeString() ?? "bruh"}
            </div>
            <div className="text-2xl font-bold text-green-600">
              {session.elapsedTime || "00:00:00"}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            className="px-6 py-2 border-2 border-black bg-white hover:bg-gray-50 font-medium"
          >
            edit
          </button>
          <button

            className="px-6 py-2 border-2 border-black bg-white hover:bg-gray-50 font-medium"
          >
            stop
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
