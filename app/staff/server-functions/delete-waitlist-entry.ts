"use server";

import { supabaseClient } from "@/utils/supabase-client";
import { revalidatePath } from "next/cache";

export async function deleteWaitlistEntry(formData: FormData) {
  const id = formData.get("id") as string;

  const { error } = await supabaseClient
    .from("waitlist")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/staff"); // adjust if needed
}