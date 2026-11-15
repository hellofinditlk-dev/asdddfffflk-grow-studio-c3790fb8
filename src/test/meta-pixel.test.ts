import { describe, it, expect, vi, afterEach } from "vitest";
import { trackPixel } from "@/lib/metaPixel";
afterEach(() => { delete (window as any).fbq; });
describe("trackPixel", () => {
  it("sends events on public pages", () => { const f = vi.fn(); (window as any).fbq = f; expect(trackPixel("Lead", { a: 1 }, "/x")).toBe(true); expect(f).toHaveBeenCalledWith("track", "Lead", { a: 1 }); });
  it("skips admin pages", () => { const f = vi.fn(); (window as any).fbq = f; expect(trackPixel("PageView", undefined, "/admin/inquiries")).toBe(false); expect(f).not.toHaveBeenCalled(); });
  it("is safe without the pixel", () => { expect(trackPixel("Lead", undefined, "/x")).toBe(false); });
});
