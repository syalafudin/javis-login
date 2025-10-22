import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  let user;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    user = { id: decoded.userId };
  } catch (e) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Anda berhasil login! User ID: <span className="font-mono">{user.id}</span>
        </p>

        {/* Logout via POST form */}
        <form action="/api/auth/logout" method="post" className="mt-6">
          <button
            type="submit"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}