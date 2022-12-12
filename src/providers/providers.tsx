import React, {useContext, useEffect, useState} from 'react';
import {User, activeUser} from '../types';
import auth from '@react-native-firebase/auth';

export interface AppDataProvider {
  activeUser: User;
  setActiveUser: (value: User) => void;
}

export const Context = React.createContext<any>({});

export const useAppData = (): AppDataProvider => {
  return useContext(Context);
};

const AppStateProvider = ({children}: any) => {
  const [activeUser, setActiveUser] = React.useState<User>({
    id: auth().currentUser?.uid || '',
    name: auth().currentUser?.displayName || '',
    email: auth().currentUser?.email || '',
  });

  return (
    <Context.Provider
      value={{
        activeUser: activeUser,
        setActiveUser,
      }}>
      {children}
    </Context.Provider>
  );
};

export default AppStateProvider;
