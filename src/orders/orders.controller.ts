import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orderdto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private orderService:OrdersService) {}

    @Post()
    create(@Body() createOrderDto:Orderdto){
        return this.orderService.create(createOrderDto)
    }
    
}
