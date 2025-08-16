export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

// Remove the Sequelize Model class - not needed with Prisma
// Database operations will be handled by Prisma Client through your db/index.ts

// User model without Sequelize - using plain TypeScript interface only
// For PostgreSQL integration, you'll need to implement database operations separately
// This is just the data structure definition

export default User;
