import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { WebSocketGateway } from '@nestjs/websockets/decorators/socket-gateway.decorator';
import { TickerMessage } from '@spark-fountain/alias-game';
import { Client, Server } from 'socket.io';
import { from, Observable, of } from 'rxjs';

import { concatMap, delay } from 'rxjs/operators';

export const mockData: TickerMessage[] = [
  {
    type: 'Tor',
    timeInSec: 400,
    message: 'Ibrahimovic schießt das 1:0 für die LA Galaxy',
  },
  {
    type: 'Auswechslung',
    timeInSec: 1600,
    message: 'Auswechslung bei LA Galaxy aufgrund von Verletzung',
  },
  {
    type: 'Strafstoß',
    timeInSec: 2300,
    message: 'LA Galaxy mit der Chance zum 2:0',
  },
];

@WebSocketGateway()
export class LivetickerGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  views = 0;

  async handleConnection() {
    this.views++;
    this.server.emit('views', this.views);
  }

  async handleDisconnect() {
    this.views--;
    this.server.emit('views', this.views);
  }

  @SubscribeMessage('liveticker')
  handleLiveticker(client: Client, data: unknown): Observable<any> {
    return from(mockData).pipe(
      concatMap((tickerMessage: TickerMessage) => {
        return of({ event: 'liveticker', data: tickerMessage }).pipe(
          delay(2000)
        );
      })
    );
  }
}
