define([
    'core/js/adapt',
    './tables_accordeon_1Model',
    './tables_accordeon_1View'
], function(Adapt, tables_accordeon_1Model, tables_accordeon_1View) {

    return Adapt.register('tables_accordeon_1', {
        model: tables_accordeon_1Model,
        view: tables_accordeon_1View
    });

});
