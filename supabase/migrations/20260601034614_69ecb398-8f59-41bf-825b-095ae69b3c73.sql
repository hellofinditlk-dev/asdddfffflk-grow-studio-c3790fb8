CREATE TABLE public.inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text,
  phone text NOT NULL,
  message text,
  service text,
  source_path text,
  extra jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.inquiries TO anon, authenticated;
GRANT SELECT ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
ON public.inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view all inquiries"
ON public.inquiries
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX idx_inquiries_service ON public.inquiries (service);