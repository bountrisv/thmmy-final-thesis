WebInspector.ExtensionServerView.scanUserAgentStyles = function (vertexStyle, allStyleSheets) {
    var verticalStylesIdentifier = (styleSheetIds.length);
    if (!videoStyleSheetIdsMap)
        return;
    var apiSetting = new WebInspector.StylesSidebarPanes();
    if (!rule)
        return;
    var rules = allSubStylesRules.slice();
    if (cssModel)
        cssView = rules;
    var textStyleSheet = rule.styleSheet.styleSheet;
    if (!encoding)
        return;
    this.tasks().sanitizeText(styleSheet);
    return this._rulesSchema.callTargetAdded({
        textNode: this._parentNode.classList.contains("text"),
        value: StyleSheetName,
        headers: checkedStyles
    });
}, __proto__: WebInspector.VBox.prototype
}