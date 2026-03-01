import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuards } from './guards/local.guard';
import type { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("login")
  @UseGuards(LocalGuards)
  login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Post("register")
  // @UseGuards(LocalGuards)
  register(@Body() createAuthDto: AuthPayloadDto) {
    return this.authService.createUser(createAuthDto);
  }

  @Get("status")
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log(req.user)
    console.log(30924)
    return this.authService.findAll();
  }

  @Get()
  findOne() {
    return this.authService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
