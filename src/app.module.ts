import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [BooksModule, AuthorsModule],
  controllers: [AppController],
})
export class AppModule {}
