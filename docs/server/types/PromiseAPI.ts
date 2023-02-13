import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Task } from '../models/Task';
import { ObservableTaskApi } from './ObservableAPI';

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class PromiseTaskApi {
    private api: ObservableTaskApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a single Task
     * Find task by id
     * @param id task id
     */
    public getTaskById(id: number, _options?: Configuration): Promise<Task> {
        const result = this.api.getTaskById(id, _options);
        return result.toPromise();
    }

    /**
     * Return a single Task
     * Find task by id
     * @param id task id
     */
    public getTaskById_1(id: number, _options?: Configuration): Promise<Task> {
        const result = this.api.getTaskById_1(id, _options);
        return result.toPromise();
    }


}



