import { PartialType } from '@nestjs/mapped-types';
import { AuthPayloadDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(AuthPayloadDto) {}
