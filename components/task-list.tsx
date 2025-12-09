import { Task } from "@/types/users";

const TasksList = ({
  tasks,
  loading,
  error,
}: {
  tasks?: Task[];
  loading: boolean;
  error: string | null;
}) => {
  if (loading) {
    return (
      <div className="space-y-2">
        <div className="h-4 bg-muted animate-pulse rounded" />
        <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
        <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-destructive">
        Failed to load tasks: {error}
      </div>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">No tasks available</div>
    );
  }

  return (
    <div className="space-y-2 ">
      <h4 className="text-sm font-semibold mb-2">Tasks:</h4>

      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="border-l-2  p-3 shadow-lg bg-zinc-50 border-primary pl-3 py-1"
          >
            <div className="font-medium text-sm">{task.title}</div>
            <div className="text-xs text-muted-foreground">
              {task.description}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
