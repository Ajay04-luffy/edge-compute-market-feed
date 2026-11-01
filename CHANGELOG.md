# Changelog (newest first)

## 2026-11-01 — Core Series 3 (Wildcat Lake) low tier
- **Added** 7 Intel Core Series 3 "Wildcat Lake" SKUs (Intel 18A, launched Q2 2026, listed on Intel's embedded/edge page): Core 7 360, Core 7 350, Core 5 330, Core 5 320, Core 5 315, Core 3 305 (edge-only, no NPU), Core 3 304. All 15 W base / 35 W max, single memory channel (DDR5-6400 up to 64 GB or LPDDR5X-7467 up to 48 GB), 10-year availability per Intel for embedded use.
- **No vPro/AMT:** ARK lists Intel AMT = No and Intel Standard Manageability = Yes for the 360, 330, 320 and 305, so all seven are set to `amt: false`. For the 350, 315 and 304 no ARK spec page was fetched; they're set to `amt: false` based on their siblings and flagged in `oobMgmt`.
- mt/st from PassMark (cpubenchmark.net), 1 Nov 2026. The 360 (9 samples), 305 (8) and 315 (16) have low sample counts, so expect drift.
- `priceUSD` left blank because Intel publishes no price for these parts.
- **Checked, unchanged:** PassMark for Core Ultra 5 335, 5 336H, 7 366H, X7 368H, 9 386H and X9 388H is within 3% of the feed. No PassMark entry exists yet for Core 5 130HL, so it stays `benchEstimated: true`.
- **Unverified:** Wildcat Lake Refresh / Moon Lake (reported to add vPro) is leak-only as of 28 Oct 2026 and not added. Memory and storage were not changed.

## 2026-10-31 — older estate CPUs
- Added 26 older Intel CPUs as `legacy: true` (estate reference only, never recommended): Celeron J1900, J4125, N5105, J6412, N100; Core i3-6100T, i5-6500T, i5-7500T, i3-8100T, i5-8500T, i5-9500T, i3-10100T, i5-10500T, i5-11400T; Celeron 6305E, Core i3-1115G4(E), i5-1135G7, i5-1145G7E, i7-1185G7E; Alder Lake-PS i5-1235UL, i3-12300HL, i5-12500HL, i5-12600HL; Core 5 120UL, Core 5 120U.
- All benchmarks come from PassMark (cpubenchmark.net), with sources on each row.

## 2026-10-31 — initial feed
- 14 CPUs (Intel vPro edge/mobile from Core 5 130HL to Core Ultra X9 388H, plus AMD embedded for reference), 5 memory options (DDR5 SO-DIMM/CSODIMM, LPCAMM2, soldered LPDDR5X), 3 storage classes.
- Weekly automated refresh set up.
