import { describe, expect, it } from 'vitest';
import { partnerProfit, partnerPackages, partnerMoney } from '@/data/white-label-partners';

describe('partner profit calculator', () => {
  it('calculates monthly and yearly gross profit', () => {
    expect(partnerProfit(600, 289, 'USD')).toEqual({ monthly: 311, yearly: 3732 });
  });
  it('uses matching currency costs and allows losses', () => {
    expect(partnerProfit(450, 289, 'GBP').monthly).toBe(233.25);
    expect(partnerProfit(100, 179, 'USD').monthly).toBe(-79);
  });
  it('includes all eleven monthly packages and formats their currencies', () => {
    expect(partnerPackages).toHaveLength(11);
    expect(partnerMoney(800, 'EUR')).toContain('696');
  });
});