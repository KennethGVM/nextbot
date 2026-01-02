import { NextRequest } from "next/server";
import OpenAI from "openai";

const assistantId = "asst_yZYFEoN5SaZVmSqKu1zgJYrb";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function waitForResult(threadId: string, runId: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    async function verifyStatus() {
      try {
        const currentRun = await openai.beta.threads.runs.retrieve(runId, {
          thread_id: threadId,
        });
        if (currentRun.status === "completed") {
          resolve();
        } else {
          console.log(currentRun.status);
          setTimeout(verifyStatus, 1000);
        }
      } catch (error) {
        console.error("Error al obtener el resultado:", error);
        reject(error);
      }
    }
    verifyStatus();
  });
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const textToSearch = params.get("search");

  let result: string = "";

  if (!textToSearch) {
    return Response.json({ data: result });
  }

  try {
    const assistant = await openai.beta.assistants.retrieve(assistantId);
    const thread = await openai.beta.threads.create();
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: textToSearch,
    });
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
    });

    await waitForResult(thread.id, run.id);

    const messages = await openai.beta.threads.messages.list(thread.id);
    messages.data.forEach((message) => {
      if (message.role === "assistant") {
        message.content.forEach((item) => {
          if (item.type === "text") {
            result = item.text.value;
          }
        });
      }
    });
  } catch (error) {
    console.error("No se pudo obtener el asistente:", error);
  }
  return Response.json({ data: result });
}
