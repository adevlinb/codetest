import sendRequest from './send-request';

const BASE_URL = '/api/todos';

export function create(data) {
    return sendRequest(BASE_URL, "POST", data);
}

export function index() {
    return sendRequest(BASE_URL);
}
