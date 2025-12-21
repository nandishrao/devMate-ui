import io from "socket.io-client";
import { BASE_URL } from "../Constants/constants";

export const socketConnection = ()=>{
    return io(BASE_URL);
}