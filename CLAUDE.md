# Edge Compute market feed

`market-feed.json` is downloaded once by every copy of **Edge Compute Sizer** when it opens (Tesco edge/SCO compute RFP tool). Owner: AJ (Ajay04-luffy). Accuracy matters more than volume: these numbers end up in RFP specs.

## Rules for every update
- Never invent numbers. `mt` (PassMark CPU Mark) and `st` (PassMark single-thread) come from cpubenchmark.net only. If one isn't published, leave it blank or keep the existing value, and set `benchEstimated: true` only for genuine estimates.
- `amt` = true only when Intel ARK or Intel's vPro SKU list confirms vPro/AMT for that exact SKU.
- Every row you add or change gets `verifiedOn` (today) and `sources` (URLs actually used).
- Don't delete CPUs. Set `"shipping": false` with a note when a part is discontinued.
- **Older CPUs (`legacy: true`)** are estate reference only: the tool lists them for describing today's hardware but never recommends them. Keep them, keep their PassMark scores current, and add older POS/kiosk/SCO CPUs when they're missing. Never set `legacy` on a part that should be recommended.
- Keep the schema: `cpus[]` (pack fields), `memory[]` (type, family, speedMTs, moduleSizesGB, singleModule, upgradable), `storage[]` (type, capacitiesGB, tbwPerTB, costRank), `feedVersion`.
- Run `node tools/validate-feed.mjs market-feed.json` before committing. **Never push if it reports an ERROR.**
- Log changes at the **top** of `CHANGELOG.md` (newest first).
