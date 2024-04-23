import { IsNotEmpty } from 'class-validator';

export class CreateQrcodeDto {
  @IsNotEmpty()
  private readonly code?: any;
}
