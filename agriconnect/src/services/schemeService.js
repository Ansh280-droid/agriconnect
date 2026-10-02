import { supabase } from "../lib/supabase.js";

export const getGovernmentSchemes = async () => {
  const { data, error } = await supabase
    .from("government_schemes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};