import TransportManager from './transport_manager';
import Transport from './transport';
import PingDelayOptions from './ping_delay_options';
export default class AssistantToTheTransportManager implements PingDelayOptions {
    manager: TransportManager;
    transport: Transport;
    minPingDelay: number;
    maxPingDelay: number;
    pingDelay: number;
    constructor(manager: TransportManager, transport: Transport, options: any);
    createConnection(name: string, priority: number, key: string, options: Object): any;
    isSupported(environment: any): boolean;
}
