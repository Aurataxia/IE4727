'use strict'

const form = document.getElementById('update-prices')
const submit = document.getElementById('submit-btn')

submit.addEventListener('click', (event) => {
  event.preventDefault()

  form.submit()
  window.alert('Price updated!')
})
