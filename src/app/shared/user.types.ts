export type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string
}

export type UserCreation = Omit<User, "id">;


