This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Tech Stack

- **Frontend**: React.js + Next.js (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL (via Prisma ORM)
- **Auth**: bcrypt + JWT
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel (opsional)

---

### 
- Node.js ≥ 18
- npm atau pnpm
- MySQL (MAMP/XAMPP)


1. **Clone repository**
   - git clone https://github.com/syalafudin/javis-login.git
   - cd javis-login-challenge

2. **Install dependensi**
   - npm install

3. **Setup environment**
   - DATABASE_URL="mysql://root:root@localhost:8889/javis_auth" (Sesuaikan dengan kredensial MySQL)
   - JWT_SECRET="javis_teknologi_rahasia_2025"

4. **Setup database**
   - npx prisma db push
   - npx prisma db seed

4. **Jalankan aplikasi**
   - npm run dev

admin@javis.com
password123

![Login Page (Desktop)](screenshots/login-mob.png)
![Login Page (Desktop)](screenshots/login.png)
![Login Page (Desktop)](screenshots/dashboard.png)
![Login Page (Desktop)](screenshots/dashboard-mob.png)