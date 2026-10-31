import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ insert: vi.fn(), error: vi.fn() }));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: () => ({ insert: mocks.insert }) } }));
vi.mock("sonner", () => ({ toast: { error: mocks.error } }));
import { recordBeforeOpening } from "@/lib/contactNavigation";
import { trackCallClick } from "@/lib/trackCallClick";
import { trackCtaClick } from "@/lib/trackCtaClick";
import { whatsappDetails } from "@/lib/contactRecords";

describe("contact recording rules", () => {
  beforeEach(() => { vi.clearAllMocks(); window.history.replaceState({}, "", "/social-media-cost-calculator?__lovable_receipt=private"); mocks.insert.mockResolvedValue({ error: null }); });
  afterEach(() => vi.restoreAllMocks());
  it("does not open WhatsApp until its record is accepted", async () => {
    const tab = { opener: {}, closed: false, location: { href: "about:blank" }, close: vi.fn() };
    vi.spyOn(window, "open").mockReturnValue(tab as unknown as Window);
    let accept: ((value: boolean) => void) | undefined;
    const pending = new Promise<boolean>(resolve => { accept = resolve; });
    const result = recordBeforeOpening(() => pending, "https://wa.me/94760317477", true);
    expect(tab.location.href).toBe("about:blank");
    accept?.(true);
    expect(await result).toBe(true);
    expect(tab.location.href).toBe("https://wa.me/94760317477");
  });
  it("retains the request without opening WhatsApp when recording fails", async () => {
    const tab = { opener: {}, closed: false, location: { href: "about:blank" }, close: vi.fn() };
    vi.spyOn(window, "open").mockReturnValue(tab as unknown as Window);
    expect(await recordBeforeOpening(() => Promise.resolve(false), "https://wa.me/94760317477", true)).toBe(false);
    expect(tab.location.href).toBe("about:blank");
    expect(tab.close).toHaveBeenCalledOnce();
  });
  it("records one call for delegated and legacy handlers on the same click", async () => {
    await Promise.all([trackCallClick("+94760317477"), trackCallClick("94760317477")]);
    expect(mocks.insert).toHaveBeenCalledTimes(1);
    expect(mocks.insert.mock.calls[0][0].phone).toBe("+94760317477");
  });
  it("does not count admin calls as visitor inquiries", async () => {
    window.history.replaceState({}, "", "/admin/inquiries");
    await trackCallClick("+94701772626");
    expect(mocks.insert).not.toHaveBeenCalled();
  });
  it("records the originating page without private preview query parameters", async () => {
    await trackCtaClick({ ctaType: "whatsapp", href: "https://wa.me/94760317477" });
    expect(mocks.insert.mock.calls[0][0].source_path).toBe("/social-media-cost-calculator");
  });
  it("shows WhatsApp destination and draft without inventing a visitor phone", () => {
    expect(whatsappDetails("https://wa.me/94760317477?text=Need%20a%20quote")).toEqual({ phone: "94760317477", message: "Need a quote" });
    expect(whatsappDetails("https://wa.link/example").phone).toBeNull();
  });
});