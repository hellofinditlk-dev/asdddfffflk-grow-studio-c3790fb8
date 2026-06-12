
CREATE TABLE public.cta_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cta_type TEXT NOT NULL,
  cta_label TEXT,
  placement TEXT,
  source_path TEXT,
  referrer TEXT,
  user_agent TEXT,
  href TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.cta_clicks TO authenticated;
GRANT INSERT ON public.cta_clicks TO anon;
GRANT ALL ON public.cta_clicks TO service_role;

ALTER TABLE public.cta_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a CTA click"
  ON public.cta_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all CTA clicks"
  ON public.cta_clicks FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX cta_clicks_created_at_idx ON public.cta_clicks (created_at DESC);
CREATE INDEX cta_clicks_source_path_idx ON public.cta_clicks (source_path);
