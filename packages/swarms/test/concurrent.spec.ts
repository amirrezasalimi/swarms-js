import { expect, test } from "@jest/globals";
import ConcurrentWorkFlow from "../src/workflows/concurrent";
import { ChatOpenAI } from "@langchain/openai";
import { Agent, Task } from "../src";

const OPENAI_API_KEY =
  "xyz";
const OPENAI_BASE = "https://openrouter.ai/api/v1";

test("concurrent workflow", async () => {
  const flow = new ConcurrentWorkFlow();
  const llm = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
    configuration: {
      baseURL: OPENAI_BASE,
    },
  });
  const agent = new Agent({ llm, maxLoop: 2 });
  const task1 = new Task(
    agent,
    "make a short blogpost about Javascript async/await in readme format:"
  );
  flow.addTask([task1]);
  const results = await flow.run();
  expect(results[0]?.response).toBeTruthy();
  console.log(`task1 response: `, results[0]);
}, 20000);
