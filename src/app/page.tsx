import InputForm from "@/components/form";
import SessionList from "@/components/session-list";
import SessionProps from "@/types/sessionProps";
import { formatSession, getAllSessionsByUserId } from "./api/utils";
import Session from "@/types/session";

export default async function Home() {
  const sessionsRaw: Session[] | undefined = await getAllSessionsByUserId("1");
  const sessionList: SessionProps[] | undefined = formatSession(sessionsRaw);

  console.dir(sessionsRaw)

  if (typeof sessionsRaw == undefined) {
    throw new Error("Bruh fuck my life ")
  }


  return (
    <div>
      <InputForm />
      <SessionList sessions={sessionList} />
    </div>
  );
}
