import { supabase } from "../lib/supabase.js";

export const getMarketPrices = async () => {
  const { data, error } = await supabase
    .from("market_prices")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};