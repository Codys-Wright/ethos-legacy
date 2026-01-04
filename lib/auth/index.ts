import { getServerSession } from 'next-auth';
import { authOptions } from './config';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export async function getUserId() {
  const user = await getCurrentUser();
  return user?.id;
}