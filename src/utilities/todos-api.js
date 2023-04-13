import sendRequest from './send-request';

const BASE_URL = '/api/todos';

export function create(data) {
    return sendRequest(BASE_URL, "POST", data);
}

export function index() {
    return sendRequest(BASE_URL);
}

export function updateTodo(data, id) {
    return sendRequest(`${BASE_URL}/${id}`, "PUT", data);
}

export function deleteTodo(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
