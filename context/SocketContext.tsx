import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";
const URL = "http://192.168.183.246:3000";




const SocketContext = createContext<Socket | null>(null);

// SocketProvider component
export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize the socket using useMemo
    const socket = React.useMemo(() => io(URL, {
        transports: [ "polling"],
        withCredentials: true
    }), []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};


export const useSocket = () => {
    const socket = React.useContext(SocketContext);
    if (!socket) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return socket;
}