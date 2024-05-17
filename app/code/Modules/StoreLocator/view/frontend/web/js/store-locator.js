define(["ko", "uiComponent", "jquery"], function (ko, Component, $) {
    return Component.extend({
        defaults: {
            template: "Modules_StoreLocator/store-locator",
        },
        initialize: function () {
            this._super();
            console.log("Store Locator Component Initialized");
        },
    });
});
