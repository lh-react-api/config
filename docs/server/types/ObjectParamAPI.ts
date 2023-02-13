import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Task } from '../models/Task';

import { ObservableTaskApi } from "./ObservableAPI";
import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";

export interface TaskApiGetTaskByIdRequest {
    /**
     * task id
     * @type number
     * @memberof TaskApigetTaskById
     */
    id: number
}

export interface TaskApiGetTaskById0Request {
    /**
     * task id
     * @type number
     * @memberof TaskApigetTaskById_1
     */
    id: number
}

export class ObjectTaskApi {
    private api: ObservableTaskApi

    public constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a single Task
     * Find task by id
     * @param param the request object
     */
    public getTaskById(param: TaskApiGetTaskByIdRequest, options?: Configuration): Promise<Task> {
        return this.api.getTaskById(param.id,  options).toPromise();
    }

    /**
     * Return a single Task
     * Find task by id
     * @param param the request object
     */
    public getTaskById_1(param: TaskApiGetTaskById0Request, options?: Configuration): Promise<Task> {
        return this.api.getTaskById_1(param.id,  options).toPromise();
    }

}
