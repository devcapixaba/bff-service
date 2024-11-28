import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: 'api/graphql',
      formatError: (error) => {
        const graphQLFormattedError = {
          message: error.message || 'An unexpected error occurred',
        };
        return graphQLFormattedError;
      },
    }),
    HttpModule,
    UserModule,
  ],
})
export class AppModule {}
