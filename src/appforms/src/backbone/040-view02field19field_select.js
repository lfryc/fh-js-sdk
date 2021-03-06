FieldSelectView = FieldView.extend({
  select: "<select class='fh_appform_field_input form-control <%= repeatingClassName%> col-xs-12' data-field='<%= fieldId %>' data-index='<%= index %>'><%= options %></select>",
  option: '<option value="<%= value %>" <%= selected %>><%= value %></option>',

  renderInput: function(index) {
    var self=this;
    var fieldId=this.model.getFieldId();
    var choices = this.model.get('fieldOptions');
    choices = choices.definition.options;
    var options="";
    var selectHtml = "";
    var html = "";
    var repeatingClassName = this.model.isRepeating() ? this.repeatingClassName : this.nonRepeatingClassName;


    var optionTemplate = _.template(self.option);
    $.each(choices, function(i, choice) {

      options += optionTemplate({
        "value": choice.label,
        "selected": (choice.checked) ? "selected='selected'" : ""
      });
    });

    return $(_.template(this.select)({
      "fieldId":fieldId,
      "index":index,
      "options":options,
      "repeatingClassName": repeatingClassName
    }));
  }
});