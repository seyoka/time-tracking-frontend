"use client"
import InputForm from "@/components/form";
import SessionList from "@/components/session-list";
import { formatActiveSession, formatSession, getActiveSession, getAllSessionsByUserId } from "./api/utils";
import Session from "@/types/session";
import ActiveSession from "@/components/active-session";
import { useEffect, useState } from "react";

interface ActiveSessionProps {
  title: string;
  description: string;
  start_time: Date;
  date: Date;
  elapsedTime?: string;
  end_time: Date;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionList, setSessionList] = useState<Session[]>([]);
  const [activeSession, setActiveSession] = useState<ActiveSessionProps>({});
  const [end_time, setEndTime] = useState<Date>(new Date());

  useEffect(() => {
    const fetchSessionList = async () => {
      try {
        const sessionsRaw: Session[] | undefined = await getAllSessionsByUserId("1");
        setSessionList(formatSession(sessionsRaw));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected Error while fetching sessions");
      } finally {
        setLoading(false);
      }
    }
    const fetchActiveSession = async () => {
      try {
        const rawActiveSession = await getActiveSession("1");
        console.dir(rawActiveSession[0].session);
        setActiveSession(formatActiveSession(rawActiveSession[0].session));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected Error while fetching sessions");
      } finally {
        setLoading(false);
      }
    }
    fetchSessionList();
    fetchActiveSession();
  }, [])

  console.dir(activeSession)

  return (
    <div>
      <InputForm />
      {
        loading ? <p>Loading...</p> :
          <div>
            <ActiveSession session={activeSession} />
            <SessionList sessions={sessionList} />
          </div>
      }
    </div>
  );
}
