import { prisma } from './index';

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id }
  });
}

export async function getPlatformByDomain(domain: string) {
  return await prisma.platform.findUnique({
    where: { domain }
  });
}