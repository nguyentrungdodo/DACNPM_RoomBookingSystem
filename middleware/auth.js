export default function (context) {
  if (!localStorage.getItem('username')) {
    context.redirect('/auth/login')
  }
}
