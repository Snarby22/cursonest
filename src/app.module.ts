import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestService } from './api/rest/rest.service';
import { ApiModule } from './api/api.module';
import { LibroController } from './api/libro/libro.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ApiModule,
    MongooseModule.forRoot(
        'mongodb://localhost:27017/test', // The database name
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ),
    ],
  controllers: [AppController, LibroController],
  providers: [AppService, RestService],
})
export class AppModule {}
