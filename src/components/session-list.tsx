import SessionProps from "@/types/sessionProps";
import SessionEntry from "./session";

export default function SessionList({ sessions }: { sessions: SessionProps[] | undefined }) {

  if (!sessions) {
    throw new Error("Bruh what the fuck ");
  }

  const sessionList = sessions.map((session, index) => (
    <li key={index}>
      <SessionEntry title={session.title} description={session.description} duration={session.duration} date={session.date} />
    </li>
  ));
  return (
    <ul>
      {sessionList}
    </ul >
  )
}
