import { Task } from "..";

interface Options {
  tasks?: Task[];
  max_workers?: number;
}
class ConcurrentWorkFlow {
  tasks: Task[] = [];
  constructor({ tasks = [] }: Options = {}) {
    this.tasks = tasks;
  }
  addTask(tasks: Task[]): void {
    this.tasks.push(...tasks);
  }
  async run(): Promise<Task[]> {
    return Promise.all(this.tasks.map((task) => task.run())).then(
      () => this.tasks
    );
  }
}

export default ConcurrentWorkFlow;
