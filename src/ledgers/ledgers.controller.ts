import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LedgersService } from './ledgers.service';
import { CreateLedgerDto } from './dto/create-ledger.dto';
import { UpdateLedgerDto } from './dto/update-ledger.dto';
import { ApiAcceptedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LedgerEntity } from './entities/ledger.entity';
import { getgroups } from 'process';

@Controller('ledgers')
@ApiTags('Ledger Accounts')
export class LedgersController {
  constructor(private readonly ledgersService: LedgersService) {}

  @Post()
  @ApiAcceptedResponse({ type: LedgerEntity })
  create(@Body() createLedgerDto: CreateLedgerDto) {
    return this.ledgersService.create(createLedgerDto);
  }

  @Get()
  @ApiOkResponse({ type: LedgerEntity, isArray: true })
  findAll() {
    return this.ledgersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LedgerEntity })
  findOne(@Param('id') id: string) {
    return this.ledgersService.findOne(id);
  }

  //Get total of all the balances

  @Get('Total Ledger')
  @ApiOkResponse({ type: LedgerEntity })
  getTotal() {
    return this.ledgersService.getTotal();
  }

  @Get('totalLg')
  @ApiOkResponse({ type: LedgerEntity })
  totalLg() {
    return this.ledgersService.totalLg();
  }

  @Patch(':Update')
  @ApiOkResponse({ type: LedgerEntity })
  update(@Param('id') id: string, @Body() updat: UpdateLedgerDto) {
    return this.ledgersService.update(id, updat);
  }

  @Delete(':Delete')
  @ApiOkResponse({ type: LedgerEntity })
  remove(@Param('del') id: string) {
    return this.ledgersService.remove(id);
  }
}
