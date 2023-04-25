import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  authorId: number;
}
