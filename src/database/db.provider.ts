import * as mongoose from 'mongoose';

export const dbProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://ahmadpro:ahmadpro@js-ts-testing.pr657f6.mongodb.net/',
      ),
  },
];
