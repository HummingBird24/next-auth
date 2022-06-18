module.exports = {
  reference: [{ type: "autogenerated", dirName: "reference" }],
  guides: [{ type: "autogenerated", dirName: "guides" }],
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/introduction",
        "getting-started/oauth-tutorial",
        "getting-started/typescript",
        "getting-started/upgrade-v4",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      collapsed: true,
      items: [
        "configuration/databases",
        "configuration/pages",
        "configuration/callbacks",
        "configuration/events",
      ],
    },
    {
      type: "html",
      value:
        '<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAI6K3N&placement=next-authjsorg" id="_carbonads_js"></script>',
      defaultStyle: true,
    },
  ],
}
