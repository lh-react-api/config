export * from './default.service';
import { DefaultService } from './default.service';
export * from './task.service';
import { TaskService } from './task.service';
export const APIS = [DefaultService, TaskService];
