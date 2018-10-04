
describe('ajax test suite', function() {

    beforeEach(function() {
        FormModel = new FormModel();
        jasmine.Ajax.install();
    });

    afterEach(function() {
        // jasmine.Ajax.uninstall();
    });

    it('sample test', function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(args) {
            if (this.readyState == this.DONE) {
                FormModel.getGitHubUser(this.responseText);
            }
        };
        spyOn(FormModel, 'getGitHubUser').and.callThrough();
        xhr.open("GET", "https://api.github.com/users/ahmed");
        xhr.send();
        /*expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://api.github.com/users/ahmed');
        expect(FormModel.getGitHubUser).not.toHaveBeenCalled();
        jasmine.Ajax.requests.mostRecent().respondWith({
            "status": 200,
            "contentType": 'text/plain',
            "responseText": 'awesome response'
        });
        expect(FormModel.getGitHubUser).toHaveBeenCalledWith('awesome response');*/
    });
});

