import { describe, it, expect } from "vitest";
import { getVacancyBySlug } from "@/data/vacancies";

describe("Remote calling vacancy", () => {
  it("uses confirmed remote project terms without inventing a salary", () => {
    const vacancy = getVacancyBySlug("work-from-home-call-center-jobs-sri-lanka");
    expect(vacancy?.remote).toBe(true);
    expect(vacancy?.employmentType).toEqual(["PART_TIME", "CONTRACTOR"]);
    expect(vacancy?.salaryRange).toBeUndefined();
    expect(vacancy?.monthsExperience).toBe(0);
    expect(vacancy?.validThrough).toBe("2027-01-31T23:59:00+05:30");
    expect(vacancy?.projectDetails?.workflow).toHaveLength(5);
    expect(vacancy?.faqs).toHaveLength(8);
    expect(JSON.stringify(vacancy)).not.toMatch(/\[X\]|\[rate\]|\[bonus\]|e\.g\./);
  });
});