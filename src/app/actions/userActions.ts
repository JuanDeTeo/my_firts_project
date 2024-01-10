"use server";

import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function create() {
  const user = await prisma.user.create({
    data: { email: "juan@gmail.com", fullname: "Juan De Dios Mendoza" },
  });
}
type loginParams = { email: string; password: string };
export async function login(params: loginParams) {
  const user = await prisma.user.findUnique({
    where: { email: params.email, password: params.password },
  });
  if (user === null) {
    cookies().delete("userId");
    return -1; // false o -1
  } //INTERPOLESION lo comvierte en String
  cookies().set("userId", `${user.id}`, { secure: true });
  return user.id;
}

export async function logout() {
  cookies().delete("userId");
  redirect("/login");
}
