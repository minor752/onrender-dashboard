'use client';

import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

import type { User } from '@/types/user';
import { paths } from '@/paths';

import axiosInstance from '../axiosInstance';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: '/assets/avatar.png',
  firstName: 'Sofia',
  lastName: 'Rivers',
  email: 'sofia@devias.io',
} satisfies User;

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'discord';
}

export interface SignInWithPasswordParams {
  login: string;
  password: string;
}

export interface ResetPasswordParams {
  login: string;
}

class AuthClient {
  async signUp(_: SignUpParams): Promise<{ error?: string }> {
    // Make API request

    // We do not handle the API, so we'll just generate a token and store it in localStorage.
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);

    return {};
  }

  async signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(params: SignInWithPasswordParams) {
    // : Promise<{ error?: string }>
    const { login, password } = params;

    // Make API request
    // 

    // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.
    if (login !== 'Baxodir' || password !== 'baxodir!@#') {
      return { error: 'Неверные учетные данные' };
    }

    const response = await axiosInstance.post('/login/', { username: login, password }); // Replace with your API endpoint

    if (response.status === 200) {
      const token = generateToken();
      localStorage.setItem('custom-auth-token', token);

      console.log(response.data);
    }

    return { response };
  }

  async resetPassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Сброс пароля не реализован' };
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Сброс обновления не реализован' };
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    // Make API request

    // We do not handle the API, so just check if we have a token in localStorage.
    const token = localStorage.getItem('custom-auth-token');

    if (!token) {
      return { data: null };
    }

    return { data: user };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('custom-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
