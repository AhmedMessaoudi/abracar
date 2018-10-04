var FormController = function(pModel){

    this.model = pModel || new FormModel();

    this.getGitHubUser = function(user){
       this.model.getGitHubUser(user);
    }
};

FormController.prototype.init = function(){

    var self = this;

    $('#user').click(function(){
        self.getGitHubUser($('#username').val());

    });

};

FormController.prototype.getModel = function(){
    return this.model;
};