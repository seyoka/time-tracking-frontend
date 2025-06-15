import Session from "@/types/session";
import SessionProps from "@/types/sessionProps";

const BASE_URL = "http://localhost:3000/api"
if (!BASE_URL) {
  console.log("Base url not found ")
  throw new Error("Base Url not found ")
}



async function createSessions(session: Session) {
  console.log("Session from api", session)
  try {
    console.log(JSON.stringify(session))

    const res = await fetch(`${BASE_URL}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    });

    if (!res.ok) {
      throw new Error(`Res status: ${res.status}`)
    }

    const json = await res.json();
    console.log(json)
  } catch (error) {
    console.log(error);
  }
}

async function getAllSessionsByUserId(id: string) {

  try {
    const res = await fetch(`${BASE_URL}/sessions/${id}`,
      {
        method: "GET",
      }
    );

    const data = await res.json()
    return data as Session[]
  } catch (error) {
    console.log(error);
  }
}

async function getActiveSession(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/active-session/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json()
    return data as Session[]

  } catch (error) {
    console.log(error)
    throw new Error("getActiveSession failed");
  }
}

function formatSession(rawSessions: { session: Session | undefined }[]) {
  const sessionList: SessionProps[] = []

  if (!rawSessions || !Array.isArray(rawSessions)) {
    return [];
  }
  rawSessions.forEach((session) => {
    sessionList.push({
      title: session.session!.title,
      description: session.session!.description,
      date: new Date(session.session!.start_time),
      duration: (new Date(session.session!.end_time!).getTime() - new Date(session.session!.start_time!).getTime()) / (1000 * 60 * 60)
    })
  })

  return sessionList;
}

function formatActiveSession(rawActiveSession: Session) {
  if (!rawActiveSession) {
    return []
  }


  return {
    title: rawActiveSession.title,
    description: rawActiveSession.description,
    start_time: new Date(rawActiveSession.start_time),
    date: new Date(rawActiveSession.start_time),
    end_time: new Date(rawActiveSession.end_time),
    elapsedTime: "0"
  };
}

export { getAllSessionsByUserId, createSessions, formatSession, getActiveSession, formatActiveSession };  
