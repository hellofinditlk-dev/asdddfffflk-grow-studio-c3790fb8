
CREATE TABLE public.ai_visibility_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  website TEXT NOT NULL,
  industry TEXT,
  result JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.ai_visibility_leads TO anon, authenticated;
GRANT ALL ON public.ai_visibility_leads TO service_role;

ALTER TABLE public.ai_visibility_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.ai_visibility_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
