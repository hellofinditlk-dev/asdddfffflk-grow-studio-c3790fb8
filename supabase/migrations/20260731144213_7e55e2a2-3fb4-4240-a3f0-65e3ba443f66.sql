GRANT INSERT ON public.job_applications TO anon;
GRANT INSERT, SELECT ON public.job_applications TO authenticated;
GRANT ALL ON public.job_applications TO service_role;