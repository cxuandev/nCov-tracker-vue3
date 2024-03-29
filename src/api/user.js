import service from "../utils/axios";

export function userRegister(data) {
  return service.request({
    method: "post",
    url: "/user/register",
    data,
  });
}

export function userLogin(data) {
  return service.request({
    method: "post",
    url: "/user/login",
    data,
  });
}

export function userRegisters() {
  return service.request({
    method: "get",
    url: "/user/registers",
  });
}

export function getEmailCode(email) {
  return service.request({
    method: "get",
    url: `/user/code/${email}`,
  });
}

export function sendEmailCode(email, code) {
  return service.request({
    method: "get",
    url: `/user/code/${email}/${code}`,
  });
}

export function getRegisters(type) {
  return service.request({
    method: "get",
    url: `/user/registers/${type}`,
  });
}

export function userApprove(data) {
  return service.request({
    method: "post",
    url: '/user/approve',
    data
  });
}

export function changePwd(data) {
  return service.request({
    method: "post",
    url: '/user/chpwd',
    data
  });
}