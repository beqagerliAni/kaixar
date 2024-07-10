import { CreateProductDto } from "./create-pruduct.dto";
import { PartialType } from '@nestjs/mapped-types';
export class UpdateProductDto  extends PartialType(CreateProductDto) {}