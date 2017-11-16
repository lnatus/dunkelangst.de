const { $ } = window

namespace DA {
  export class AppService {
    private emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    public run () {

      $("#da-contact-form").submit(function(event) {
        event.preventDefault();
        const $form = $( this ), url = $form.attr('action');
        const post = $.post(
          url,
          {
            name: $('#inputName').val(),
            email: $('#inputEmail').val(),
            phone: $('#inputPhone').val(),
            request: $('#inputRequest').val()
        });

        post.done((data) => {
          alert(data);
        });
      });

      const $name = $('#inputName')
      const $email = $('#inputEmail')
      const $request = $('#inputRequest')
      const $send = $('#btnSend')

      $('#da-contact-form .form-control').keyup(() =>{
        if($name.val() && $email.val() && $request.val() && this.emailRegex.test($email.val())){
          $send.removeAttr('disabled')
        } else {
          $send.attr('disabled', 'disabled')
        }
      })
    }
  }
}
