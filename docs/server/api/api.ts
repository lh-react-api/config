export * from './addresses.service';
import { AddressesService } from './addresses.service';
export * from './auth.service';
import { AuthService } from './auth.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AddressesService, AuthService, UsersService];
