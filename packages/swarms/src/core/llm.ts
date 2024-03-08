import {
  BaseChatModel,
  type BaseChatModelParams,
} from "@langchain/core/language_models/chat_models";

abstract class LLM extends BaseChatModel {
  constructor() {
    super({});
  }
}
export default LLM;
