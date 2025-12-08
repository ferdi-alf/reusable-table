/* eslint-disable @typescript-eslint/no-unused-vars */
import { Task, User } from "@/types/users";

const getRandomDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date.toDateString().split("T")[0];
};

const generateTasksForUser = (userId: number, count: number = 5): Task[] => {
  const taskTitles = [
    "Implement authentication system",
    "Fix navbar responsive issue",
    "Update API documentation",
    "Optimize database queries",
    "Create landing page design",
    "Setup CI/CD pipeline",
    "Write unit tests",
    "Refactor user service",
    "Add search functionality",
    "Implement dark mode",
    "Fix memory leak in dashboard",
    "Update dependencies",
    "Create email templates",
    "Setup monitoring tools",
    "Optimize image loading",
    "Implement caching strategy",
    "Add input validation",
    "Create user onboarding flow",
    "Fix security vulnerabilities",
    "Setup backup system",
  ];

  const taskDescriptions = [
    "Need to complete this before the sprint ends",
    "High priority task assigned by team lead",
    "This is blocking other features",
    "Customer requested this feature",
    "Part of the Q4 roadmap",
    "Technical debt that needs addressing",
    "Improvement suggested in code review",
    "Bug reported by QA team",
    "Enhancement for better UX",
    "Required for the upcoming release",
  ];

  const statuses: Array<"pending" | "in-progress" | "completed"> = [
    "pending",
    "in-progress",
    "completed",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: userId * 100 + i + 1,
    userId,
    title: taskTitles[(userId * 5 + i) % taskTitles.length],
    description: taskDescriptions[(userId * 3 + i) % taskDescriptions.length],
    createdAt: getRandomDate(60),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

export const dummyUsers: User[] = [
  {
    id: 1,
    name: "Muhammad Ferdi Alfian",
    username: "ferdialf",
    email: "ferdialf.dev@gmail.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    username: "sitinur",
    email: "siti.nur@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-10",
  },
  {
    id: 3,
    name: "Budi Santoso",
    username: "budisan",
    email: "budi.santoso@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    username: "dewiles",
    email: "dewi.lestari@example.com",
    totalTasks: 5,
    status: "inactive",
    createdAt: "2024-03-05",
  },
  {
    id: 5,
    name: "Ahmad Zulkifli",
    username: "ahmadzul",
    email: "ahmad.zul@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-18",
  },
  {
    id: 6,
    name: "Rina Wijaya",
    username: "rinawij",
    email: "rina.wijaya@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-28",
  },
  {
    id: 7,
    name: "Eko Prasetyo",
    username: "ekopras",
    email: "eko.prasetyo@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-03-12",
  },
  {
    id: 8,
    name: "Lina Marlina",
    username: "linamar",
    email: "lina.marlina@example.com",
    totalTasks: 5,
    status: "inactive",
    createdAt: "2024-02-22",
  },
  {
    id: 9,
    name: "Rahmat Hidayat",
    username: "rahmathid",
    email: "rahmat.hidayat@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-08",
  },
  {
    id: 10,
    name: "Putri Ayu",
    username: "putriayu",
    email: "putri.ayu@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-03-01",
  },
  {
    id: 11,
    name: "Yudi Setiawan",
    username: "yudiset",
    email: "yudi.setiawan@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-05",
  },
  {
    id: 12,
    name: "Maya Sari",
    username: "mayasar",
    email: "maya.sari@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-18",
  },
  {
    id: 13,
    name: "Bambang Sutrisno",
    username: "bambangsu",
    email: "bambang.su@example.com",
    totalTasks: 5,
    status: "inactive",
    createdAt: "2024-03-08",
  },
  {
    id: 14,
    name: "Ani Yudhoyono",
    username: "aniyud",
    email: "ani.yud@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-14",
  },
  {
    id: 15,
    name: "Doni Kurniawan",
    username: "donikur",
    email: "doni.kurniawan@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-25",
  },
  {
    id: 16,
    name: "Fitri Handayani",
    username: "fitrihan",
    email: "fitri.handayani@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-03-15",
  },
  {
    id: 17,
    name: "Hendra Gunawan",
    username: "hendragun",
    email: "hendra.gun@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-28",
  },
  {
    id: 18,
    name: "Intan Permata",
    username: "intanper",
    email: "intan.permata@example.com",
    totalTasks: 5,
    status: "inactive",
    createdAt: "2024-01-12",
  },
  {
    id: 19,
    name: "Joko Widodo",
    username: "jokowid",
    email: "joko.widodo@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-03-20",
  },
  {
    id: 20,
    name: "Kartika Sari",
    username: "kartikas",
    email: "kartika.sari@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-08",
  },
  {
    id: 21,
    name: "Lukman Hakim",
    username: "lukmanhak",
    email: "lukman.hakim@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-30",
  },
  {
    id: 22,
    name: "Mega Wati",
    username: "megawat",
    email: "mega.wati@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-03-10",
  },
  {
    id: 23,
    name: "Nugroho Adi",
    username: "nugrohoadi",
    email: "nugroho.adi@example.com",
    totalTasks: 5,
    status: "inactive",
    createdAt: "2024-02-16",
  },
  {
    id: 24,
    name: "Olivia Tan",
    username: "oliviatan",
    email: "olivia.tan@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-22",
  },
  {
    id: 25,
    name: "Purnomo Hadi",
    username: "purnomohad",
    email: "purnomo.hadi@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-03-18",
  },
  {
    id: 26,
    name: "Qori'ah Shihab",
    username: "qoriah",
    email: "qoriah.shihab@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-25",
  },
  {
    id: 27,
    name: "Rudi Hartono",
    username: "rudihar",
    email: "rudi.hartono@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-16",
  },
  {
    id: 28,
    name: "Siska Melati",
    username: "siskamel",
    email: "siska.melati@example.com",
    totalTasks: 5,
    status: "inactive",
    createdAt: "2024-03-22",
  },
  {
    id: 29,
    name: "Tono Sumarno",
    username: "tonosum",
    email: "tono.sumarno@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-02-12",
  },
  {
    id: 30,
    name: "Umi Kalsum",
    username: "umikalsum",
    email: "umi.kalsum@example.com",
    totalTasks: 5,
    status: "active",
    createdAt: "2024-01-26",
  },
];

export const allTaskk: Task[] = dummyUsers.flatMap((user) =>
  generateTasksForUser(user.id, 5)
);

export const getUsersWithTask = (limit: number = 15): User[] => {
  return dummyUsers.slice(0, limit).map((user) => ({
    ...user,
    tasks: allTaskk.filter((task) => task.userId === user.id),
  }));
};

export const getUsersWithoutTasks = (limit: number = 15): User[] => {
  return dummyUsers.slice(0, limit).map((user) => {
    const { tasks, ...userWthoutTasks } = user;
    return userWthoutTasks;
  });
};

export const getTasksByUserId = (userId: number): Task[] => {
  return allTaskk.filter((task) => task.id === userId);
};
