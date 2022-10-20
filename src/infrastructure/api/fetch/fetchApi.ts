const headers = {
  "Content-Type": "application/json",
};

const get = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  return await response.json();
};

const post = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
  });
  return await response.json();
};

const put = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: "PUT",
    headers,
    body,
  });
  return await response.json();
};

const _delete = async (url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });
  return await response.json();
};

export const fetchApi = {
  get,
  post,
  put,
  delete: _delete,
};
