// src/context/AlertContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type AlertType = 'success' | 'error';

interface Alert {
  id: number;
  message: string;
  type: AlertType;
}

interface AlertContextProps {
  alerts: Alert[];
  addAlert: (message: string, type: AlertType) => void;
  removeAlert: (id: number) => void;
}

export const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string, type: AlertType) => {
    const id = Date.now();
    setAlerts((prevAlerts) => [...prevAlerts, { id, message, type }]);
  };

  const removeAlert = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
