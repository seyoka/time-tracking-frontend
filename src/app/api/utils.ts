import Session from "@/types/session";

const BASE_URL = "http://localhost:3000/api"
if (!BASE_URL) {
  console.log("Base url not found ")
  throw new Error("Base Url not found ")
}



async function createSessions(session: Session) {
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

async function getAllSessionsByUserId(id: string) {

  try {
    const res = await fetch(`${BASE_URL}/sessions/${id}`,
      {
        method: "GET",
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

export { getAllSessionsByUserId, createSessions };  
