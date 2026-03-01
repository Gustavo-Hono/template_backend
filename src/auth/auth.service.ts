import { HttpException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async validateUser({ email, password }: AuthPayloadDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password!);

    if (!passwordMatch) {
      throw new HttpException('Credenciais inválidas', 401);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...payload } = user;
    return payload;
  }

  login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async createUser({ email, password }: AuthPayloadDto) {
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;

    const verifyUser = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (verifyUser) {
      throw new HttpException('User already registered', 409);
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return { message: 'User created' };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
