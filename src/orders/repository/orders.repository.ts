import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../entity/order.entity";
import { Repository } from "typeorm";
import { Orderdto } from "../dto/create-order.dto";
import { ProductEntity } from "src/products/entity/product.entity";
@Injectable()
export class OrderRepository {
    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}
    async create(createOrderDto: Orderdto){
        console.log(createOrderDto);
        
        const order = new Order()
        order.orderNumber  = createOrderDto.orderNumber
        const prodyctAraay = []
        for(const productId of createOrderDto.productId) {
            const product = new ProductEntity()
            product.id = productId
            prodyctAraay.push(product)
        }
        order.products = prodyctAraay
        return await this.orderRepository.save(order)
    }
}