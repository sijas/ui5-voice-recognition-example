describe('masterdetail', function () {

    it('should load the app',function() {
      expect(browser.getTitle()).toBe('Voice Recognition');
    });
  
    it('should display the details screen',function() {
      element(by.control({
        viewName: 'in.sijas.app.ui5.voicerecognition.VoiceRecognition.view.Master',
        controlType: 'sap.m.StandardListItem',
        properties: {
          title: 'Nancy Davolio'
        }}))
      .click();
    });
  
    it('should validate line items',function() {
      expect(element.all(by.control({
        viewName: 'in.sijas.app.ui5.voicerecognition.VoiceRecognition.view.Display',
        controlType:'sap.m.Text'}))
      .count()).toBe(4);
    });
  });