export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: string; // ISO format
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  responsible: string;
}