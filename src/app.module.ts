import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestService } from './api/rest/rest.service';
import { ApiModule } from './api/api.module';
import { LibroController } from './api/libro/libro.controller';

@Module({
  imports: [ApiModule],
  controllers: [AppController, LibroController],
  providers: [AppService, RestService],
})
export class AppModule {}
