## About the Project

X-lite-Clone aims to replicate the functionalities of the X, formerly known as Twitter.


### Built With

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Prisma](https://www.prisma.io/)
- [Neon](https://neon.tech/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- PostgreSQL database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Anupam0-0/X-lite-Clone.git
   cd X-lite-Clone
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=your_postgresql_database_url
   CLERK_API_KEY=your_clerk_api_key
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   ```

   Replace `your_postgresql_database_url`, `your_clerk_api_key`, and `your_clerk_frontend_api` with your actual credentials.

4. **Initialize the database:**

   Run the following command to apply database migrations:

   ```bash
   npx prisma migrate dev
   ```

### Running the Application

1. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

2. **Access the application:**

   Open your browser and navigate to `http://localhost:3000`.


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
