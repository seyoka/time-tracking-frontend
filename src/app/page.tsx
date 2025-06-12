import InputForm from "@/components/form";
import SessionList from "@/components/session-list";
import SessionProps from "@/types/sessionProps";

export default function Home() {
  const sessionList: SessionProps[] = [
    {
      title: "BTM work",
      description: "Working on analytics",
      duration: 2,
      date: new Date()
    },

    {
      title: "BTM work",
      description: "Working on analytics",
      duration: 2,
      date: new Date()
    },

    {
      title: "BTM work",
      description: "Working on analytics",
      duration: 2,
      date: new Date()
    },
  ]

  return (
    <div>
      <InputForm />
      <SessionList sessions={sessionList} />
    </div>
  );
}
