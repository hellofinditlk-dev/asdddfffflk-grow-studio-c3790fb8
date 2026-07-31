CREATE TABLE public.job_applications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text,
  phone text NOT NULL,
  position_title text NOT NULL,
  position_slug text,
  experience text,
  portfolio_link text,
  message text,
  source_path text,
  referrer text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.job_applications TO anon;
GRANT SELECT, INSERT ON public.job_applications TO authenticated;
GRANT ALL ON public.job_applications TO service_role;

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a job application"
ON public.job_applications FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admins can view all job applications"
ON public.job_applications FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_job_applications_created_at ON public.job_applications (created_at DESC);