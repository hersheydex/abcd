import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hnymztqezjiuyhltanim.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhueW16dHFlemppdXlobHRhbmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNjcxMzIsImV4cCI6MjA3Nzk0MzEzMn0.FrhrixOgkEri8wZ0eUwArClL2MSds0D4NL41a7M2PtA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
