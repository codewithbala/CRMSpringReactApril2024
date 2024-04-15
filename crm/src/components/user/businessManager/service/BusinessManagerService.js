import axios from "axios";

const BUSINESS_BASE_URL = "http://localhost:8080/api/business/";

/* Request handling functions for Business Employees */
export const getAllBusinessEmployees = () => {
  return axios.get(BUSINESS_BASE_URL);
};

export const getBusinessEmployeeById = (employeeId) => {
  return axios.get(BUSINESS_BASE_URL + "/" + employeeId);
};

export const createBusinessEmployee = (employee) => {
  return axios.post(BUSINESS_BASE_URL, employee);
};

export const updateBusinessEmployee = (employeeId, employee) => {
  return axios.put(BUSINESS_BASE_URL + "/" + employeeId);
};

export const deleteBusinessEmployee = (employeeId) => {
  return axoios.delete(BUSINESS_BASE_URL + "/" + employeeId);
};

/* Business Manager authentication function will go here*/
