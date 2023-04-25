import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma, Author } from "@prisma/client";

@Injectable()
export class AuthorsService {

  constructor(private prisma: PrismaService) {
  }

  async create(data: Prisma.AuthorCreateInput): Promise<Author> {
    return this.prisma.author.create({ data });
  }

  async findAll(): Promise<Author[]> {
    return this.prisma.author.findMany({
      include: {
        books: {
          select: { id: true, title: true }
        }
      }
    });
  }

  async findOne(where: Prisma.AuthorWhereUniqueInput): Promise<Author | null> {
    return this.prisma.author.findUnique({
      where,
      include: {
        books: {
          select: { id: true, title: true }
        }
      }
    });
  }

  async update(where: Prisma.AuthorWhereUniqueInput, data: Prisma.AuthorUpdateInput) {
    return this.prisma.author.update({ where, data });
  }

  async remove(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({ where });
  }
}
