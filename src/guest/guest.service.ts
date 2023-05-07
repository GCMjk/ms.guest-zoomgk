import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GUEST } from '@common/models/models';
import { IGuest } from '@common/interfaces/guest.interface';
import { GuestDTO } from './dto/guest.dto';

@Injectable()
export class GuestService {
    constructor(
        @InjectModel(GUEST.name) private readonly model: Model<IGuest>
    ) {}

    async create (guestDTO: GuestDTO): Promise<IGuest> {
        const newGuest = new this.model(guestDTO);

        return await newGuest.save();
    }

    async findAll (): Promise<IGuest[]> {
        return await this.model.find();
    }

    async findOne (id: string): Promise<IGuest> {
        return await this.model.findById(id);
    }

    async update (id: string, guestDTO: GuestDTO): Promise<IGuest> {
        return await this.model.findByIdAndUpdate(
            id,
            guestDTO,
            { new: true }
        );
    }

    async delete (id: string) {
        await this.model.findByIdAndDelete(id);

        return {
            status: HttpStatus.OK,
            message: 'User deleted successfully'
        }
    }
}