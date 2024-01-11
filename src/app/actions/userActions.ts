"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

//create user
type createParams = { email: string; fullname: string; password: string };
export async function create(params: createParams) {
  const user = await prisma.user.create({
    data: {
      email: params.email,
      fullname: params.fullname,
      password: params.password,
    },
  });
  if (user === null) {
    cookies().delete("userId");
    return -1; // false o -1
  } //INTERPOLESION lo comvierte en String
  cookies().set("userId", `${user.id}`, { secure: true });
  return user.id;
}

//score
type submitParams = { score: number };
export async function submit(params: submitParams) {
  if (cookies().has("userId")) {
    const userId = parseInt(cookies().get("userId")?.value || "0");
    const score = await prisma.score.create({
      data: {
        score: params.score,
        userId: userId,
      },
    });
    return score.id;
  }
  return -1;
}

//login user
type loginParams = { email: string; password: string };
export async function login(params: loginParams) {
  const user = await prisma.user.findUnique({
    where: { email: params.email, password: params.password },
  });
  if (user === null) {
    cookies().delete("userId");
    return { user: undefined }; // false o -1
  } //INTERPOLESION lo comvierte en String
  cookies().set("userId", `${user.id}`, { secure: true });
  return { user: user };
}

export async function logout() {
  cookies().delete("userId");
  redirect("/login");
}

//delete score
type deleteParams = { scoreId: number };
export async function deleteScore(params: deleteParams) {
  const score = await prisma.score.delete({
    where: { id: params.scoreId },
  });
  revalidatePath("/admin/menu");
  redirect("/admin/menu");
}

//where es para buscar
//data crear y actualisar
