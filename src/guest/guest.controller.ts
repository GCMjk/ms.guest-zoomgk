import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { GuestMSG } from '@common/constants';
import { GuestService } from './guest.service';
import { GuestDTO } from './dto/guest.dto';

@Controller()
export class GuestController {
    constructor(
        private readonly _guestService: GuestService
    ) {}

    @MessagePattern(GuestMSG.CREATE)
    create(@Payload() { userId, guestDTO }: { userId: string, guestDTO: GuestDTO }) {
        return this._guestService.create(userId, guestDTO);
    }

    @MessagePattern(GuestMSG.FIND_ALL)
    findAll() {
        return this._guestService.findAll();
    }

    @MessagePattern(GuestMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this._guestService.findOne(id);
    }

    @MessagePattern(GuestMSG.FIND_BY_USER_ID)
    findByUserId(@Payload() userId: string) {
        return this._guestService.findByUserId(userId);
    }

    @MessagePattern(GuestMSG.UPDATE)
    update(@Payload() { id, guestDTO }: { id: string, guestDTO: GuestDTO }) {
        return this._guestService.update(id, guestDTO);
    }

    @MessagePattern(GuestMSG.CONFIRMED)
    confirmedUser(@Payload() token: string) {
        return this._guestService.confirmedGuest(token);
    }

    @MessagePattern(GuestMSG.DELETE)
    delete(@Payload() id: string) {
        return this._guestService.delete(id);
    }
    
}
