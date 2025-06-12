import Session from "@/types/session";

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  console.log("Base url not found ")
  throw new Error("Base Url not found ")
}



export default async function createSessions(session: Session) {
  try {
    const res = await fetch(`${BASE_URL}/session`, {
      method: "POST",
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
