import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WalletEntity } from './entities/wallet.entity';

@Controller('wallets')
@ApiTags('Overall Wallet')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  @ApiCreatedResponse({ type: WalletEntity })
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletsService.create(createWalletDto);
  }

  @Get()
  @ApiOkResponse({ type: WalletEntity, isArray: true })
  findAll() {
    return this.walletsService.findAll();
  }
  //Get the total sum of balances in an overal wallet

  @Get('wallets')
  @ApiOkResponse({ type: WalletEntity })
  findWallet() {
    return this.walletsService.findWallet();
  }

  //End of Overal wallet calculations

  @Get(':id')
  @ApiOkResponse({ type: WalletEntity })
  findOne(@Param('id') id: string) {
    return this.walletsService.findOne(id);
  }

  @Get(':tot')
  @ApiOkResponse({ type: WalletEntity })
  findTot(@Param('id') id: string) {
    return this.walletsService.findTot();
  }

  @Patch(':id')
  @ApiOkResponse({ type: WalletEntity })
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(id, updateWalletDto);
  }

  @Get('findTotalBalance')
  findTotalBalance() {
    return this.walletsService.findTotalBalance();
  }

  @Delete(':id')
  @ApiOkResponse({ type: WalletEntity })
  remove(@Param('id') id: string) {
    return this.walletsService.remove(id);
  }
}
