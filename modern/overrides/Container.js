Ext.define('Patches', {
    override: 'Ext.Container',

    getComponent: function(component) {
        if (typeof component === 'number') {
            return this.getItems().getAt(component);
        }

        if (Ext.isObject(component) && component.hasOwnProperty('itemId')) {
            component = component.getItemId();
        }

        return this.getItems().get(component);
    },

    /**
     * Removes an item from this Container, optionally destroying it.
     * @param {Ext.Component/String/Number} component The component instance or id or index to remove.
     * @param {Boolean} [destroy] `true` to automatically call Component's
     * {@link Ext.Component#method-destroy destroy} method.
     *
     * @return {Ext.Component} The Component that was removed.
     */
    remove: function(component, destroy) {
        var me = this,
            index, innerItems;

        component = me.getComponent(component);

        index = me.indexOf(component);
        innerItems = me.getInnerItems();

        if (destroy === undefined) {
            destroy = me.getAutoDestroy();
        }

        if (index !== -1) {
            if (!me.removingAll && innerItems.length > 1 && component === me.getActiveItem()) {
                me.on({
                    activeitemchange: 'doRemove',
                    scope: me,
                    single: true,
                    order: 'after',
                    args: [component, index, destroy]
                });

                me.doResetActiveItem(innerItems.indexOf(component));
            } else {
                me.doRemove(component, index, destroy);
                if (innerItems.length === 0) {
                    me.setActiveItem(null);
                }
            }
        }

        return component;
    }
});
