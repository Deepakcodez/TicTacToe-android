import { io, Socket } from "socket.io-client";

const socketURL = "http://192.168.40.246:3000";

//add type   to the class
class WSservice {
  socket: Socket | undefined;

  initializeSocket = async () => {
    try {
      this.socket = io(socketURL, {
        transports: ["polling"],
      });
      console.log(">>>>>>>>>>>Web socket initialized");

      this.socket.on("connect", () => {
        console.log(">>>>>>>>>>>Connected to socket server");
      });

      this.socket.on("disconnect", () => {
        console.log(">>>>>>>>>>>Disconnected from socket server");
      });

      this.socket.on("connect_error", (error: any) => {
        console.log(">>>>>>>>>>>Connection error", error);
      });
    } catch (error) {
      console.log(">>>>>>>>>>>Failed in intilizing web sockets", error);
    }
  };

  emit(event: any, data = {}) {
    this.socket?.emit(event, data);
  }
  on(event: any, cb: any) {
    this.socket?.on(event, cb);
  }
  removeListner(listner: any) {
    this.socket?.removeAllListeners(listner);
  }
}

export const socketService = new WSservice();
