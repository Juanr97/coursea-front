import React, { createContext, useContext, useState, useCallback, useRef } from "react";

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");
  const timeoutRef = useRef(null);

  const showAlert = useCallback((message, type = "success") => {
    setMessage(message);
    setType(type);
    setIsOpen(true);

    // Limpiar cualquier temporizador existente antes de crear uno nuevo
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Cerrar la alerta automáticamente después de 3 segundos
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      timeoutRef.current = null;
    }, 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ isOpen, message, type, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};