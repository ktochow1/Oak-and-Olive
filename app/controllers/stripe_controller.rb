class StripeController < ApplicationController 
    Stripe.api_key = 'sk_test_51I2gHQCi9N7b9YvAxtHRDpEC1WAydTsAOx87M9UKBIxcqZn2YzoH2fJ1m1UiXZk5JwB2fwkrzEWfkdPkrGK3X4W600I1K1xwcP'

    Stripe::PaymentIntent.create({
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
        receipt_email: 'ktochow1@binghamton.edu'
    })


end