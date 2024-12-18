import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [DatabaseModule,
     UserModule,
      EmployeesModule,
ThrottlerModule.forRoot([{
  name : 'short',
  ttl : 60000,
  limit : 3,
},{
  name : 'long',
  ttl : 60000,
  limit : 100
}])    
    ],
  controllers: [AppController],
  providers: [AppService,{
    provide : APP_GUARD,
    useClass : ThrottlerGuard,
  }],
})
export class AppModule {}
