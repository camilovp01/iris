export interface ItoDoState {
  id?: number;
  title?: string;
  completed?: boolean;
}

export type ToDoModuleState = Readonly<{
  toDoReducer: ItoDoState[];
}>;

export const toDoinitialState: ItoDoState[] = [];
