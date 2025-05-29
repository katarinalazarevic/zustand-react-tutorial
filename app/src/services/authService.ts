import axios from "axios";
import requests from "src/services/apiService";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
}

export interface PasswordResetRequest {
  token: string;
  password: string;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.get(`http://localhost:5000/users`, {
      params: { email, password }
    });

    if (response.data.length > 0){
      const user = response.data[0]; 

      return user
    }
    else{
      console.error("Login failed")
    }
  } catch (err) {
    console.error("Login failed");
  }
};

export const createNewPassword = async (token: string, password: string): Promise<boolean> => {
  try {
    const body: PasswordResetRequest = { token, password };

    const response = await requests.post<boolean>('/Users/create-new-password', body);

    return response;

  } catch (error) {
    console.error('Reset failed', error);
    throw error;
  }
};

export const refreshTokenAsync = async (token: string): Promise<LoginResponse> => {
  try {
    const body = { token };

    const response = await requests.post<LoginResponse>('/Authentication/refresh', body);

    return response;


  } catch (error) {
    console.error('Refresh token failed', error);
    throw error;
  }
};

export const sendEmailForPasswordReset = async (email: string): Promise<void> => {
  try {

    await requests.postAsQuery<void>(`/Users/${email}`);

  } catch (error) {
    console.error('Send reset link failed', error);
    throw error;
  }
};

