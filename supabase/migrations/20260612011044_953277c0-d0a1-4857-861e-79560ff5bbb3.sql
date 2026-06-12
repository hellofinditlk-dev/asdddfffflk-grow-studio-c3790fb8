
DROP TRIGGER IF EXISTS enforce_single_admin_trigger ON public.user_roles;

CREATE TRIGGER enforce_single_admin_trigger
BEFORE INSERT OR UPDATE ON public.user_roles
FOR EACH ROW
EXECUTE FUNCTION public.enforce_single_admin();
