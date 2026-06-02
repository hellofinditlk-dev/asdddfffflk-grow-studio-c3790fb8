CREATE TABLE public.call_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text NOT NULL,
  source_path text,
  user_agent text,
  referrer text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.call_clicks TO anon, authenticated;
GRANT SELECT ON public.call_clicks TO authenticated;
GRANT ALL ON public.call_clicks TO service_role;

ALTER TABLE public.call_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a call click"
  ON public.call_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all call clicks"
  ON public.call_clicks FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX call_clicks_created_at_idx ON public.call_clicks (created_at DESC);