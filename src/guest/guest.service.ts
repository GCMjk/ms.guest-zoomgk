import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as uuid from 'uuid';

import { GUEST } from '@common/models/models';
import { IGuest } from '@common/interfaces/guest.interface';
import { GuestDTO } from './dto/guest.dto';

@Injectable()
export class GuestService {
    constructor(
        @InjectModel(GUEST.name) private readonly model: Model<IGuest>
    ) {}

    async create (userId: string, guestDTO: GuestDTO): Promise<IGuest> {
        const confirmationToken = uuid.v4();
        const newGuest = new this.model({
            userID: userId,
            ...guestDTO,
            confirmationToken
        });

        return await newGuest.save();
    }

    async findAll (): Promise<IGuest[]> {
        return await this.model.find()
            .populate('userID');
    }

    async findOne (id: string): Promise<IGuest> {
        return await this.model.findById(id)
            .populate('userID');
    }

    async update (id: string, guestDTO: GuestDTO): Promise<IGuest> {
        return await this.model.findByIdAndUpdate(
            id,
            guestDTO,
            { new: true }
        ).populate('userID');
    }

    async confirmedGuest (token: string) {
        const guest = await this.model.findOne({ confirmationToken: token });

        if (!guest) {
            throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
        }

        guest.confirmed = true;
        guest.confirmationToken = undefined;
        await guest.save();

        return guest;
    }

    async delete (id: string) {
        await this.model.findByIdAndDelete(id);

        return {
            status: HttpStatus.OK,
            message: 'Guest deleted successfully'
        }
    }
}