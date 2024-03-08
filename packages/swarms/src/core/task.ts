import Agent from "./agent";

class Task {
  id?: string;
  agent: Agent;
  instructions: string = "";
  response?: string;
  constructor(agent: Agent, instructions: string) {
    this.agent = agent;
    this.instructions = instructions;
  }
  public async run(): Promise<string | undefined> {
    const response = (
      await this.agent.llm.invoke(this.instructions)
    ).content?.toString();
    this.response = response;
    return response;
  }
}

export default Task;
