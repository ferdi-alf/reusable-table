export interface Task {
  id: number;
  userId: number;
  title: string;
  description: string;
  createdAt: string;
  status: "pending" | "in-progress" | "completed";
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  totalTasks: number;
  status: "active" | "inactive";
  createdAt: string;
  tasks?: Task[];
}
