import { supabase } from "../lib/supabase.js";

export const getNearbyServices = async () => {
  const { data, error } = await supabase
    .from("nearby_services")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};