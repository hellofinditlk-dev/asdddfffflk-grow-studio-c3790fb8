ALTER TABLE public.ai_visibility_leads
  ADD COLUMN IF NOT EXISTS source_page text,
  ADD COLUMN IF NOT EXISTS utm_source text;