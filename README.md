# PaymentTestApp

Stripe SDk integrated sample test APP in react native.
it include server code in server folder

i have taken the references from below
https://www.youtube.com/watch?v=SH2bi-1MUNM&t=650s

craate secret keys using below url:
https://dashboard.stripe.com/test/apikeys

test the applcition using below data provided by the stripe:
https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet#react-native-test

https://github.com/nathvarun/Expo-Stripe-Tutorial/
on the top of above code i made some change in Stripe.js folder 
paymentMethodType: "Card",
line no: 52

To start project 
$ cd PaymentTestApp/
$ npx expo   

to start server
$ cd PaymentTestApp/server
$ nodemon index.js  

we can get the belog after successful login
 LOG  Payment successful  {"amount": 1099, "canceledAt": null, "captureMethod": "Automatic", "clientSecret": "pi_3OL3FSDIjkIdotnu1pf8ac7l_secret_XhzhWMBHvNUMYKOe3qEwCjNPL", "confirmationMethod": "Automatic", "created": "1702038822000", "currency": "usd", "description": "<StripePayments.STPPaymentIntent: 0x7f78e5542260; stripeId = pi_3OL3FSDIjkIdotnu1pf8ac7l; amount = 1099; canceledAt = nil; captureMethod = Optional(\"automatic\"); clientSecret = <redacted>; confirmationMethod = Optional(\"automatic\"); countryCode = nil; created = 2023-12-08 12:33:42 +0000; currency = usd; description = nil; lastPaymentError = nil; linkSettings = nil; livemode = false; nextAction = nil; paymentMethodId = Optional(\"pm_1OL3FTDIjkIdotnuG7mdeWw1\"); paymentMethod = Optional(<StripePayments.STPPaymentMethod: 0x7f78e4c975f0; stripeId = pm_1OL3FTDIjkIdotnuG7mdeWw1; alipay = nil; auBECSDebit = nil; bacsDebit = nil; bancontact = nil; billingDetails = Optional(<StripePayments.STPPaymentMethodBillingDetails: 0x60000071d400; name = ; phone = ; email = ; address = Optional(<StripePayments.STPPaymentMethodAddress: 0x600000827780; line1 = ; line2 = ; city = ; state = ; postalCode = ; country = >)>); card = Optional(<StripePayments.STPPaymentMethodCard: 0x60000157db90; brand = Visa; checks = <StripePayments.STPPaymentMethodCardChecks: 0x6000028e9a10; addressLine1Check: ; addressPostalCodeCheck: ; cvcCheck: >; country = US; expMonth = 4; expYear = 2024; funding = credit; last4 = 4242; fingerprint = ; networks = <StripePayments.STPPaymentMethodCardNetworks: 0x6000028e90b0; available: [\"visa\"]; preferred: >; threeDSecureUsage = <StripePayments.STPPaymentMethodThreeDSecureUsage: 0x6000026b2f20; supported: YES>; wallet = >); cardPresent = nil; created = Optional(2023-12-08 12:33:43 +0000); customerId = ; ideal = nil; eps = nil; fpx = nil; giropay = nil; netBanking = nil; oxxo = nil; grabPay = nil; payPal = nil; przelewy24 = nil; sepaDebit = nil; sofort = nil; upi = nil; afterpay_clearpay = nil; blik = nil; weChatPay = nil; boleto = nil; link = nil; klarna = nil; affirm = nil; usBankAccount = nil; cashapp = nil; liveMode = NO; type = card>); paymentMethodOptions = nil; paymentMethodTypes = Optional([\"card\"]); receiptEmail = nil; setupFutureUsage = nil; shipping = nil; sourceId = nil; status = Optional(\"succeeded\"); unactivatedPaymentMethodTypes = []>", "id": "pi_3OL3FSDIjkIdotnu1pf8ac7l", "lastPaymentError": null, "livemode": false, "nextAction": null, "paymentMethod": {"AuBecsDebit": {"bsbNumber": null, "fingerprint": null, "last4": null}, "BacsDebit": {"fingerprint": null, "last4": null, "sortCode": null}, "Card": {"availableNetworks": [Array], "brand": "Visa", "country": "US", "expMonth": 4, "expYear": 2024, "fingerprint": null, "funding": "credit", "last4": "4242", "preferredNetwork": null, "threeDSecureUsage": [Object]}, "Fpx": {"bank": ""}, "Ideal": {"bankIdentifierCode": "", "bankName": ""}, "SepaDebit": {"bankCode": null, "country": null, "fingerprint": null, "last4": null}, "Sofort": {"country": null}, "USBankAccount": {"accountHolderType": "Unknown", "accountType": "Unknown", "bankName": null, "fingerprint": null, "last4": null, "linkedAccount": null, "preferredNetworks": null, "routingNumber": null, "supportedNetworks": null}, "Upi": {"vpa": null}, "billingDetails": {"address": [Object], "email": null, "name": null, "phone": null}, "customerId": null, "id": "pm_1OL3FTDIjkIdotnuG7mdeWw1", "livemode": false, "paymentMethodType": "Card"}, "paymentMethodId": "pm_1OL3FTDIjkIdotnuG7mdeWw1", "receiptEmail": null, "shipping": null, "status": "Succeeded"}
