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
    create(@Payload() guestDTO: GuestDTO) {
        return this._guestService.create(guestDTO);
    }

    @MessagePattern(GuestMSG.FIND_ALL)
    findAll() {
        return this._guestService.findAll();
    }

    @MessagePattern(GuestMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this._guestService.findOne(id);
    }

    @MessagePattern(GuestMSG.UPDATE)
    update(@Payload() payload: { id: string, guestDTO: GuestDTO }) {
        return this._guestService.update(payload.id, payload.guestDTO);
    }

    @MessagePattern(GuestMSG.DELETE)
    delete(@Payload() id: string) {
        return this._guestService.delete(id);
    }
    
}
