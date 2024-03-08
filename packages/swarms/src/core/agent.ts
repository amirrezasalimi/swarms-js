import LLM from "./llm";
interface Options {
  llm: LLM;
  maxLoop: number;
}

class Agent {
  llm: LLM;
  maxLoop: number;
  constructor({ llm, maxLoop }: Options) {
    this.llm = llm;
    this.maxLoop = maxLoop;
  }
}

export default Agent;
