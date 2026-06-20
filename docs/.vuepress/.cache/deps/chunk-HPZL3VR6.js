// node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.20_@algolia+client-search@4.24.0_@types+node@22.7.4_jiti@1_14ba0f87328f856224892e589c3252b8/node_modules/vuepress-theme-reco/lib/client/utils/other.js
function formatISODate(ISODate = "") {
  const dateStr = ISODate.replace("T", " ").replace("Z", "").split(".")[0];
  const formatDateStr = dateStr.replace(/(\s00:00:00)$/, "");
  return formatDateStr;
}

export {
  formatISODate
};
//# sourceMappingURL=chunk-HPZL3VR6.js.map
