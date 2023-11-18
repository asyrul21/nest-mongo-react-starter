import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { MyModuleService } from './my-module.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { AdminGuard } from 'src/guards/admin.guard';

@Controller('/api/items')
export class MyModuleControllerController {
  constructor(private itemService: MyModuleService) {}

  @Get()
  getAllItems() {
    return this.itemService.getAllItems();
  }

  @Get('/:id')
  getItemsById(@Param('id') id: string) {
    return this.itemService.getItemsById(id);
  }

  @UseGuards(AdminGuard)
  @Post()
  createNewItem(@Body() payload: CreateItemDto) {
    return this.itemService.createItem(payload);
  }

  @UseGuards(AdminGuard)
  @Put('/:id')
  updateItemById(@Param('id') id: string, @Body() payload: UpdateItemDto) {
    return this.itemService.updateItemById(id, payload);
  }

  @UseGuards(AdminGuard)
  @Delete('/:id')
  deleteItemById(@Param('id') id: string) {
    return this.itemService.deleteItemById(id);
  }

  @Get()
  myPublicRoute() {
    return 'Hello World!';
  }

  @Get('/admin')
  @UseGuards(AuthGuard)
  myPrivateRoute() {
    return 'Well Done!';
  }
}
