import { supabase } from "../lib/supabase.js";

export const getCrops = async () => {
  const { data: userData, error: userError } =
    await supabase.auth.getUser();

  if (userError) throw userError;

  const userId = userData.user?.id;

  if (!userId) {
    throw new Error("User not logged in.");
  }

  const { data, error } = await supabase
    .from("crops")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

export const addCrop = async ({
  crop_name,
  status,
  progress,
  days,
}) => {
  const { data: userData, error: userError } =
    await supabase.auth.getUser();

  if (userError) throw userError;

  const userId = userData.user?.id;

  if (!userId) {
    throw new Error("User not logged in.");
  }

  const { data, error } = await supabase
    .from("crops")
    .insert([
      {
        user_id: userId,
        crop_name,
        status,
        progress,
        days,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
};
export const updateCrop = async (cropId, {
  crop_name,
  status,
  progress,
  days,
}) => {
  const { data: userData, error: userError } =
    await supabase.auth.getUser();

  if (userError) throw userError;

  const userId = userData.user?.id;

  if (!userId) {
    throw new Error("User not logged in.");
  }

  const { data, error } = await supabase
    .from("crops")
    .update({
      crop_name,
      status,
      progress,
      days,
    })
    .eq("id", cropId)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
};


export const deleteCrop = async (cropId) => {
  const { data: userData, error: userError } =
    await supabase.auth.getUser();

  if (userError) throw userError;

  const userId = userData.user?.id;

  if (!userId) {
    throw new Error("User not logged in.");
  }

  const { error } = await supabase
    .from("crops")
    .delete()
    .eq("id", cropId)
    .eq("user_id", userId);

  if (error) throw error;
};