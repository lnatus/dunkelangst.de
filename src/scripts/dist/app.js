var $ = window.$;
var DA;
(function (DA) {
    var AppService = (function () {
        function AppService() {
            this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }
        AppService.prototype.run = function () {
            var _this = this;
            var $name = $('#inputName');
            var $email = $('#inputEmail');
            var $request = $('#inputRequest');
            var $send = $('#btnSend');
            $('#da-contact-form .form-control').keyup(function () {
                if ($name.val() && $email.val() && $request.val() && _this.emailRegex.test($email.val())) {
                    $send.removeAttr('disabled');
                }
                else {
                    $send.attr('disabled', 'disabled');
                }
            });
        };
        return AppService;
    }());
    DA.AppService = AppService;
})(DA || (DA = {}));
