import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma, Book } from "@prisma/client";


@Injectable()
export class BooksService {

  constructor(private prisma: PrismaService) {
  }

  async create(dto: Prisma.BookUncheckedCreateInput): Promise<Book> {
    return this.prisma.book.create({ data: dto });
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({
      include: { author: true }
    });
  }

  async findOne(id: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: id, include: { author: true } });
  }

  async update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prisma.book.update({ where, data });
  }

  async remove(where: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return this.prisma.book.delete({ where });

    // const deleteBook = this.prisma.book.delete({ where: id });
    // return this.prisma.$transaction([deleteBook]);
  }
}
