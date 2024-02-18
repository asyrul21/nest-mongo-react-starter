import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { SocketEvents } from './socket.constants';

@Injectable()
export class SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();

  constructor() {}

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on('connection', () => {
      socket.emit(SocketEvents.serverReady);
    });

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });
  }
}
