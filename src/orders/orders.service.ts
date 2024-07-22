import { Injectable } from '@nestjs/common';
import { Orderdto } from './dto/create-order.dto';
import { OrderRepository } from './repository/orders.repository';

@Injectable()
export class OrdersService {
    constructor(private orderRepo:OrderRepository) {}
    create(createOrderDto:Orderdto){
        return this.orderRepo.create(createOrderDto)
    }
}
