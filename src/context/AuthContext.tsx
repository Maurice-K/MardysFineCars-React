import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../supabase-client';
import { AuthError, AuthTokenResponsePassword, Session } from '@supabase/supabase-js';

export interface AuthValues {
  session?: Session | null;
  signInUser: (email: string, password: string) => Promise<any>;
  signOutUser: () => Promise<any>;
}

const AuthContext = createContext({} as AuthValues);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [session, setSession] = useState<Session | null>(null);

  const signInUser = async (email: string, password: string): Promise<any> => {
    try {
      const { data, error }: AuthTokenResponsePassword = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      if (error) {
        return { success: false, error: error.message };
      }
      console.log('Supabase Sign-In Success', data);
      return { success: true, data: data };
    } catch (error: any) {
      console.error('Error Signing in', error.message);
      return { success: false, error: error.message };
    }
  };

  const signOutUser = async (): Promise<any> => {
    try {
      const { error }: any = supabase.auth.signOut();
      if (error) {
        console.log('Supabase sign-in error', error.message);

        return { success: false, error: error.message };
      }
    } catch (error: any) {
      console.error('Unexpected Error', error.message);
      return { success: false, error: error.message };
    }
  };

  async function getInitialSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      }
      setSession(data.session);
    } catch (error) {
      console.error('Error retrieving initial session', error);
    }
  }

  useEffect(() => {
    getInitialSession();

    const { data: authStateListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      setSession(session);
      console.log('Session Changed', session);
    });

    () => {
      authStateListener.subscription.unsubscribe();
    };
  }, []);

  return <AuthContext value={{ session, signInUser, signOutUser }}>{children}</AuthContext>;
};
