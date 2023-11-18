import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/models/Item';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class MyModuleService {
  constructor(
    @InjectModel(Item.name)
    private ItemModel: Model<ItemDocument>,
  ) {}

  async getAllItems() {
    return await this.ItemModel.find();
  }

  async getItemsById(id: string) {
    try {
      return await this.ItemModel.findById(id);
    } catch (error) {
      throw new NotFoundException(
        `Cannot find item with id ${id}:` + error.message,
      );
    }
  }

  async createItem(payload: CreateItemDto) {
    try {
      const CreatedItem = new this.ItemModel(payload);
      return await CreatedItem.save();
    } catch (error) {
      throw new BadRequestException('Create new item failed: ' + error.message);
    }
  }

  async updateItemById(id: string, payload: UpdateItemDto) {
    try {
      const Item = await this.ItemModel.findById(id);
      if (Item) {
        Object.keys(payload).forEach((k) => {
          Item[k] = payload[k];
        });
        return await Item.save();
      }
      throw new NotFoundException(`Cannot find item with id ${id}`);
    } catch (error) {
      throw new BadRequestException(
        `Update Item with id ${id} failed:` + error.message,
      );
    }
  }

  async deleteItemById(id: string) {
    try {
      const Item = await this.ItemModel.findById(id);
      if (Item) {
        return await Item.deleteOne();
      }
      throw new NotFoundException(`Cannot find item with id ${id}`);
    } catch (error) {
      throw new NotFoundException(
        `Cannot find item with id ${id}:` + error.message,
      );
    }
  }
}
